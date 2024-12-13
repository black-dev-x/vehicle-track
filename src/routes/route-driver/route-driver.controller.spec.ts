import { Test, TestingModule } from '@nestjs/testing';
import { RouteDriverController } from './route-driver.controller';
import { RouteDriverService } from './route-driver.service';

describe('RouteDriverController', () => {
  let controller: RouteDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteDriverController],
      providers: [RouteDriverService],
    }).compile();

    controller = module.get<RouteDriverController>(RouteDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
