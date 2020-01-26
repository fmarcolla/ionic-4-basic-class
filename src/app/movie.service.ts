import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrlApiMovies = "https://api.themoviedb.org/3";
  private latestMethod = "/movie/latest?";
  private popularMethod = "/movie/popular?";
  private apiKey = "api_key=c3d94eab699f75a74fe73acb9a5fdcbc";
  
  constructor(public httpClient: HttpClient) { }

  getLatestMovies(page = 1): Observable<any>{
    return this.httpClient.get(
      this.baseUrlApiMovies + 
      this.popularMethod + 
      `page=${page}&` +
      this.apiKey
    );
  }

  getDetailsMovie(id): Observable<any>{
    return this.httpClient.get(
      this.baseUrlApiMovies + 
      `/movie/${id}?` + 
      this.apiKey);
  }
}
