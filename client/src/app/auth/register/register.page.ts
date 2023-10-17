
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    username : new FormControl('', [Validators.required,Validators.minLength(5)]),
    password : new FormControl('', [Validators.required,Validators.minLength(5)])
  });

  ngOnInit() {
  }

  async onSubmit(){
    const loading = await this.loadingCtrl.create({message:'Registering...'});
    await loading.present();

    this.authService.register({
      firstname: this.form.value.firstname || '',
      lastname: this.form.value.lastname || '',
      username: this.form.value.username || '',
      password: this.form.value.password || ''
    }).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({message:'Registration Successful',duration: 2000});
        await toast.present();
        loading.dismiss();
        this.form.reset();
      },
      async () => {
        const alert = await this.alertCtrl.create({header:'Registration Failed',message:'Username already exists',buttons:['OK']});
        await alert.present();

      }

    );
    // this.authService.register(this.form.value).subscribe(console.log);
  }

}
