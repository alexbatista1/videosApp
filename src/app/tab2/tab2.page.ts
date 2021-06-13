import { ISerie } from '../models/ISerie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Séries';

  listaSeries: ISerie[] = [
    {
      nome: 'Lúcifer (2016)',      
      certificacao: 16,
      duracao: '45m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos: ['Crime','Sci-Fi & Fantasy']
    },
    {
      nome: 'The Good Doctor: O Bom Doutor (2017)',      
      certificacao: 12,
      duracao: '43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama']
    },
    {
      nome: "Grey's Anatomy (2005)",      
      certificacao: 14,
      duracao: '43m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      generos: ['Drama']
    },
    {
      nome: 'Fear the Walking Dead (2015)',      
      certificacao: 16,
      duracao: '43m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tbgPaIEZa9BuKKESdyapOn0CZh6.jpg',
      generos: ['Action & Adventure','Drama']
    },
    {
      nome: 'Game of Thrones (2011)',      
      certificacao: 16,
      duracao: '1h',
      classificacao: 84,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg',
      generos: ['Sci-Fi & Fantasy','Drama','Action & Adventure']
    }
  ];

  constructor() {}

}
