import { DocumentService } from "./document.service";
import { Document, SaveDocumentInput } from "./models/document.model";
import {
  Args,
  Query,
  Resolver,
  Mutation,
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

  @ResolveField()
  author(@Parent() document: Document) {
    const { authorId } = document;
    return this.documentService.findAuthorById(authorId);
  }

  @Mutation((returns) => Document)
  saveDocument(@Args("document") documentInput: SaveDocumentInput) {
    if (!documentInput.id) {
      return this.documentService.createDocument(
        documentInput.authorId,
        documentInput.title,
        documentInput.content
      );
    } else {
      return this.documentService.updateDocument(
        documentInput.id,
        documentInput.authorId,
        documentInput.title,
        documentInput.content
      );
    }
  }
}
