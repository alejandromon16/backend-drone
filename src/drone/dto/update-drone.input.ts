import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateDroneInput } from "./create-drone.input";

@InputType()
export class UpdateDroneInput extends PartialType(CreateDroneInput) {
    @Field()
    id: number;
}