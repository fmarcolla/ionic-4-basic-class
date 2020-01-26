import { Component, OnInit } from '@angular/core';
import { PerfilPage } from '../perfil/perfil.page';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  

  constructor(
    private menu: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openSobrePage() {
    this.router.navigateByUrl('sobre');
  }

  openPerfilPage() {
    this.router.navigateByUrl('perfil');
  }
}
