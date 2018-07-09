import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

login = (data) => {
  const api="http://suvidha.us-east-2.elasticbeanstalk.com";
  const header= new HttpHeaders().set('x-account',' management') ;
const login_api = `${api}/oauth/token?grant_type=password&username=${data.name}&password=${data.password}`;
return this.http.post(login_api, {},{headers:header})
.subscribe((res)=>{
console.log(res);

});
}
}
