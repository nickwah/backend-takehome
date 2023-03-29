import { DocumentResolver } from "./document.resolver";
import { DocumentService } from "./document.service";
import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma";

@Module({
  imports: [PrismaModule],
  providers: [DocumentService, DocumentResolver],
  exports: [DocumentService, DocumentResolver],
})
export class DocumentModule {}
