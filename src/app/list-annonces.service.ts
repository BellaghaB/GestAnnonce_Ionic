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
      prix: 100000,
      superficie: 300,
      nbPiece: 3,
      desc: "Vision-R immobilier, vous propose à la vente sur l’Ile Maurice cette villa sur Pereybère (Nord Ile Maurice).Ce bien est accessible aux étrangers, s’adresse donc soit à un investisseur pour une rentabilité locative, soit à un acheteur qui désire y vivre.",
      

      images: ['https://www.demeures-de-charme.com/images/visuel-fcm.jpg',
       'https://proprietes.lefigaro.fr/images/PDF/CMS/articles/125002499-1591106103.37.jpg'],
        
       options: ['Chauffage centrale', 'Climatiseur', 'Gaz de ville'],
       categorie:"immobilier",
       idUser:1,
    },
    {
      id: 3,
      titre: 'Kia Picanto à vendre',
      marque: 'Kia',
      modele: 'Picanto',
      couleur: 'Gris',
      prix: 32000,
      puissance: 4,
      energie: "Essence",
      kilometrage: 20000,
      desc: "Une belle Kia Picanto à vendre, en boite automatique, serie 211 avec 110 mille Km. Année 2019.Elle est en bon état général et prête à rouler.",
       images:[
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/2017_Kia_Picanto_GT-Line_S_1.2_Front.jpg/2560px-2017_Kia_Picanto_GT-Line_S_1.2_Front.jpg',
      'https://editorial.pxcrush.net/carsales/general/editorial/kia-picanto-032-57l6.jpg?width=1024&height=682.jpg',
    'https://www.evanshalshaw.com/-/media/evanshalshaw/kia/car-models/picanto/kia-picanto-gt-line-driving-front-720x405px.ashx?mh=1440&la=en&h=406&w=721&mw=2560&hash=D401EC747026B4CF0B3380D45ADFFBA3.jpg'],
      options: ['Fermeture centrale', 'Climatiseur', 'Vitre electrique'],
      categorie:"vehicule",
      idUser:1,
    },
    {
      id: 2,
      titre: 'Villa à vendre',
      adresse: 'Centre Urbain nord',
      gouver: 'Tunis',
      prix: 250000,
      superficie: 500,
      nbPiece: 7,
      desc: "Vision-R immobilier, vous propose à la vente sur l’Ile Maurice cette villa sur Pereybère (Nord Ile Maurice).Ce bien est accessible aux étrangers, s’adresse donc soit à un investisseur pour une rentabilité locative, soit à un acheteur qui désire y vivre.",
      images:[
        'https://proprietes.lefigaro.fr/images/PDF/CMS/articles/125002499-1591106103.37.jpg'],
      options: ['Chauffage centrale', 'Climatiseur', 'Gaz de ville'],
      categorie:"immobilier",
      idUser:2,
    },
    {
      id: 4,
      titre: 'Alpha Romeo Mito à vendre',
      marque: 'Alpha Romeo',
      modele: 'Mito',
      couleur: 'Rouge',
      prix: 40000,
      puissance: 7,
      energie: "Essence",
      kilometrage: 127000,
      desc: "A Vendre Alfa Roméo Mito 1.4L 6cv essence toutes options ( système HBA et Hill-Holder/Système de conduite Alfa D. N. A/système Start and stop / régulateur de vitesse /ordinateur de bord /climatronique...)",
       images:[
        'https://www.largus.fr/images/images/ORPHEA_105918_1.jpg',
      'https://blogautomobile.fr/wp-content/uploads/2015/07/DSC_0465-1200x675.jpg',
    'https://gcm.moniteurautomobile.be/imgcontrol/c680-d465/clients/moniteur/content/medias/images/test_drives/5000/200/20/TD_5227_1.jpg'],
      options: ['fermeture centrale', 'Vitre éléctrique'],
      categorie:"vehicule",
      idUser:2,
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
  getAnnonceByUser(id) {
    return this.tabannonces.filter((a) => a.idUser == id);
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
