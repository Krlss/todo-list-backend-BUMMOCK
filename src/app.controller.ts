import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateListDto } from './dto/create.dto';
import { UpdateListDto } from './dto/update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll() {
    const data = await this.appService.findAll();
    return { data };
  }

  @Post('/create')
  async create(@Body() body: CreateListDto) {
    const data = await this.appService.create(body);
    return data;
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() body: UpdateListDto) {
    return this.appService.update({ where: { id }, body });
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this.appService.delete({ id });
  }
}
