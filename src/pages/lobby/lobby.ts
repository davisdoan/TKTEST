import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../question/question';
import { History } from '../history/history';
import { LandingPage } from '../landing-page/landing-page';
import { AppUser } from '../../providers/app-user'; 

/**
 * Generated class for the Lobby page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class Lobby {
  //showLog: boolean = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lobby');
  }

  toLogOut() {
    // this.appUser.logout(window.localStorage.token)
    // .map(res => res.json())
    // .subscribe(res => {
    //   if(res.data == null) {
    //     alert("User is offline");
    //   }
    //   window.localStorage.setItem('token', null);
    //   window.localStorage.setItem('userId', null);
    //   this.navCtrl.setRoot(LandingPage);
    // }, error => {
    //   if(error.status === 404){
    //     alert("Error 404: Service Not Found, Try again, maybe our servers are down.");
    //   } else if( error.status === 422){
    //     alert("Error 422: Sorry email is already registered, please use a different email");
    //   } else if (error.status === 500) {
    //     alert("Error 500: Sorry our servers are down");
    //   } 
    // });
    this.appUser.logout(window.localStorage.token);
    this.navCtrl.setRoot(LandingPage);
    window.localStorage.setItem('token', null);
    window.localStorage.setItem('userId', null);
    this.navCtrl.push(LandingPage);
  }
  
  takeTest() {
    this.navCtrl.push(Question);
  }
  
  showHistory(){
    this.navCtrl.push(History);
  }

}
