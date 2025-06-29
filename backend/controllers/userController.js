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

      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Preencha todos os campos corretamente." });
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name },
        },
      });

      if (error) {
        console.error(`Erro no Supabase Auth ${error.message}`);
        throw new Error(`Erro no Supabase Auth: ${error.message}`);
      } else {
        console.log("Subiu no Supabase Auth", data);
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
      res
        .status(500)
        .json({ message: "Erro ao cadastrar usuário.", error: error.message });
    }
  },

  async loginUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos corretamente." });
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        return res
          .status(401)
          .json({ message: "Erro ao realizar Login", error: error.message });
      } else {
        return res.status(200).json({
          message: "Login realizado com sucesso!",
          user: {
            id: data.user.id,
            email: data.user.email,
            display_name: data.user.user_metadata.display_name,
          },
          access_token: data.session.access_token,
          expires_at: data.session.expires_at,
        });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro ao realizar Login.", error: error.message });
    }
  },
};

export default userController;
