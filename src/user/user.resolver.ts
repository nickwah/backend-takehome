import { DocumentService } from "../document/document.service";
import { Document } from "../document/models/document.model";
import { User } from "./models/user.model";
import { UserService } from "./user.service";
import { Inject, forwardRef, Injectable } from "@nestjs/common";
import { Args, Query, Resolver, ResolveField, Parent } from "@nestjs/graphql";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => DocumentService))
    private readonly documentService: DocumentService
  ) {}

  @Query(() => User)
  user(@Args("id") id: number) {
    return this.userService.findByID(id);
  }

  @ResolveField("documents", (returns) => [Document])
  documents(@Parent() user: User) {
    const { id } = user;
    return this.documentService.queryDocumentsByAuthorId(id);
  }
}
