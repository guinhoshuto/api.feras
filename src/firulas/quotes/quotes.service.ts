import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import axios from 'axios';

export class QuoteDto {
  id?: string;
  quoteNumber: number;
  quote: string;
  lore: string | null;
  channel: string;
  channelId: string;
}

@Injectable()
export class QuotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(QuoteDto: QuoteDto): Promise<void> {
    await this.prisma.quotes.create({
      data: QuoteDto,
    });
  }

  findByNumber(quoteNumber: number) {
    return this.prisma.quotes.findFirst({
      where: {
        quoteNumber: quoteNumber,
      },
    });
  }

  findAll() {
    return this.prisma.quotes.findMany();
  }

  search(query: string) {
    return this.prisma.quotes.findMany({
      where: {
        quote: {
          contains: query,
        },
      },
    });
  }
}
