import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { Client } from "./client.entity";
import { ClientResolver } from "./client.resolver";
import { ClientService } from "./client.service";

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [ClientService, ClientResolver],
    exports: [ClientService]
})
export class ClientModule {}