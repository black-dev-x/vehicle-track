import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service'

@Controller('directions')
export class DirectionsController {

  constructor(private directionsService: DirectionsService) {}

  @Get()
  getDirections(@Query('origin') origin: string, @Query('destination') destination: string) {
    return this.directionsService.getDirections(origin, destination);
  }
}
