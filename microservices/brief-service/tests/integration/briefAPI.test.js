const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

describe('Brief API', () => {
  beforeAll(async () => {
    // Connexion à une base de test
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('doit créer un brief', async () => {
    const res = await request(app)
      .post('/briefs')
      .send({ titre: 'Brief test', description: 'Desc', competences: ['C1'] });
    expect(res.statusCode).toBe(201);
    expect(res.body.titre).toBe('Brief test');
  });
});