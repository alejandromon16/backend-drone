import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { SellerModule } from './sellers/seller.module';
import { Seller } from './sellers/seller.entity';
import { AuthController } from './auth/auth.controller';
import { Drone } from './drone/drone.entity';
import { Client } from './client/client.entity';
import { Order } from './order/order.entity';
import { DroneModule } from './drone/drone.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://choi:oPGj5KuZkBI44NpP@serverlessinstanceyohan.ykbzp8c.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstanceYohan',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User, Seller, Drone, Client, Order],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      context: ({ req }) => ({ req }),
    }),
    UserModule,
    AuthModule,
    SellerModule,
    DroneModule,
    ClientModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})



export class AppModule {}
