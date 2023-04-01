import { Document } from "../../document/models/document.model";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import type { User as UserModel } from "@prisma/client";

@ObjectType()
export class User implements UserModel {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field((type) => [Document])
  documents: Document[];
}
