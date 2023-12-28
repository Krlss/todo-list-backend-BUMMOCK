import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UpdateListDto } from './dto/update.dto';
import { CreateListDto } from './dto/create.dto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}
  findAll() {
    return this.prismaService.list.findMany();
  }

  create(data: CreateListDto) {
    return this.prismaService.list.create({ data });
  }

  update(params: { where: { id: string }; body: UpdateListDto }) {
    const { where, body } = params;
    return this.prismaService.list.update({ where, data: body });
  }

  delete(where: { id: string }) {
    return this.prismaService.list.delete({ where });
  }
}
