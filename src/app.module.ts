import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PrismaService } from './prisma.service';
import { QuotesController } from './quotes/quotes.controller';

@Module({
  imports: [TeamModule],
  controllers: [AppController, QuotesController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
