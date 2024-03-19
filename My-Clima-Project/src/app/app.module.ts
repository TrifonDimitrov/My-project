import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { AddClimaComponent } from './clima/add-clima/add-clima.component';
import { ClimaModule } from './clima/clima.module';



@NgModule({
  declarations: [AppComponent, PostsListComponent, AddClimaComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, HttpClientModule, FormsModule, UserModule, ClimaModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
