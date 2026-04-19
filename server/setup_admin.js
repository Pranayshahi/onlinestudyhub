const bcrypt = require('bcryptjs');
const pool = require('./db');

async function setupAdmin() {
  const email = 'admin@onlinestudyhub.in';
  const password = 'temp12345';
  const name = 'Admin User';

  try {
    const [existing] = await pool.query('SELECT id FROM students WHERE email = ?', [email]);
    if (existing.length > 0) {
      console.log('Admin user already exists.');
      process.exit(0);
    }

    const hash = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO students (email, password_hash, name) VALUES (?, ?, ?)',
      [email, hash, name]
    );

    console.log('✅ Dummy Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (err) {
    console.error('❌ Error creating admin user:', err);
  } finally {
    process.exit(0);
  }
}

setupAdmin();
