import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  template: `
    <p>
      admin works!
    </p>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }
}
