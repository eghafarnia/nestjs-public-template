import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<T> {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Operation successful' })
  message: string;

  @ApiProperty({ example: {} })
  data?: T;

  @ApiProperty({ example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' })
  refNumber: string;

  @ApiProperty({ example: '2021-09-01T00:00:00.000Z' })
  dateTime: string;

  constructor(statusCode: number, success: boolean, message: string, data?: T) {
    this.statusCode = statusCode;
    this.success = success;
    this.message = message;
    this.data = data;
    this.refNumber = uuidv4();
    this.dateTime = new Date().toISOString();
  }
}