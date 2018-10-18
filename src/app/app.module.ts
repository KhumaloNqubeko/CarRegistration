import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { NavigationService } from './common/navigation.service';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeSignedInComponent } from './home-signed-in/home-signed-in.component';
import {MomentModule} from 'angular2-moment/moment.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import { FieldErrorDisplayComponent } from './common/field-error-display/field-error-display.component';
import { SystemErrorComponent } from './common/system-error/system-error.component';
import { IncorrectCreditentialsAlertComponent } from './common/incorrect-creditentials-alert/incorrect-creditentials-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SpinnerComponent,
    SignInComponent,
    HomeSignedInComponent,
    FieldErrorDisplayComponent,
    SystemErrorComponent,
    IncorrectCreditentialsAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MomentModule,
    ShowHidePasswordModule.forRoot(),
    NgxPasswordToggleModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
