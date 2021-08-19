import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAccountService } from "./services/userAccount.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private userAccountService: UserAccountService){
    
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newReq = req;
        let token  = this.userAccountService.getToken();
        console.log("INTERCEPTER ",token);

        if(token!=null){
            newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})  
        }

        return next.handle(newReq)
    }

}
