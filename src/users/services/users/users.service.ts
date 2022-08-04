import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users : User[]=[
        {
            id:1,
            username:'anon',
            password:'anon'
        },
        {
            id:2,
            username:'panon',
            password:'ason'
        },
        {
            id:3,
            username:'noni',
            password:'anoi'
        },
    ]
    getUsers(){
        return this.users.map((user)=>new SerializedUser(user))  
    }
    getUserByUsername(username:string){
        return this.users.find((user)=> user.username=== username)
    }
    getUserById(id:number){
        return this.users.find((user)=>user.id===id);
    }
}
