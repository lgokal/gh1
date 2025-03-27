import { Test, TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import { SeqgenService } from './seqgen.service';

class EntityManagerMock {
  //@instanceof = undefined;
  connection = undefined;
  queryRunner = undefined;
  repositories = undefined;
  treeRepositories = undefined;
  plainObjectToEntityTransformer = undefined;
  transaction = jest.fn();
  query = jest.fn();
  createQueryBuilder = jest.fn();
  hasId = jest.fn();
  getId = jest.fn();
  create = jest.fn();
  merge = jest.fn();
  preload = jest.fn();
  save = jest.fn();
  remove = jest.fn();
  softRemove = jest.fn();
  recover = jest.fn();
  insert = jest.fn();
  upsert = jest.fn();
  update = jest.fn();
  delete = jest.fn();
  softDelete = jest.fn();
  restore = jest.fn();
  exists = jest.fn();
  existsBy = jest.fn();
  count = jest.fn();
  countBy = jest.fn();
  sum = jest.fn();
  average = jest.fn();
  minimum = jest.fn();
  maximum = jest.fn();
  find = jest.fn();
  findBy = jest.fn();
  findAndCount = jest.fn();
  findAndCountBy = jest.fn();
  findByIds = jest.fn();
  findOne = jest.fn();
  findOneBy = jest.fn();
  findOneById = jest.fn();
  findOneOrFail = jest.fn();
  findOneByOrFail = jest.fn();
  clear = jest.fn();
  increment = jest.fn();
  decrement = jest.fn();
  getRepository = jest.fn();
  getTreeRepository = jest.fn();
  getMongoRepository = jest.fn();
  withRepository = jest.fn();
  getCustomRepository = jest.fn();
  release = jest.fn();
}

describe('SeqgenService', () => {
  let service: SeqgenService;
  let entityManager: EntityManagerMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeqgenService],
      providers: [
        {
          provide: EntityManager,
          useClass: EntityManagerMock,
        },
      ],
    }).compile();

    service = module.get(SeqgenService);
    entityManager = module.get(EntityManager);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateTrackingNumberWithPrefix', () => {
    it('should', () => {

    });
  });
});