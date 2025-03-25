import { NestFactory } from '@nestjs/core';
import { SeqgenModule } from './seqgen.module';

async function bootstrap() {
  const app = await NestFactory.create(SeqgenModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
