import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Lobby } from '../pages/lobby/lobby';
import { Question } from '../pages/question/question';
import { History} from '../pages/history/history';
import { Results } from '../pages/results/results';
import { Questions } from '../providers/questions';
import { TestResults } from '../providers/test-results';
import { AppUser } from '../providers/app-user';
import { LandingPage } from '../pages/landing-page/landing-page';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterPage } from '../pages/register-page/register-page';

let injections: any[] = [
  MyApp,
  Lobby,
  Question,
  History,
  Results,
  LandingPage,
  LoginPage,
  RegisterPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Questions,
    AppUser,
    TestResults
  ]
})
export class AppModule {}
