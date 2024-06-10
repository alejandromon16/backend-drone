import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { SellerResolver } from './seller.resolver';
import { SellerService } from './seller.service';


@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerService, SellerResolver],
  exports:[SellerService]
})
export class SellerModule {}
