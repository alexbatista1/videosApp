import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.mode';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50min',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2min',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'Sem Remorso (2021)',
      lancamento: '30/04/2021',
      duracao: '1h 50min',
      classificacao: 73,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra']
    },
    {
      nome: 'Na Mira do Perigo',
      lancamento: '18/02/2021',
      duracao: '1h 48min',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wAJniojhHa4oVKa9AxdNwvpmS74.jpg',
      generos: ['Ação', 'Thriller', 'Crime']
    },
    {
      nome: 'Aqueles Que Me Desejam a Morte',
      lancamento: '14/05/2021',
      duracao: '1h 40min',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNi8uFKHAN5qt9UU5PpDi8cjWj1.jpg',
      generos: ['Thriller', 'Drama', 'Ação', 'Mistério']
    },
    {
      nome: 'Godzilla vs. Kong ',
      lancamento: '01/04/2021',
      duracao: '1h 53min',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos: ['Ficção científica', 'Ação', 'Drama']
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
