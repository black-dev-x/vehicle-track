import { Client, TravelMode } from '@googlemaps/google-maps-services-js'
import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectionsService {

  constructor(private googleMaps: Client) {}

  async getDirections(origin: string, destination: string) {
    const params = {
      origin: `place_id:${origin}`,
      destination: `place_id:${destination}`,
      mode: TravelMode.driving,
      key: process.env.GOOGLE_MAPS_API_KEY
    }
    const { data } = await this.googleMaps.directions({ params })
    return data
  }
}
