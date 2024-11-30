import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpclient: HttpClient) { }

  getDetail(){
    return this.httpclient.get('http://127.0.0.1:8000/api/signup');
  }

  insertDetail(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/signup',data);
  }

  getDetailById(id:any){
    return this.httpclient.get('http://127.0.0.1:8000/api/signup/'+id);
  }


}
