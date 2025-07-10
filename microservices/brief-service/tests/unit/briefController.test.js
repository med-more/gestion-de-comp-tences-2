const briefController = require('../../controllers/briefController');
const briefService = require('../../services/briefService');

jest.mock('../../services/briefService');

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Brief Controller', () => {
  afterEach(() => jest.clearAllMocks());

  it('doit retourner tous les briefs', async () => {
    const briefs = [{ titre: 'Brief 1' }];
    briefService.getAllBriefs.mockResolvedValue(briefs);

    const req = {};
    const res = mockRes();
    const next = jest.fn();

    await briefController.getAllBriefs(req, res, next);

    expect(res.json).toHaveBeenCalledWith(briefs);
  });

  it('doit créer un brief', async () => {
    const brief = { titre: 'Nouveau', description: 'Desc', competences: ['C1'] };
    briefService.createBrief.mockResolvedValue(brief);

    const req = { body: brief };
    const res = mockRes();
    const next = jest.fn();

    await briefController.createBrief(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(brief);
  });
});