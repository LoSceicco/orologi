import { Component, Input, OnInit } from '@angular/core';
import { Orologio } from 'src/app/interfaces/orologio';
import { OrologiService } from 'src/app/services/orologi.service';

@Component({
  selector: 'app-orologio',
  templateUrl: './orologio.component.html',
  styleUrls: ['./orologio.component.css']
})
export class OrologioComponent implements OnInit {

  constructor(
    private orologiService:OrologiService,
  ) { }

  ngOnInit(): void {
  }

  @Input() orologio!:Orologio;

  deleteOrologio() {
    this.orologiService.deleteOrologio(this.orologio.id);
  }
}
