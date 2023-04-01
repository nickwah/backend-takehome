import { PrismaService } from "../prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findByID(id: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
}
