import { PrismaService } from "../prisma";
import { Injectable } from "@nestjs/common";

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
}
