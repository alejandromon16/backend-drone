import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { Drone } from "./drone.entity";
import { DroneService } from "./drone.service";
import { DroneResolver } from "./drone.resolver";


@Module({
    imports: [TypeOrmModule.forFeature([Drone])],
    providers: [DroneService, DroneResolver],
    exports:[DroneService]
  })
  export class DroneModule {}
  