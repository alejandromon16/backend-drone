import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSellerInput } from "./dto/create-seller.input";
import { Seller } from "./seller.entity";
import { v4 as uuid } from 'uuid';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller) private sellerRepository: Repository<Seller>,
    ){}

    async getSellers(): Promise<Seller[]> {
        return this.sellerRepository.find();
    }

    async getSeller(id: string): Promise<Seller> {
        return this.sellerRepository.findOne({
            where: { id }
        })
    }

    async getSellerByEmail(email: string): Promise<Seller> {
        return this.sellerRepository.findOne({
            where: { email }
        })
    }

    async createSeller(
        createSellerInput: CreateSellerInput,
    ): Promise<Seller> {
        const { firstName, lastName, email, gender, phoneNumber } = createSellerInput;
        const newSeller = this.sellerRepository.create({
            firstName,
            lastName,
            email,
            gender,
            phoneNumber,
            id: uuid()
        })

        return this.sellerRepository.save(newSeller)
    }
}