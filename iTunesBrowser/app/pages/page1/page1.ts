import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  theSearcPage= "";

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    // this.theSearchPage = SearchPage;
  }

  goToSearch(){
      this.navCtrl.push(SearchPage);
  }

  setRoot(){
    this.navCtrl.setRoot(SearchPage);
  }
}
