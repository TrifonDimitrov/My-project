import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClimaComponent } from './add-clima/add-clima.component';
import { CurrentClimaComponent } from './current-clima/current-clima.component';



@NgModule({
  declarations: [
    AddClimaComponent,
    CurrentClimaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClimaModule { }
