import { Coordinates } from './../entities/route.entity';
import { Injectable } from '@nestjs/common';
import { CreateRouteDriverDto } from './dto/create-route-driver.dto';
import { UpdateRouteDriverDto } from './dto/update-route-driver.dto';
import { RouteDriverPosition } from './dto/route-driver-position.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RouteDriverService {
  constructor(private database: PrismaService) {}

  async processRoute(routeDriverPosition: RouteDriverPosition) {
    const driver = await this.database.routeDriver.upsert({
      include: {
        route: true
      },
      where: { routeId: routeDriverPosition.routeId },
      create: {
        routeId: routeDriverPosition.routeId,
        points: {
          set: {
            location: routeDriverPosition.coordinates,
          }
        }
      },
      update: {
        points: {
          push: {
            location: routeDriverPosition.coordinates,
          }
        }
      }
    })
    return driver
  }

  create(createRouteDriverDto: CreateRouteDriverDto) {
    return 'This action adds a new routeDriver';
  }

  findAll() {
    return `This action returns all routeDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routeDriver`;
  }

  update(id: number, updateRouteDriverDto: UpdateRouteDriverDto) {
    return `This action updates a #${id} routeDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} routeDriver`;
  }
}
