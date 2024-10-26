import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
items:any;
  constructor(
    private peliculasService: PeliculasService
  ) {}
 ngOnInit(): void {
   const peliculas= localStorage.getItem('peliculas');
   if(peliculas){
    console.log('peliculas desde el localStore');
    this.items= JSON.parse(peliculas);}
    else{
      this.peliculasService.obtenerProductos().subscribe((peliculas)=>{
      this.items=peliculas;
      console.log('peliculas desde la api');
      localStorage.setItem('peliculas', JSON.stringify(this.items));
      })
  }}
 }
