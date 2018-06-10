import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import { DealerRegisterPage } from '../pages/dealer-register/dealer-register';
import { PartyRegisterPage } from '../pages/party-register/party-register';
import { Todos } from '../providers/todos';
import { Contract } from '../providers/contract';
import { BalanceService } from '../providers/balance.service';
import { Auth } from '../providers/auth';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContractIssuePageModule } from '../pages/contract-issue/contract-issue.module';
import { PartyAdminPageModule } from '../pages/party-admin/party-admin.module';
import { DealsPageModule } from '../pages/deals/deals.module';
import { PartydealsPageModule } from '../pages/partydeals/partydeals.module';
import { ContractCreatedPageModule } from '../pages/contract-created/contract-created.module';
import { PartysettingPageModule } from '../pages/partysetting/partysetting.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage, 
    DealerRegisterPage, 
    PartyRegisterPage, 
    SignupPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomePageModule,
    ListPageModule,
    DealsPageModule,
    PartydealsPageModule,
    ContractCreatedPageModule,
    PartysettingPageModule,
     ContractIssuePageModule,
     PartyAdminPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, 
    DealerRegisterPage, 
    PartyRegisterPage, 
    SignupPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Todos, 
    BalanceService, 
    Contract,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
