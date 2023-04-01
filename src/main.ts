import { AppModule } from "./app.module";
import { PrismaService } from "./prisma";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get<PrismaService>(PrismaService);

  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}

bootstrap();
