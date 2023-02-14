import { Component, OnInit } from '@angular/core';
import { ListAnnoncesService } from '../list-annonces.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = [];

  constructor(private listAnnonces: ListAnnoncesService) {}
  ngOnInit(): void {
    
    this.tab = this.listAnnonces.getAllAnnonces();
    // this.tab = this.listAnnonces.getAnnonceByCategorie("immobilier");
    console.log(this.tab);
    
  }
  getAnnonce(categ){
   this.tab = this.listAnnonces.getAnnonceByCategorie(categ);
   console.log(this.tab);
   
  }

}
