const request = require('supertest');
const app = require('../index');
const { ContactSubmission } = require('../models');

describe('Contact Support & Super Admin Audit API', () => {
  describe('POST /api/contact/submit', () => {
    it('should submit feedback successfully without exposing recipient email', async () => {
      const submission = {
        name: 'Jane Student',
        email: 'jane@example.com',
        type: 'Feedback',
        subject: 'Great Chapter Notes!',
        priority: 'Normal',
        message: 'The Class 10 Physics notes are extremely helpful. Thank you!'
      };

      const res = await request(app)
        .post('/api/contact/submit')
        .send(submission);

      expect(res.statusCode).toEqual(201);
      expect(res.body.ok).toBe(true);
      expect(res.body.message).toContain('delivered');
      expect(JSON.stringify(res.body)).not.toContain('shahipran@gmail.com');

      // Verify stored in DB
      const dbRecord = await ContactSubmission.findOne({ email: 'jane@example.com' });
      expect(dbRecord).not.toBeNull();
      expect(dbRecord.subject).toEqual('Great Chapter Notes!');
    });

    it('should fail contact submission if required fields are missing', async () => {
      const res = await request(app)
        .post('/api/contact/submit')
        .send({ email: 'jane@example.com' });

      expect(res.statusCode).toEqual(400);
      expect(res.body.error).toEqual('Name, subject, and message are required');
    });
  });

  describe('Super Admin Portal Authentication & Audit Logs', () => {
    it('should login super admin with 9999 PIN', async () => {
      const res = await request(app)
        .post('/api/admin/login')
        .send({ adminPin: '9999' });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body.role).toEqual('superadmin');
    });

    it('should fail login with invalid credentials', async () => {
      const res = await request(app)
        .post('/api/admin/login')
        .send({ email: 'wrong@admin.com', password: 'wrongpassword', adminPin: '0000' });

      expect(res.statusCode).toEqual(401);
      expect(res.body.error).toContain('Invalid Super Admin credentials');
    });

    it('should fetch audit logs, loggedInUsers, and registered user lists for authenticated super admin', async () => {
      // Login to get token
      const loginRes = await request(app)
        .post('/api/admin/login')
        .send({ adminPin: '9999' });

      const token = loginRes.body.token;

      const auditRes = await request(app)
        .get('/api/admin/audit-logs')
        .set('Authorization', `Bearer ${token}`);

      expect(auditRes.statusCode).toEqual(200);
      expect(auditRes.body).toHaveProperty('logs');
      expect(auditRes.body).toHaveProperty('contacts');
      expect(auditRes.body).toHaveProperty('loggedInUsers');
      expect(auditRes.body).toHaveProperty('registeredStudents');
      expect(auditRes.body).toHaveProperty('registeredTeachers');
      expect(auditRes.body).toHaveProperty('metrics');
    });

    it('should reject audit logs fetch without authorization token', async () => {
      const res = await request(app)
        .get('/api/admin/audit-logs');

      expect(res.statusCode).toEqual(401);
    });
  });
});
