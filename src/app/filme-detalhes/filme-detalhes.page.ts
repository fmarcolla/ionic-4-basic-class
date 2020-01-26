import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html',
  styleUrls: ['./filme-detalhes.page.scss'],
  providers: [MovieService]
})
export class FilmeDetalhesPage implements OnInit {
  public filme;
  public id_filme;
  public imagem_path = "https://image.tmdb.org/t/p/w500/";

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public movieService : MovieService
  ) { 
    
  }
  

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.id_filme = JSON.parse(params.id);
      }
    });
    
    this.movieService.getDetailsMovie(this.id_filme).subscribe(res => {
      let retorno = res;
      this.filme = retorno;

    }, err => {
      console.log(err);
    });
  }

}
