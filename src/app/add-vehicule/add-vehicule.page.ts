import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListAnnoncesService } from '../list-annonces.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.page.html',
  styleUrls: ['./add-vehicule.page.scss'],
})
export class AddVehiculePage implements OnInit {

  inputValue = '';
  preview: string;
 
  constructor(private annonceSer: ListAnnoncesService, private router: Router) {}

  ngOnInit() {}
  
  addNewAnnonce(valueForm) {
    console.log(valueForm);
    this.annonceSer.addAnnonce(valueForm);
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
