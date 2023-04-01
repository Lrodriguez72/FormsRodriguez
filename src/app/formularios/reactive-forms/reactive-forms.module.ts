import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms.component';
//import { FormErrorHelperComponent } from 'src/app/shared/components/form-error-helper/form-error-helper.component';
import { FormErrorHelperModule } from 'src/app/shared/components/form-error-helper/form-error-helper.module';
//import { ReactiveFormsModule } from @angular/forms;

@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    FormErrorHelperModule,
   
  ]
})
export class ReactiveFormsModule {
 }
