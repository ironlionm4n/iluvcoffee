import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';
import { off } from 'process';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
