const request = require('supertest');
const app = require('../index');
const { Student } = require('../models');

describe('Authentication API', () => {
  const testStudent = {
    name: 'Test Student',
    email: 'test@student.com',
    password: 'password123',
  };

  describe('Student Registration', () => {
    it('should register a new student successfully', async () => {
      const res = await request(app)
        .post('/api/auth/student/register')
        .send(testStudent);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('id');
      expect(res.body.email).toEqual(testStudent.email);
    });

    it('should fail if email is already registered', async () => {
      // Create first student
      await request(app)
        .post('/api/auth/student/register')
        .send(testStudent);
      
      // Attempt second registration
      const res = await request(app)
        .post('/api/auth/student/register')
        .send(testStudent);
      
      expect(res.statusCode).toEqual(409);
      expect(res.body.error).toEqual('Email already registered');
    });

    it('should fail if required fields are missing', async () => {
      const res = await request(app)
        .post('/api/auth/student/register')
        .send({ email: 'test@student.com' });
      
      expect(res.statusCode).toEqual(400);
      expect(res.body.error).toEqual('All fields required');
    });
  });

  describe('Student Login', () => {
    beforeEach(async () => {
      await request(app)
        .post('/api/auth/student/register')
        .send(testStudent);
    });

    it('should login successfully with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/student/login')
        .send({ email: testStudent.email, password: testStudent.password });
      
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.email).toEqual(testStudent.email);
    });

    it('should fail login with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth/student/login')
        .send({ email: testStudent.email, password: 'wrongpassword' });
      
      expect(res.statusCode).toEqual(401);
      expect(res.body.error).toEqual('Invalid credentials');
    });
  });
});
