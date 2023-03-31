import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// la clase Validators tiene propiedades que permiten configurar las validaciones, es
// decir, ciertas caraterísticas que tienen que cumplir los controles

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})


export class ReactiveFormsComponent {

 // cada control tiene su constructor y así se puede acceder a él en forma directa
// el primer argumento es el valor por defecto, el segundo es un arreglo de validaciones:
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email,
    ]
  );

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

  registerForm: FormGroup;



  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido:this.apellidoControl,
      email:this.emailControl,

      localizacion: this.formBuilder.group({
        ciudad: [''],
        direccion_1: [''],
        provincia: [''],
        zip: [''],
      }),
  })

}




onSubmit():void {
  if (this.registerForm.valid) {
    // si un control no es válido, el form no lo es
    console.log(this.registerForm.value);
  } else {
    alert('El formulario no es válido');
  }
}
}
