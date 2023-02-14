import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListAnnoncesService } from '../list-annonces.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedAnnonce;

  constructor(
    private activatedRoute : ActivatedRoute,
    private alertCtrl: AlertController,
    private listAnnonces: ListAnnoncesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.selectedAnnonce = this.listAnnonces.getAnnonceById(
      this.activatedRoute.snapshot.paramMap.get('id'));
  }
  async showAlert() {
    
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Voulez Vous vraiment effacer cette annonce ?',
      buttons: [
     
        {
          text: 'Oui',
          handler: () => {
            this.listAnnonces.deleteAnnonce(this.selectedAnnonce.id);
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
