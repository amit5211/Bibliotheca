import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            debugger;
            request = request.clone({
                 headers: request.headers.set("Authorization", currentUser)
                // setHeaders: {
                //     Authorization: `Bearer ${currentUser.token}`
                // }
            });
        }
      //  console.log(request);
        return next.handle(request);
    }
}