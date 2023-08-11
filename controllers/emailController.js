require('dotenv').config();

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Cargar la plantilla HTML
  const parentDir = path.dirname(__dirname);
  const templatePath = path.join(parentDir, 'email_templates', 'email_template.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const html = template.replace('{{ date }}', data.date).replace('{{ list }}', data.list);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: data.email,
    subject: 'El resultado del calculo fibonacci',
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado correctamente');

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
};

module.exports = { sendEmail };
