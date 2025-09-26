const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado.' });
    }
    const newUser = await User.create({ email, password });
    res.status(201).json({ message: 'Usuário registrado com sucesso!', user: { email: newUser.email, id: newUser._id } });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }
    res.status(200).json({ message: 'Login bem-sucedido!', user: { email: user.email, id: user._id } });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login.', error: error.message });
  }
};

module.exports = { registerUser, loginUser };