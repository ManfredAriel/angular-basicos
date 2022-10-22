import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrador: string = "";

  borarHeroe(): void {
    console.log('borrando...');
    this.heroesBorrador = this.heroes.pop() || '' ;
  }
}
