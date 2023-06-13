import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PrismaService } from './prisma.service';
import { QuotesController } from './firulas/quotes/quotes.controller';
import { QuoteModule } from './firulas/quotes/quotes.module';
import { QuotesService } from './firulas/quotes/quotes.service';

@Module({
  imports: [TeamModule, QuoteModule],
  controllers: [AppController, QuotesController],
  providers: [PrismaService, AppService, QuotesService],
})
export class AppModule {}
