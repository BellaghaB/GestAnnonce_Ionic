import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAnnoncesService } from '../list-annonces.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  selectedAnnonce;
inputValue='';

  constructor(
    private activatedRoute : ActivatedRoute,
   
    private annonceSer: ListAnnoncesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.selectedAnnonce = this.annonceSer.getAnnonceById(
      this.activatedRoute.snapshot.paramMap.get('id'));
  }
  updateAnnonce(valueForm) {
    console.log(this.selectedAnnonce);
    this.annonceSer.updateAnnonce(valueForm);
    this.router.navigateByUrl('/home');
  }

}
