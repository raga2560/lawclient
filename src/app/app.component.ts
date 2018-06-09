import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContractIssuePage } from '../pages/contract-issue/contract-issue';
import { DealerRegisterPage } from '../pages/dealer-register/dealer-register';
import { PartyRegisterPage } from '../pages/party-register/party-register';
import { PartyAdminPage } from '../pages/party-admin/party-admin';
import { DealsPage } from '../pages/deals/deals';
//import { CouponAdminPage } from '../pages/coupon-admin/coupon-admin';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Signup', component: SignupPage, icon: 'home' },
      { title: 'Login', component: LoginPage, icon: 'home' },
      { title: 'Divider', component: '' , icon: 'none' },
      { title: 'Dealer Register ', component: DealerRegisterPage, icon: 'contact' },
      { title: 'Contract', component: ContractIssuePage, icon: 'contact' },
      { title: 'Deals', component: DealsPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'Party Register ', component: PartyRegisterPage, icon: 'contact' },
      { title: 'Party Admin ', component: PartyAdminPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
