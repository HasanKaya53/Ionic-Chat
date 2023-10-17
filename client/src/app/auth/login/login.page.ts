import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }


  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(3)]),
    password : new FormControl('', [Validators.required,Validators.minLength(3)])
  });

  async onSubmit(){
    const loading = await this.loadingCtrl.create({message:'Logging in...'});
    await loading.present();

    this.authService.login({
      username: this.form.value.username || '',
      password: this.form.value.password || ''
    }).subscribe(

      async(response) => {
        console.log(response);
        if(response.status == true){
          const toast = await this.toastCtrl.create({message:'Login Successful',duration: 2000});
          await toast.present();
          loading.dismiss();
          this.form.reset();
          this.router.navigateByUrl('/create');
        }else{
          const alert = await this.alertCtrl.create({header:'Login Failed',message:'Username or password is incorrect',buttons:['OK']});
          await alert.present();
          loading.dismiss();
        }

      }
    );

  }

}
