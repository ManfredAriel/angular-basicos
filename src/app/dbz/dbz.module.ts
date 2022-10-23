import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { PersojanesComponent } from './persojanes/persojanes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersojanesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
