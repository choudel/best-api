import { Injectable,NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        const {validaccount}=req.headers;
        if(validaccount){
            next();
        }else{
            res.status(403).send({error:'Account is invalid'
            });
        }
    }
}