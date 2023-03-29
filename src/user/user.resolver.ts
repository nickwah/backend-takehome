import { DocumentService } from "../document/document.service";
import { Document } from "../document/models/document.model";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly documentService: DocumentService
  ) {}

  @Query(() => User)
  user(@Args("id") id: number) {
    return this.userService.findByID(id);
  }

  @Query(() => [Document])
  documents(@Args("authorId") id: number) {
    return this.documentService.queryDocumentsByAuthorId(id);
  }
}
