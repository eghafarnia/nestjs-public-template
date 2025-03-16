import { ApiProperty } from '@nestjs/swagger';

export class BasePaginatedDto {
    @ApiProperty()
    total: number;

    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;
}