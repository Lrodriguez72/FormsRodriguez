import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from './formularios/reactive-forms/reactive-forms.module';

import { FormErrorHelperComponent } from './shared/components/form-error-helper/form-error-helper.component';
import { MyReactiveFormsComponent } from './formularios/reactive-forms/reactive-forms.component';
import { FormErrorHelperModule } from './shared/components/form-error-helper/form-error-helper.module';
import { MyReactiveFormsModule } from './formularios/reactive-forms/reactive-forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //ReactiveFormsModule,
    MyReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
