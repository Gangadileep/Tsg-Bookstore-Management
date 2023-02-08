import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth/credentials.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient,private credentialService:CredentialsService) { }
  
getCategory():Observable<any> {
    return this.http.get('/category',{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}}) }

getBook(isbn:string):Observable<any>{
    return this.http.get(`/book/${isbn}`, { headers: { "Authorization": `Bearer ${this.credentialService.credentials}` } });
}
}
