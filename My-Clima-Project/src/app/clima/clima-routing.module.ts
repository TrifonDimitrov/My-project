import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddClimaComponent } from './add-clima/add-clima.component';
import { CurrentClimaComponent } from './current-clima/current-clima.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'models',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':modelId', component: CurrentClimaComponent },
    ],
  },
  {
    path: 'add-model',
    component: AddClimaComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaRoutingModule {}
