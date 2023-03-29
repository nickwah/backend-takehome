import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { DocumentModule } from "src/document";
import { PrismaModule } from "src/prisma";

@Module({
  imports: [PrismaModule, DocumentModule],
  providers: [UserService, UserResolver],
  exports: [UserResolver],
})
export class UserModule {}
