import { IsNotEmpty } from "class-validator";
export class CreateAddressDto{
    @IsNotEmpty()
    wilaya:string;
    daira?:string;
    @IsNotEmpty()
    rue:string;
    postal?:string;
}