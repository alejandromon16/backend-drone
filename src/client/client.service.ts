import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Client } from "./client.entity";
import { CreateClientInput } from "./dto/create-client.input";

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client) private clientRepository: Repository<Client>,
    ){}

    async getClients(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    async getClient(id: string): Promise<Client> {
        return this.clientRepository.findOne({
            where: { id }
        })
    }

    async getClientByEmail(email: string): Promise<Client> {
        return this.clientRepository.findOne({
            where: { email }
        })
    }

    async createClient(
        createClientInput: CreateClientInput,
    ): Promise<Client> {
        const { firstName, lastName, email, gender, phoneNumber } = createClientInput;
        const newClient = this.clientRepository.create({
            firstName,
            lastName,
            email,
            gender,
            phoneNumber,
            id: uuid()
        })

        return this.clientRepository.save(newClient)
    }
}