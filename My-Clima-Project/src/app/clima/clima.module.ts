import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentClimaComponent } from './current-clima/current-clima.component';
import { ClimaRoutingModule } from './clima-routing.module';

import { MainComponent } from './main/main.component';
import { ClimaListComponent } from './clima-list/clima-list.component';


@NgModule({
  declarations: [CurrentClimaComponent, ClimaListComponent, MainComponent],
  imports: [CommonModule, ClimaRoutingModule],
})
export class ClimaModule {}
