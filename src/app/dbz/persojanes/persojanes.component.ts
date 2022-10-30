import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-persojanes',
  templateUrl: './persojanes.component.html',
})
export class PersojanesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes() { 
    return this.dbzService.persojanes; }


  constructor(private dbzService: DbzService) { }


}
