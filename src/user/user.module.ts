import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma";

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
  exports: [UserResolver],
})
export class UserModule {}
