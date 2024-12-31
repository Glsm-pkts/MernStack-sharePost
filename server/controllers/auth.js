const AuthSchema = require('../models/auth.js');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Kullanıcı var mı kontrolü
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'Bu e-posta adresi zaten kullanılıyor' });
    }

    // Parola uzunluk kontrolü
    if (password.length < 6) {
      return res.status(400).json({ message: 'Parola 6 karakterden uzun olmalıdır' });
    }

    // E-posta format kontrolü
    if (!isEmail(email)) {
      return res.status(400).json({ message: 'Geçersiz e-posta formatı' });
    }

    // Parola şifreleme ve kullanıcı oluşturma
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await AuthSchema.create({ username, password: passwordHash, email });

    // JWT token oluşturma
    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.status(201).json({ status: "OK", newUser, token });
  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ message: 'Sunucu hatası: ' + error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcı var mı kontrolü
    const user = await AuthSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Parola doğrulama
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ message: 'Parola yanlış' });
    }

    // JWT token oluşturma
    const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.status(200).json({ status: "OK", user, token });
  } catch (error) {
    console.error("Hata:", error.message);
    return res.status(500).json({ message: 'Sunucu hatası: ' + error.message });
  }
};

function isEmail(emailAdress) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(emailAdress);
}

module.exports = { register, login };
