import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {

  }
  showToast(message) {
    this.platform.ready().then(() => {
      cordova.plugins.ToastMe.coolMethod(message, "short");
    });
  }
}
