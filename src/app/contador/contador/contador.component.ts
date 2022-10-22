import { Component } from '@angular/core';

@Component({
    selector: "app-contador",
    template: `
    
        <h1>{{ titulo }}</h1>
        <h1>La base es: <strong> {{ base }} </strong> </h1>

        <button (click)="acumular()">+{{ base }}</button>

        <span>{{ numero }}</span>

        <button (click)="acumular()">-{{ base }}</button>
    
    `
})

export class ContadorComponent {

    titulo = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular() {
        this.numero += this.base;
    }

}