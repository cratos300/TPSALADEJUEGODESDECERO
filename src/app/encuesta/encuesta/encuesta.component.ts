import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/formulario.service';
import {Formm} from '../../clases/formm';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  unaencuesta!:Formm;
  
  apellido:string = "";
  guardar:string = "";
  public formGroup!: FormGroup;
  constructor(private sv:FormularioService, private fb:FormBuilder,private router:Router,private spinner: NgxSpinnerService) {
    this.unaencuesta = new Formm();
    //this.spinner.hide();
    //this.spinner.show();
   }

  ngOnInit(): void {
    this.spinner.hide();
    this.spinner.hide();
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required,this.spacesValidator]],
      'apellido': ['',[Validators.required,this.validarcantidadCaracter]],
      'edad': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'sexo': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email,Validators.pattern(/\w+@\w+\.+[a-z]/)]],
      'telefono': ['',[Validators.required,Validators.pattern(/^([0-9])*$/),this.validarcantidadCaracter]],
      'pregunta1': ['',[Validators.required,Validators.pattern(/^-?([0-9])\d*(\.\d+)?$/),this.validarnumerooo]],
      'juegos': ['',Validators.required],
      'respuesta': ['',Validators.required],
      
    });
  }
  public aceptar()
  {
    console.log(this.formGroup.getRawValue());
    this.unaencuesta.nombre = this.formGroup.getRawValue().nombre;
    this.unaencuesta.apellido = this.formGroup.getRawValue().apellido;
    this.unaencuesta.email = this.formGroup.getRawValue().email;
    this.unaencuesta.juegos = this.formGroup.getRawValue().juegos;
    this.unaencuesta.pregunta1 = this.formGroup.getRawValue().pregunta1;
    this.unaencuesta.respuesta = this.formGroup.getRawValue().respuesta;
    this.unaencuesta.sexo = this.formGroup.getRawValue().sexo;
    this.unaencuesta.telefono = this.formGroup.getRawValue().telefono;
    this.unaencuesta.edad = this.formGroup.getRawValue().edad;
        console.log("mensaje enviado");
        swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Formulario Enviado!!',
        showConfirmButton: false,
        timer: 1500,
      })
    this.sv.create(this.unaencuesta).then(()=>
    {
        this.router.navigate(['home']);
    });
        
//    console.log(this.formGroup.get('email')?.value)
//  console.log(this.formGroup.controls['email'].value);
  }

   private validarcantidadCaracter(control: AbstractControl):null |object
   {
    const apellido = <any>control.value;
    var booleano: boolean = isNaN(apellido);
    if(apellido.length > 10 && !(booleano))
    {
     return {
       caracter:true
    };
    }
    else
    {
      return null;
    }
   }
   private validarnumerooo(control: AbstractControl):null |object
   {
    const numero = <any>control.value;
    if(numero<0 || numero > 10)
    {
     return {
       tece:true
    };
    }
    else
    {
      return null;
    }
   }

  private spacesValidator(control: AbstractControl):null |object
  {
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');
    if(espacios)
    {
      return {
        contieneEspacios:true
      };
    }
    else
    {
      return null;
    }
  }
  salir()
  {
    swal.fire({
      title: 'Estas seguro que deseas salir?',
      text: "Mira que no tardaras mas de 5 min !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero salir.'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['home']);
      }
    })
  }
  enviar()
  {

  }


}
