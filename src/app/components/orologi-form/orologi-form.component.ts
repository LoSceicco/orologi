import { Component, OnInit } from '@angular/core';
import { OrologiService } from 'src/app/services/orologi.service';

@Component({
  selector: 'app-orologi-form',
  templateUrl: './orologi-form.component.html',
  styleUrls: ['./orologi-form.component.css']
})
export class OrologiFormComponent implements OnInit {

  constructor(
    private orologiService:OrologiService,
  ) { }

  ngOnInit(): void {
  }

  public name:string = '';
  public brand:string = '';
  public price:number = 0;

  submitHandler() {
    this.orologiService.addOrologio(this.name, this.brand, this.price);
  }

}
