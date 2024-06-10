import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';
import { UserType } from './user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserType)
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserType)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput){
    return this.userService.createUser(createUserInput)
  }
}
