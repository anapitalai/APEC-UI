import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthSlyService } from 'src/app/shared/services/authsly.service';
import { NoticeService } from 'src/app/shared/services/tourism.service';
import { Notice } from 'src/app/shared/models/tourism';

import {environment} from 'src/environments/environment' 
//import * as Mapboxgl from 'mapbox-gl'
import { MapboxGeocoder } from "mapbox-gl/dist/mapbox-gl"
 import * as mapboxgl from "mapbox-gl/dist/mapbox-gl"
//const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')


@Component({
  selector: 'app-notice-single',
  templateUrl: './notice-single.component.html',
  styleUrls: ['./notice-single.component.css']
})
export class NoticeSingleComponent implements OnInit {
    ///mapGL
    map : mapboxgl.Map


    //modal bst
    showModal: boolean;
    content: string;
    title: string;
    //Bootstrap Modal Open event
    show() {
      this.showModal = true; // Show-Hide Modal Check
      this.content = "The image goes here"; // Dynamic Data
      this.title = "Tourist Site Images";    // Dynamic Data
    }
    //Bootstrap Modal Close event
    hide() {
      this.showModal = false;
    }
  


  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthSlyService,
    private service: NoticeService) {
     
      let _id = this.route.snapshot.params['id'];
      this.service.getContact(_id)
        //.subscribe(notices => this.notices = notices);
        .subscribe((notices)=>{
          this.notices=notices
   
        })

     }


  notices: Notice;
  ngOnInit() {
    let _id = this.route.snapshot.params['id'];
    this.service.getContact(_id)
      //.subscribe(notices => this.notices = notices);
      .subscribe((notices)=>{
        this.notices=notices
       
       //const points=notices.location['coordinates'][0];
     
      })

      //mapGL
      mapboxgl.accessToken = environment.mapbox.mapboxKey;
  this.map = new mapboxgl.Map({
  container: 'mapid',
  style: 'mapbox://styles/mapbox/streets-v11',
  //style:'mapbox://styles/mapbox/satellite-v9',
  zoom: 9,
  center: [146.1677,-6.677]
  
})



//add a marker
var marker = new mapboxgl.Marker()
.setLngLat([146.1677,-6.677])
.addTo(this.map);

// Add geolocate control to the map.
this.map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
  );



// Add zoom and rotation controls to the map.
 this.map.addControl(new mapboxgl.NavigationControl());

  }

  teacherDelete() {
    this.service.teacherDelete(this.notices._id)
      .subscribe(data => {
        this.router.navigate(['/tourism']);
      })
  }

}
