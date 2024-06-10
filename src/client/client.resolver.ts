import { ClientService } from "./client.service";
import { ClientType } from "./client.type";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateClientInput } from "./dto/create-client.input";


@Resolver(() => ClientType)
export class ClientResolver {
  constructor(private clientService: ClientService) {}

  @Query((returns) => ClientType)
  getClient(@Args('id') id: string) {
    return this.clientService.getClient(id);
  }

  @Query((returns) => [ClientType])
  async getClients() {
    return this.clientService.getClients();
  }

  @Mutation((returns) => ClientType)
  async createClient(
    @Args('createClientInput') createClientInput: CreateClientInput,
  ) {
    return this.clientService.createClient(createClientInput);
  }
}