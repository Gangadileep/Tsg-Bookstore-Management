import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;
  errTrue: boolean | undefined;


  constructor( private router: Router ,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService){ 
      this.createForm() }

  ngOnInit(): void {
  }
  register(){
    console.log("form is validated")
    if(this.registerForm.valid){
      this.isLoading = true;
      this.authenticationService.register(this.registerForm.value)
      console.log("form value",this.registerForm.value)
      console.log(this.registerForm.value)
      console.log('this.registerForm.valid',this.registerForm.value);   
      this.authenticationService.register(this.registerForm.value).subscribe(
        (response:any)=>{
        this.isLoading =false;
        console.log('response',response);
        this.router.navigate(['/login']);
      },
      (error: any)=>{
        this.isLoading =false;
        this.errTrue=true
        console.log('response',error)
      }
      )
  }
};
 private createForm() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
  }