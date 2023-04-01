import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args("id") id: number) {
    return this.userService.findByID(id);
  }
}
