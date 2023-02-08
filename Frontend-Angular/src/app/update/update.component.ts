import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '@env/environment';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  editForm!: FormGroup;
  isLoading = false;
  errTrue: boolean | undefined;
  getBook: any;
  isbn: any;
  route: any;

  constructor(private updateService:UpdateService) { }
  data: any;

  ngOnInit(): void {
    this.updateService.getCategory().subscribe(
      (response: any)=>{
        console.log(response)
        this.data=response; })

    this.isbn = this.route.snapshot.queryParamMap.get['isbn'];
    console.log("jjjjj")
    this.updateService.getBook(this.isbn).subscribe(
    (response: any) => {
    console.log(response)
    this.data = response;
    })
  }

  }

