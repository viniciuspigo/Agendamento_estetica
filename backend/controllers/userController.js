import { pgPool, supabase } from "../config/supabase.js";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

const userController = {
  async registerUser(req, res) {
    const { name, email, password } = req.body;

    try {
      // Verificando se o usuário já existe
      const existingUser = await userModel.findUserByEmail(pgPool, email);

      if (existingUser) {
        return res.status(400).json({ message: "Email já cadastrado." });
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name },
        },
      });

      if (error) {
        console.error(`OLHA O ERRO AQUI ${error}`);
        throw new Error(`Erro no Supabase Auth: ${error.message}`);
      } else {
        console.log("deu bão", data)
      }

      // Criptografia da senha no BD
      const hashedPassword = await bcrypt.hash(password, 10);

      await userModel.createUser(pgPool, {
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Cadastro realizado com sucesso!" });
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
      res.status(500).json({ message: "Erro ao cadastrar usuário.", error });
    }
  },
};

export default userController;
