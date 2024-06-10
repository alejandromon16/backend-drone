import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsUUID, IsDecimal, IsString, IsDate, IsEnum } from 'class-validator';

// Define the enum
enum PreviousState {
  USADO = 'USADO',
  NUEVO = 'NUEVO',
}

registerEnumType(PreviousState, {
  name: 'PreviousState',
});

@InputType()
export class CreateOrderInput {
  @Field()
  user: string;

  @Field(() => [String])
  products: string[];

  @Field()
  totalAmount: number;

  @Field()
  @IsString()
  status: string;

  @Field()
  @IsString()
  address: string;

  // Use the enum in the field definition
  @Field(() => PreviousState)
  @IsEnum(PreviousState)
  previousState: PreviousState;
}
