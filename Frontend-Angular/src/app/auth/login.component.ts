import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from './authentication.service';
import { CredentialsService } from './credentials.service';


const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  errTrue: boolean | undefined;
  // private _credentialService: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private _credentialService :CredentialsService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    console.log("gggg");
    if (this.loginForm.valid) {
      this.isLoading = true;
  
      this.authenticationService.login(this.loginForm.value).subscribe(
        (response) => {
          this.isLoading = false;
          console.log('response', response);
          this._credentialService.setCredentials(response);
          if(response.type == 1){
            this.router.navigate(['/home']); }
          if(response.type==2){
            this.router.navigate(['/user']);
          }
          const usertype = response.type;
          console.log("usertype", usertype);
          
        },
  
        (error) => {
          this.isLoading = false;
          this.errTrue = true;
          console.log('response', error);
        }
      );
    }
  };
  

  
  

  //     .pipe(
  //       finalize(() => {
  //         this.loginForm.markAsPristine();
  //         this.isLoading = false;
  //       }),
  //       untilDestroyed(this)
  //     )
  //     .subscribe(
  //       (credentials) => {
  //         log.debug(`${credentials.username} successfully logged in`);
  //         this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
  //       },
  //       (error) => {
  //         log.debug(`Login error: ${error}`);
  //         this.error = error;
  //       }
  //     );
  // }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
  
}