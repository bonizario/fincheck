import { IsNotEmpty, IsNumber, IsString, IsEnum, IsHexColor } from 'class-validator';
import { BankAccountType } from '../entities/bank-account';

export class UpdateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsEnum(BankAccountType)
  @IsNotEmpty()
  type: BankAccountType;
}
