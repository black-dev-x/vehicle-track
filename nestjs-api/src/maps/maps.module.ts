import { Module } from '@nestjs/common';
import { PlacesService } from './places/places.service';
import { Client } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';
import { PlacesController } from './places/places.controller'

@Module({
  exports: [PlacesService, DirectionsService],
  controllers: [DirectionsController, PlacesController],
  providers: [
    PlacesService, 
    { provide: Client, useValue: new Client()}, DirectionsService,
  ],
})
export class MapsModule {}
