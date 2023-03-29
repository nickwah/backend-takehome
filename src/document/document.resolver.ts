import { DocumentService } from "./document.service";
import { Document } from "./models/document.model";
import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

@Resolver(() => Document)
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Query(() => Document)
  document(@Args("id") id: number) {
    return this.documentService.findByID(id);
  }
}
