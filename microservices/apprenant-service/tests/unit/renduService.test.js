const renduService = require('../../services/renduService');
const Rendu = require('../../models/Rendu');

jest.mock('../../models/Rendu');

describe('Service Rendu', () => {
  afterEach(() => jest.clearAllMocks());

  it('doit créer un rendu', async () => {
    const data = { apprenant: 'id1', brief: 'id2', statut: 'soumis' };
    Rendu.prototype.save = jest.fn().mockResolvedValue(data);

    const result = await renduService.createRendu(data);
    expect(result).toEqual(data);
  });

  it('doit retourner tous les rendus', async () => {
    const rendus = [{ apprenant: 'id1', brief: 'id2' }];
    Rendu.find.mockResolvedValue(rendus);

    const result = await renduService.getAllRendus();
    expect(result).toEqual(rendus);
  });
});