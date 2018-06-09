import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'dealer-register-page',
  templateUrl: 'dealer-register.html'
})
export class DealerRegisterPage {

  role: string;
  dealertype: string;
  email: string;
  password: string;
  loading : any;
  address: any;
  phone: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {

  }

  register(){

    this.showLoader();

  	let details = {
  	    email: this.email,
  	    password: this.password,
  	    dealertype: this.dealertype,
  	    role: 'dealer'
  	};

  	this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot('DealsPage');
  	}, (err) => {
  		this.loading.dismiss();
  	});

  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }

}
