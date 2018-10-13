import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queen',
  templateUrl: './queen.component.html',
  styleUrls: ['./queen.component.css']
})
export class QueenComponent implements OnInit {

  queens: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new QueenDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQueens()
      .subscribe(res => {
        console.log(res);
        this.queens = res;
      }, err => {
        console.log(err);
      });
  }
}

export class QueenDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getQueens();
  }

  disconnect() {

  }
}
