import { Injectable } from '@nestjs/common';
import { Client, PlaceInputType } from '@googlemaps/google-maps-services-js'

@Injectable()
export class PlacesService {

  constructor(private googleMaps: Client) {
  }

  async findPlaces(text: string) {
    const { data } = await this.googleMaps.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['formatted_address', 'name', 'geometry', 'place_id'],
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    })
    return data
  }
}
