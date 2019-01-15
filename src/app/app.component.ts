import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {title: 'Home',                 url: '/home',                 icon: 'home'},
    {title: 'Instalação',           url: '/instalacao',           icon: 'settings'},
    {title: 'Layout',               url: '/layout',               icon: 'camera'},
    {title: 'Componentes',          url: '/componentes',          icon: 'arrow-dropright'},
    {title: 'Api Externa',          url: '/api-externa',          icon: 'globe'},
    {title: 'Animações',            url: '/animacoes',            icon: 'sad'},
    {title: 'Componentes Nativos',  url: '/componentes-nativos',  icon: 'sad'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }
}
