import { LoadingController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }


  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(5)]),
    password : new FormControl('', [Validators.required,Validators.minLength(5)])
  });

  async onSubmit(){
    const loading = await this.loadingService.create({message:'Logging in...'});
  }

}
