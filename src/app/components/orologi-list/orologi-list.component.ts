import { Component, OnInit } from '@angular/core';
import { Orologio } from 'src/app/interfaces/orologio';
import { OrologiService } from 'src/app/services/orologi.service';

@Component({
  selector: 'app-orologi-list',
  templateUrl: './orologi-list.component.html',
  styleUrls: ['./orologi-list.component.css']
})
export class OrologiListComponent implements OnInit {

  constructor(
    private orologiService:OrologiService,
  ) { }

  ngOnInit(): void {
    this.orologiService.orologi
    .subscribe({
      next: (list) => this.orologiList = list
    })
  }

  public orologiList:Orologio[] = [];

}
