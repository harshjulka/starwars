import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './login/login.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YikespageComponent } from './yikespage/yikespage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserLoginService } from './login/user-login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { SwapService } from './search-result/swap.service';
import { PlanetComponent } from './search-result/planet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchResultComponent,
    YikespageComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserLoginService, AuthGuard, SwapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
