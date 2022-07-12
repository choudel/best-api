import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}
    @Get('/search/:id')
    getCustomer(
        @Param('id',ParseIntPipe) id: number
    ){
      const customer = this.customerService.findCustomerById(id);
      if(customer){
        return customer
      }else throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST)  
    }
}
