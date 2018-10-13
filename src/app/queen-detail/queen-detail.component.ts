import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-queen-detail',
  templateUrl: './queen-detail.component.html',
  styleUrls: ['./queen-detail.component.css']
})
export class QueenDetailComponent implements OnInit {

  queen = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getQueenDetails(this.route.snapshot.params['id']);
  }

  getQueenDetails(id) {
    this.api.getQueen(id)
      .subscribe(data => {
        console.log(data);
        this.queen = data;
      });
  }

  deleteQueen(id) {
    this.api.deleteQueen(id)
      .subscribe(res => {
          this.router.navigate(['/queens']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
