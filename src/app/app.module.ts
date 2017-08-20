import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { NoticiasPage } from '../pages/noticias/noticias';
import { SolucoesPage } from '../pages/solucoes/solucoes';
import { ContatoPage } from '../pages/contato/contato';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventosPageModule } from "../pages/eventos/eventos.module";
import { ContatoPageModule } from "../pages/contato/contato.module";
import { NoticiasPageModule } from "../pages/noticias/noticias.module";
import { SolucoesPageModule } from "../pages/solucoes/solucoes.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EventosPageModule,
    NoticiasPageModule,
    SolucoesPageModule,
    ContatoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
