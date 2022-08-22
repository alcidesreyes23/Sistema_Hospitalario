import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const GOOD_NUMBER = '(333) 969-6999';
const BAD_NUMBER = '+(333)969-6999';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  userForm!: FormGroup;
  phoneNumberVerifying:boolean = false;
  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {

   this.getUsers().then((res) => {
    console.log('HEY AQUI ESTAN LOS DATOS: ',res);
   });
  }

  createForm(){
    //const phoneValidation = 
    this.userForm = this.fb.group({
       phone:[this.phoneNumberValidation(GOOD_NUMBER) ? GOOD_NUMBER: BAD_NUMBER,Validators.required],
    });
  }

  getUsers(): Promise<any> {
    return new Promise((resolve,reject)=>{
      fetch('https://reqres.in/api/users')
      .then(res => {
         res.json().then(body => resolve(body.data))
      })
    })
  }

  phoneNumberValidation(phone:string): boolean{
    const expresion = /^[(]?[0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    // let bad = ' +255-966-9984 ';
    // let good ='(255) 255-9665';
    const result = phone.match(expresion);
    if(result)
    {
      console.log('EXCELENTE :)')
      console.log('Resultado: ', result);
      this.phoneNumberVerifying = true;
      return this.phoneNumberVerifying;
    }else{
      console.log('MALA SUERTE :(')
      console.log('Resultado: ', result);
      this.phoneNumberVerifying = false;
      return this.phoneNumberVerifying;
    }
  }

  send():void {
    const expresion = /^[(]?[0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
    let bad = ' +255-966-9984 ';
    let good ='(255) 255-9665';
    const result = good.match(expresion);
    if(result)
    {
      console.log('EXCELENTE :)')
      console.log('Resultado: ', result);
    }else{
      console.log('MALA SUERTE :(')
      console.log('Resultado: ', result);
    }
    
    console.log('DATOS: ',this.userForm.getRawValue());
  }
 


}
