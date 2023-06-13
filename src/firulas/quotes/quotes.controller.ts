import { QuoteDto, QuotesService } from 'src/firulas/quotes/quotes.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  create(@Body() QuoteDto: QuoteDto): Promise<void> {
    return this.quotesService.create(QuoteDto);
  }

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Get(':quoteNumber')
  findOne(@Param('quoteNumber') quoteNumber: string) {
    return this.quotesService.findByNumber(parseInt(quoteNumber));
  }

  @Get('/search/:query')
  search(@Param('query') query: string) {
    return this.quotesService.search(query);
  }
}
