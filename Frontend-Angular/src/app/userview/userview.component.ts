import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/auth';
import { UserviewService } from './userview.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

constructor(private userviewService:UserviewService,private authenticationService:AuthenticationService,private router:Router) { }
data:any;
getBook:any;
  ngOnInit(): void {
    this.userviewService.getBook().subscribe(
      (response:any) => {
        console.log("book",response)
        this.data = response;
      })

  }
logout() {
  this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

}
