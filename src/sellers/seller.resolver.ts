import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSellerInput } from "./dto/create-seller.input";
import { SellerService } from "./seller.service";
import { SellerType } from "./seller.type";

@Resolver((of) => SellerType)
export class SellerResolver {
  constructor(private sellerService: SellerService) {}

  @Query((returns) => SellerType)
  getSeller(@Args('id') id: string) {
    return this.sellerService.getSeller(id);
  }

  @Query((returns) => [SellerType])
  async getSellers() {
    return this.sellerService.getSellers();
  }

  @Mutation((returns) => SellerType)
  async createSeller(
    @Args('createSellerInput') createSellerInput: CreateSellerInput,
  ) {
    return this.sellerService.createSeller(createSellerInput);
  }
}
