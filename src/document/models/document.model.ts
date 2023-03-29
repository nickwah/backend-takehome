import { User } from "../../user/models/user.model";
import { Field, ObjectType } from "@nestjs/graphql";
import type { Document as DocumentModel } from "@prisma/client";

@ObjectType()
export class Document implements DocumentModel {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field((type) => User)
  author: User;

  @Field()
  body: string;

  @Field()
  authorId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
