import { DroneService } from "./drone.service";
import { DroneType } from "./drone.type";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateDroneInput } from "./dto/create-drone.input";

@Resolver(() => DroneType)
export class DroneResolver {
    constructor(private droneService: DroneService) {}

    @Query(() => DroneType)
    getDrone(@Args('name') name: string){
        return this.droneService.getDrone(name)
    }

    @Query(() => [DroneType])
    getDrones() {
        return this.droneService.getDrones()
    }

    @Mutation(() => DroneType)
    async createDrone(
        @Args('createDroneInput') createDroneInput: CreateDroneInput,
    ) {
        return this.droneService.createDrone(createDroneInput)
    }
}