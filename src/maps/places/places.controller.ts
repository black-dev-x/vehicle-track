import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service'

@Controller('places')
export class PlacesController {

  constructor(private placesService: PlacesService){}
  @Get()
  findPlaces(@Query('text') text: string) {
    console.log("Testing")
    return this.placesService.findPlaces(text)

  }
}
