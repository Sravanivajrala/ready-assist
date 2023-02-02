import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import images from '../jsons/images.json'

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  imagesData: any = [];
  images: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.images = images.images
    this.getImages();
    console.log(this.images)

    // this.imagesData.forEach((data: any) => {

    // })
  }

  getImages() {
    let url = "https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json";
    this.http.get(url).subscribe((resp) => {
      this.imagesData = resp;
      for (let i = 0; i < this.imagesData.length; i++) {
        this.imagesData[i]['img'] = this.images[this.images[i] ? i : 0];
      }
    }, error => {
      console.log(error);
    })
  }
}
