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
import { ClimaModule } from './clima/clima.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { appInterceptorProvider } from './app.interceptor';



@NgModule({
  declarations: [AppComponent, PostsListComponent, HomeComponent, ErrorComponent],
  imports: [BrowserModule, CoreModule, SharedModule, HttpClientModule, FormsModule, UserModule, ClimaModule, AppRoutingModule ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
