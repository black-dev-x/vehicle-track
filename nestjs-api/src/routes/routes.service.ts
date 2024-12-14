import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service'
import { DirectionsService } from 'src/maps/directions/directions.service'
import { Route } from './entities/route.entity'

@Injectable()
export class RoutesService {

  constructor(private database: PrismaService, private directionsService: DirectionsService) {}

  async create(createRouteDto: CreateRouteDto) {
    const { routes } = await this.directionsService.getDirections(createRouteDto.origin, createRouteDto.destination)
    const firstPath = routes[0].legs[0]
    const route: Route = {
      destination: {
        id: createRouteDto.destination,
        address: firstPath.start_address,
        location: firstPath.start_location,
      },
      origin: {
        id: createRouteDto.origin,
        address: firstPath.end_address,
        location: firstPath.end_location,
      },
      distance: firstPath.distance.value,
      duration: firstPath.duration.value,
    }
    const response = await this.database.route.create({data: route})
    return response
  }

  findAll() {
    return this.database.route.findMany();
  }

  findOne(id: string) {
    return this.database.route.findFirst({ where: { id } });
  }

}
