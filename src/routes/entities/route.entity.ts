export class Route {
  id?: string
  origin: Place
  destination: Place
  distance: number
  duration: number
  createdAt?: Date
  updatedAt?: Date
}

class Place {
  id: string
  address: string
  location: Coordinates
}

class Coordinates {
  lat: number
  lng: number
}
