const userModel = {
  async createUser(pgPool, { name, email, password }) {
    const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;
    await pgPool.query(query, [name, email, password]);
  },

  async findUserByEmail(pgPool, email) {
    const result = await pgPool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    return result.rows[0];
  },
};

export default userModel;