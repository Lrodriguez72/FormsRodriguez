import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// la clase Validators tiene propiedades que permiten configurar las validaciones, es
// decir, ciertas caraterísticas que tienen que cumplir los controles

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})


export class MyReactiveFormsComponent {

 
  private _emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );
  public get emailControl() {
    return this._emailControl;
  }
  public set emailControl(value) {
    this._emailControl = value;
  }

  nombreControl = new FormControl(
    '',
    [ Validators.required,
    Validators.minLength(3)
  ]
  );

  apellidoControl = new FormControl(
    '',
    [ Validators.required,
    Validators.maxLength(30)
  ]
  );

  ciudadControl = new FormControl('', Validators.required);

  direccionControl = new FormControl('', Validators.required);

ProvinciaControl = new FormControl('', Validators.required);

zipControl = new FormControl('', Validators.required);



  registerForm: FormGroup;



  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido:this.apellidoControl,
      email:this.emailControl,

     
        ciudad: this.ciudadControl,
        direccion_1: this.direccionControl,
        provincia: this.ProvinciaControl,
        zip: this.zipControl
      
  })

}




onSubmit(e: Event):void {
  e.preventDefault();

  if (this.registerForm.valid) {
    // si un control no es válido, el form no lo es
    console.log(this.registerForm.value);
    // COMPLETAR CON LISTADO
  } else {
    return alert('El formulario no es válido');
  }
}
}
