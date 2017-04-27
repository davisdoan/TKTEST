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
    this.navCtrl.push(LandingPage);
  }
  
  takeTest() {
    this.navCtrl.push(Question);
  }
  
  showHistory(){
    this.navCtrl.push(History);
  }

}
