import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsArray()
  @IsString({ each: true })
  readonly flavors: string[];
}
