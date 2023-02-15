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

preview: string;
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
    console.log(valueForm);
    this.router.navigateByUrl('/home');
  }
  uploadImages(event) {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
      console.log(e.target.result);
      // console.log(files[0]);
      console.log(files[1].data);
        // do something with the image data, such as sending it to a server
      };
      reader.readAsDataURL(files[i]);
    }
  }

}
