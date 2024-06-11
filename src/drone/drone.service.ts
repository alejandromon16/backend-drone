import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Drone } from "./drone.entity";
import { CreateDroneInput } from "./dto/create-drone.input";
import { UpdateDroneInput } from "./dto/update-drone.input";

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

    async getBestDrone(): Promise<Drone> {
        const bestDrone = await this.droneRepository.find({
            order: {
                price: "DESC"
            },
            take: 1
        });
    
        if (bestDrone.length === 0) {
            throw new Error("No drones found");
        }
    
        return bestDrone[0];
    }

    async updateDrone(updateDroneInput: UpdateDroneInput): Promise<Drone> {
        const drone = await this.droneRepository.findOne({
            where: { id: updateDroneInput.id },
        });
        if (!drone) {
            throw new NotFoundException("Drone not found");
        }
        Object.assign(drone, updateDroneInput);
        await this.droneRepository.save(drone);
        return drone;
    }
}