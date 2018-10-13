import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-queen-create',
  templateUrl: './queen-create.component.html',
  styleUrls: ['./queen-create.component.css']
})
export class QueenCreateComponent implements OnInit {

  queenForm: FormGroup;
  isbn:string='';
  title:string='';
  description:string='';
  author:string='';
  publisher:string='';
  published_year:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.queenForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postQueen(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/queen-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
