import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module'
import { RouteDriverModule } from './route-driver/route-driver.module';

@Module({
  imports: [MapsModule, RouteDriverModule],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
