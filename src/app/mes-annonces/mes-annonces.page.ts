import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ListAnnoncesService } from '../list-annonces.service';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage implements OnInit {

  tab = [];
  constructor(private listAnnonces: ListAnnoncesService, private alertCtrl : AlertController, private router: Router ) {}
  ngOnInit(): void {
    this.tab = this.listAnnonces.getAllAnnonces();
  }
  async presentAlert(id) {
    
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Voulez Vous vraiment effacer cette annonce ?',
      buttons: [
     
        {
          text: 'Oui',
          handler: () => {
            this.listAnnonces.deleteAnnonce(id);
            this.router.navigateByUrl('/home');
            
          },
        },
        {
          text: 'Non',
          role: 'cancel',
        }
      ],
    });

    await alert.present();
    
  }

}
