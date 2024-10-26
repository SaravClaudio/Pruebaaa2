import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//interface con sus caracteres
interface peliculas{
  id: number
  movie_id: number
  title: string
  overview: string
  release_date: number
  poster_path: string
  popularity: string
  price: number
  category: string
  duration: string
  rating: Rating
}
interface Rating{
  rate: number
  count: number
}

@Injectable({
  providedIn: 'root'
})

//export de url, trayendo las descripción
export class PeliculasService {
 private url= 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'
  constructor(
    private http: HttpClient
  ) {}
  obtenerProductos():Observable<peliculas[]>{
    return this.http.get<peliculas[]>(this.url);
  }
}
