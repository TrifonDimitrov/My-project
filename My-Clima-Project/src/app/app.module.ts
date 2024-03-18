import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ClimaListComponent } from './clima-list/clima-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddClimaComponent } from './clima/add-clima/add-clima.component';
import { CurrentClimaComponent } from './clima/current-clima/current-clima.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [AppComponent, MainComponent, ClimaListComponent, PostsListComponent, AddClimaComponent, CurrentClimaComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpClientModule, FormsModule, UserModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
