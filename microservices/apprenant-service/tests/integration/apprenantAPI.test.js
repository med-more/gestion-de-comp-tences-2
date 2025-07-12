const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

describe('API Apprenant', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  beforeEach(async () => {
    // Nettoyer la base de données avant chaque test
    const Apprenant = require('../../models/Apprenant');
    await Apprenant.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('doit créer un apprenant', async () => {
    const uniqueEmail = `testeur-${Date.now()}@example.com`;
    const res = await request(app)
      .post('/apprenants')
      .send({ nom: 'Testeur', email: uniqueEmail });
    expect(res.statusCode).toBe(201);
    expect(res.body.nom).toBe('Testeur');
    expect(res.body.email).toBe(uniqueEmail);
  });
});