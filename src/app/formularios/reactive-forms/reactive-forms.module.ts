import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyReactiveFormsComponent } from './reactive-forms.component';
import { FormErrorHelperModule } from 'src/app/shared/components/form-error-helper/form-error-helper.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyReactiveFormsComponent
    
  ],
  imports: [
    CommonModule,
    FormErrorHelperModule,
    ReactiveFormsModule
   
  ],
  exports: [ MyReactiveFormsComponent ]
})
export class MyReactiveFormsModule {

 }
