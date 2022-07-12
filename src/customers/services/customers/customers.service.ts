import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers:Customer[] = [
        {
            id: 1,
            email: 'danny@gmail.com',
            name: 'shlomo'
        },
        {
            id: 2,
            email: 'johny@gmail.com',
            name: 'doe johnny'
        },
        {
            id: 3,
            email: 'dom@gmail.com',
            name: 'Rojo Dom'
        },

    ]
    findCustomerById(id:number) {
        return this.customers.find((user)=> user.id===id);
    }
    createCustomer(customerDto:CreateCustomerDto){
        this.customers.push(customerDto)
    }
}
