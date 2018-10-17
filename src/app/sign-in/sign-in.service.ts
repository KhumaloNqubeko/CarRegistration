import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SignInService {

    constructor(private http: HttpClient) {}

    public createStudent(visitor_login) {

        return this.http.post('visitor/visitor-login', visitor_login);
    }

}
