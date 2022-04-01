import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Orologio } from '../interfaces/orologio';

@Injectable({
  providedIn: 'root'
})
export class OrologiService {

  constructor(
    private httpClient:HttpClient,
  ) {
    this.httpClient.get<Orologio[]>('assets/orologi.json').subscribe(
      (list: Orologio[]) => {
        console.log(list);
        this.orologi.next(list);
      }
    )
  }

  public orologi:BehaviorSubject<Orologio[]> = new BehaviorSubject<Orologio[]>([]);


  public addOrologio(name:string, brand:string, price:number) {
    const currentList = this.orologi.value;
    const newId = Math.max(...currentList.map(o => o.id)) + 1;
    const newOrologio:Orologio = {
      id: newId,
      nome: name,
      marca: brand,
      prezzo: price,
    };
    const newList = [newOrologio, ...currentList];
    this.orologi.next(newList);
  }

  public deleteOrologio(id:number) {
    const currentList = [...this.orologi.value];
    const newList = currentList.filter(o => o.id !== id);
    this.orologi.next(newList);
  }
}