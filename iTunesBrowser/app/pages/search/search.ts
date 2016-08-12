import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {

  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

}
