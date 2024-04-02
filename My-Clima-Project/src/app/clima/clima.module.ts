import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentClimaComponent } from './current-clima/current-clima.component';
import { ClimaRoutingModule } from './clima-routing.module';
import { MainComponent } from './main/main.component';
import { ClimaListComponent } from './clima-list/clima-list.component';
import { FormsModule } from '@angular/forms';
import { AddClimaComponent } from './add-clima/add-clima.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CurrentClimaComponent, ClimaListComponent, MainComponent, AddClimaComponent ],
  imports: [CommonModule, ClimaRoutingModule, FormsModule, SharedModule],
  
})
export class ClimaModule {}
