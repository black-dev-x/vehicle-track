import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDriverDto } from './create-route-driver.dto';

export class UpdateRouteDriverDto extends PartialType(CreateRouteDriverDto) {}
