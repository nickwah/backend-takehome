import { User } from "../../user/models/user.model";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { Document as DocumentModel } from "@prisma/client";

@ObjectType()
export class Document implements DocumentModel {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => User)
  author: User;

  @Field()
  content: string;

  @Field((type) => Int)
  authorId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
