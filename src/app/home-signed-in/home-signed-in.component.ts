import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-signed-in',
  templateUrl: './home-signed-in.component.html',
  styleUrls: ['./home-signed-in.component.scss']
})
export class HomeSignedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
