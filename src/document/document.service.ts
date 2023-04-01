import { PrismaService } from "../prisma";
import { Inject, forwardRef, Injectable } from "@nestjs/common";
import type { Document as DocumentModel } from "@prisma/client";

@Injectable()
export class DocumentService {
  constructor(private readonly prismaService: PrismaService) {}

  findByID(id: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  queryDocumentsByAuthorId(id: number) {
    return this.prismaService.document.findMany({
      where: {
        authorId: id,
      },
    });
  }

  findAuthorById(authorId: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id: authorId,
      },
    });
  }

  async createDocument(
    authorId: number,
    title: string,
    content: string
  ): Promise<DocumentModel> {
    return this.prismaService.document.create({
      data: {
        authorId: authorId,
        title: title,
        content: content,
      },
    });
  }

  async updateDocument(
    documentId: number,
    authorId: number,
    title: string,
    content: string
  ): Promise<DocumentModel> {
    return this.prismaService.document.update({
      where: { id: documentId },
      data: {
        authorId: authorId,
        title: title,
        content: content,
      },
    });
  }
}
