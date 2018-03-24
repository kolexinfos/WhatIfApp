import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junglenomics',
  templateUrl: './junglenomics.component.html',
  styleUrls: ['./junglenomics.component.css']
})
export class JunglenomicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 Cards = [
   {title: "", img: "", synopsis: "", type: "", rating:""}
 ]

}
