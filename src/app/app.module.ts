import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedPageModule } from '../app/feed/feed.module';
import { IntroPageModule } from '../app/intro/intro.module';
import { TabsPageModule } from '../app/tabs/tabs.module';
import { HomePageModule } from '../app/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracoesPageModule } from '../app/configuracoes/configuracoes.module';
import { SobrePageModule } from '../app/sobre/sobre.module';
import { PerfilPageModule } from '../app/perfil/perfil.module';
import { FilmeDetalhesPageModule } from './filme-detalhes/filme-detalhes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FeedPageModule, 
    IntroPageModule,
    TabsPageModule,
    HomePageModule,
    HttpClientModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
