import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-persojanes',
  templateUrl: './persojanes.component.html',
})
export class PersojanesComponent {

  @Input() personajes: Personaje[] = [];


}
