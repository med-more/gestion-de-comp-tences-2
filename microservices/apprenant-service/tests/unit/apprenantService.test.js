const apprenantService = require('../../services/apprenantService');
const Apprenant = require('../../models/Apprenant');

jest.mock('../../models/Apprenant');

describe('Service Apprenant', () => {
  afterEach(() => jest.clearAllMocks());

  it('doit créer un apprenant', async () => {
    const data = { nom: 'Test', email: 'test@example.com' };
    Apprenant.prototype.save = jest.fn().mockResolvedValue(data);

    const result = await apprenantService.createApprenant(data);
    expect(result).toEqual(data);
  });

  it('doit retourner tous les apprenants', async () => {
    const apprenants = [{ nom: 'Testeur' }];
    Apprenant.find.mockResolvedValue(apprenants);

    const result = await apprenantService.getAllApprenants();
    expect(result).toEqual(apprenants);
  });
});