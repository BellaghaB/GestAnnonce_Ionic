import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListAnnoncesService {
  private tabannonces = [
    {
      id: 1,
      titre: 'Etage de villa à vendre',
      adresse: 'Cité Ghazela',
      gouver: 'Ariana',
      prix: 100.000,
      superficie: 300,
      nbPiece: 3,
      desc: "Vision-R immobilier, vous propose à la vente sur l’Ile Maurice cette villa sur Pereybère (Nord Ile Maurice).Ce bien est accessible aux étrangers, s’adresse donc soit à un investisseur pour une rentabilité locative, soit à un acheteur qui désire y vivre.",
      

      images: ['https://www.demeures-de-charme.com/images/visuel-fcm.jpg',
       'https://proprietes.lefigaro.fr/images/PDF/CMS/articles/125002499-1591106103.37.jpg'],
        
       options: ['Chauffage centrale', 'Climatiseur', 'Gaz de ville'],
       categorie:"immobilier",
    },
    {
      id: 2,
      titre: 'Villa à vendre',
      adresse: 'Centre Urbain nord',
      gouver: 'Tunis',
      prix: 250.000,
      superficie: 500,
      nbPiece: 7,
      desc: "Vision-R immobilier, vous propose à la vente sur l’Ile Maurice cette villa sur Pereybère (Nord Ile Maurice).Ce bien est accessible aux étrangers, s’adresse donc soit à un investisseur pour une rentabilité locative, soit à un acheteur qui désire y vivre.",
      images:[
        'https://proprietes.lefigaro.fr/images/PDF/CMS/articles/125002499-1591106103.37.jpg'],
      options: ['Chauffage centrale', 'Climatiseur', 'Gaz de ville'],
      categorie:"vehicule",
    }
  ]
  getAllAnnonces() {
    return this.tabannonces;
  }

  getAnnonceById(id) {
    return this.tabannonces.find((a) => a.id == id);
  }
  getAnnonceByCategorie(categ) {
    return this.tabannonces.filter((a) => a.categorie == categ);
  }
  addAnnonce(newAnnonce) {
    newAnnonce.id = this.tabannonces[this.tabannonces.length - 1].id + 1;
    
    newAnnonce['images'] = newAnnonce['images'].split(',');
   
    

    this.tabannonces.push(newAnnonce);
  }
  updateAnnonce(annonce) {
   
    
    annonce['images']=annonce['images'].split(',');
    annonce['options']=annonce['options'].split(',');
    
    let index = this.tabannonces.findIndex(a => a.id == annonce.id);
    this.tabannonces[index] = annonce;

  }

  deleteAnnonce(id) {
    this.tabannonces = this.tabannonces.filter((a) => a.id != id);
    // let i = this.tabannonces.findIndex(id);
    // this.tabannonces.splice(i, 1);
    console.log(this.tabannonces);
  }
  constructor() { }
}
