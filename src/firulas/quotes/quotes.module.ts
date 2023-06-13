import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService, PrismaService],
})
export class QuoteModule {}
