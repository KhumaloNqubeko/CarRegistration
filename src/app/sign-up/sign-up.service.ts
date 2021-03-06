import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}
    public createStudent(visitor) {

        return this.http.post('visitor/add-visitor', visitor);
    }

}
