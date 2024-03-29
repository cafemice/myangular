import { UtilfunctionService } from './services/utilfunction.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Register } from "../app/register";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url :string;
  token : string;
  header : any;
  constructor(private http : HttpClient,private util:UtilfunctionService) {

  this.Url = util.ApiUrl(1)+'/api/Login/';
 // this.Url = 'http://localhost:51612/api/Login/';
    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  Login(model : any){ //
    debugger;

   return this.http.post<any>(this.Url+'UserLogin',model,{ headers: this.header});
  }
   CreateUser(register:Register)
   {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, httpOptions)
   }
}
