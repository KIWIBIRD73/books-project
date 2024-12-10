import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  page: number;

  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(1)
  limit: number;
}
