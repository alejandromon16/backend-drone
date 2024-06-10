import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Drone } from "./drone.entity";
import { CreateDroneInput } from "./dto/create-drone.input";

@Injectable()
export class DroneService {
    constructor(
        @InjectRepository(Drone) private droneRepository: Repository<Drone>,
    ){}

    async getDrones(): Promise<Drone[]> {
        return this.droneRepository.find();
    }

    async getDrone(name: string): Promise<Drone> {
        return this.droneRepository.findOne({
            where: { name }
        })
    }

    async createDrone(
        createDroneInput: CreateDroneInput,
    ): Promise <Drone> {
        const newDrone = this.droneRepository.create(createDroneInput)

        return this.droneRepository.save(newDrone)
    }
}