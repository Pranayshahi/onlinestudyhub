const bcrypt = require('bcryptjs');
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const connectDB = require('./db');
const { Teacher } = require('./models');

async function setupAdmin() {
  await connectDB();

  const email = 'admin@onlinestudyhub.in';
  const password = 'temp12345';

  try {
    const existing = await Teacher.findOne({ email });
    if (existing) {
      console.log('✅ Dummy teacher already exists.');
      console.log('Email:', email);
      console.log('Password:', password);
      process.exit(0);
    }

    const hash = await bcrypt.hash(password, 10);
    await Teacher.create({
      email,
      password_hash: hash,
      name: 'Demo Teacher',
      avatar: '👨‍🏫',
      subject: 'Mathematics',
      class_ids: 'class-9,class-10,jee',
      experience: 5,
      qualification: 'M.Sc Mathematics',
      fee: 500,
      bio: 'Demo account for testing the teacher portal.',
      topics: 'Algebra,Calculus,Trigonometry',
      contact: '+91 9999999999',
      available: true,
    });

    console.log('✅ Dummy teacher created!');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    process.exit(0);
  }
}

setupAdmin();
