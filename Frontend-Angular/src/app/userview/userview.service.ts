import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth/credentials.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserviewService {

  constructor(private http: HttpClient,private credentialService: CredentialsService) { }

getBook():Observable<any> {
    return this.http.get('/book',{headers:{"Authorization": `Bearer ${this.credentialService.credentials}`}}) }
}
