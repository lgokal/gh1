import { NestFactory } from '@nestjs/core';
import { MvwrapperModule } from './mvwrapper.module';

async function bootstrap() {
  const app = await NestFactory.create(MvwrapperModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
