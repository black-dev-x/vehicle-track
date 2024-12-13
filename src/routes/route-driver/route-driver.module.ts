import { Module } from '@nestjs/common';
import { RouteDriverService } from './route-driver.service';
import { RouteDriverController } from './route-driver.controller';

@Module({
  controllers: [RouteDriverController],
  providers: [RouteDriverService],
})
export class RouteDriverModule {}
