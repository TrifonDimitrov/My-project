import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentClimaComponent } from './current-clima/current-clima.component';
import { ClimaRoutingModule } from './clima-routing.module';


@NgModule({
  declarations: [CurrentClimaComponent],
  imports: [CommonModule, ClimaRoutingModule],
})
export class ClimaModule {}
