import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {
  public feed_objeto = {
    titulo: "Felipe Marcolla",
    data: "November 5, 1955",
    descricao: "Estou construíndo este aplicativo em ionic somente para teste. Acho que vai ficar incrível.",
    quantidade_likes: 78,
    quantidade_comments: 15,
    time_comments: "4h ago"
  };

  public loading;
  public refresher;
  public isRefreshing: boolean;
  public lista_filmes = new Array<any>();
  public imagem_path = "https://image.tmdb.org/t/p/w500/";
  public page = 1;
  public infiniteScroll;

  constructor(
      public movieProvider: MovieService, 
      public loadingCtrl: LoadingController,
      private router: Router
    ) {

  }

  ngOnInit() {
    this.openLoading();
    this.getDadosApIMovies();
  }

  async openLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando Filmes!',
      duration: 100
    });
    await this.loading.present();
  }

  async getDadosApIMovies(newpage: boolean = false) {
    this.movieProvider.getLatestMovies(this.page).subscribe(res => {
      
      if(newpage){
        this.lista_filmes = this.lista_filmes.concat(res.results);
        this.infiniteScroll.target.complete();
      }else{
        this.lista_filmes = res.results;
      }
      this.closeLoading();

      if(this.isRefreshing){
        this.refresher.target.complete();
        this.isRefreshing = false; 
      }
    }, err => {
      console.log(err);
      this.closeLoading();
      this.lista_filmes = [0];
      if(this.isRefreshing){
        this.refresher.target.complete();
        this.isRefreshing = false; 
      }
    });
  }

  async closeLoading() {
    await this.loading.onDidDismiss();
  }

  detalhesFilme(filme){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(filme.id)
      }
    };
    this.router.navigate(['filme-detalhes'], navigationExtras);
  }

  refreshPage(event) {
    this.refresher = event;
    this.isRefreshing = true;
    this.page = 1;
    this.getDadosApIMovies();
  }

  loadNextPage(event) {
    this.page++;
    this.infiniteScroll = event;
    this.getDadosApIMovies(true);
  }

}

 




  


