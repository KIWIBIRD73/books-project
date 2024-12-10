import { PaginationDto } from '@common/dto/pagination.dto';
import { IsNotEmpty, IsString, IsUppercase, Length } from 'class-validator';

export class Task3Dto extends PaginationDto {
  @IsString()
  @IsNotEmpty()
  @IsUppercase()
  @Length(3, 3)
  airportCode: string;
}
