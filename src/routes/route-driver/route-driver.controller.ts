import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RouteDriverService } from './route-driver.service';
import { CreateRouteDriverDto } from './dto/create-route-driver.dto';
import { UpdateRouteDriverDto } from './dto/update-route-driver.dto';

@Controller('route-driver')
export class RouteDriverController {
  constructor(private readonly routeDriverService: RouteDriverService) {}

  @Post()
  create(@Body() createRouteDriverDto: CreateRouteDriverDto) {
    return this.routeDriverService.create(createRouteDriverDto);
  }

  @Get()
  findAll() {
    return this.routeDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDriverDto: UpdateRouteDriverDto) {
    return this.routeDriverService.update(+id, updateRouteDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeDriverService.remove(+id);
  }
}
