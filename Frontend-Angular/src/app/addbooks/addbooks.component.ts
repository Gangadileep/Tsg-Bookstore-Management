import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';
import { AddbooksService } from './addbooks.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  addForm!: FormGroup;
  isLoading = false;
  errTrue: boolean | undefined;

  
  constructor(private router: Router ,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addbookService: AddbooksService
     ){
      this.createForm()  }
  data: any;

  ngOnInit(): void {
    this.addbookService.getCategory().subscribe(
      (response: any)=>{
        console.log(response)
        this.data=response; })
    
  
  }

add(){
    console.log("form is validated")
    if(this.addForm.valid){
      this.isLoading = true;
      this.addbookService.addbook(this.addForm.value)
    // console.log("this.addForm.value",this.addForm.value)
      this.addbookService.addbook(this.addForm.value).subscribe(
        (response:any)=>{
          console.log("dsdf")
        this.isLoading =false;
        console.log('response',response);
        console.log("gggg")
        this.router.navigate(['/booklist']);
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
  this.addForm = this.formBuilder.group({
    isbn: ['', Validators.required],
    bookname: ['', Validators.required],
    author: ['', Validators.required],
    categoryid: ['', Validators.required],
    price: ['', Validators.required],
    adminid: ['', Validators.required],
    remember: true,
  });
}

}
