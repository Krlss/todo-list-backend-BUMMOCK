import { PartialType } from '@nestjs/swagger';
import { CreateListDto } from './create.dto';
import { IsBoolean } from 'class-validator';

export class UpdateListDto extends PartialType(CreateListDto) {
  @IsBoolean()
  completed: boolean;
}
