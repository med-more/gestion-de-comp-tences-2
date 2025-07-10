const briefService = require('../../services/briefService');
const Brief = require('../../models/Brief');

jest.mock('../../models/Brief');

describe('Brief Service', () => {
  afterEach(() => jest.clearAllMocks());

  it('doit créer un brief', async () => {
    const data = { titre: 'Test', description: 'Desc', competences: ['C1'] };
    Brief.prototype.save = jest.fn().mockResolvedValue(data);

    const result = await briefService.createBrief(data);
    expect(result).toEqual(data);
  });

  it('doit retourner tous les briefs', async () => {
    const briefs = [{ titre: 'Brief 1' }];
    Brief.find.mockResolvedValue(briefs);

    const result = await briefService.getAllBriefs();
    expect(result).toEqual(briefs);
  });
});