import { Component, OnInit } from '@angular/core';

import { DataBindingService } from './data-binding.service'

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  providers: [DataBindingService]
})
export class DataBindingComponent implements OnInit {

  dataTeste:any;
  linkSite = 'https://google.com'
  getNumber(){
    return 2;
  }


  constructor(dataBinding: DataBindingService) {
    this.dataTeste = dataBinding.getDataBindingService();
  }

  
  paragraphNegrito = "bold";
  paragraphUnder = "underline";

  ngOnInit() {
  }

}
