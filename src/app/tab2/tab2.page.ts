import { Component, OnInit} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }
  
  geoAddress: any;

  constructor(
    private nativegeocoder: NativeGeocoder
  ) { }

  async fetchLocation(){
    const location = Geolocation.getCurrentPosition();
    console.log('location = ',location );

    this.nativegeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.options).then (
        (result:NativeGeocoderResult[]) =>{

        console.log('result = ', result);
        console.log('result 0 = ', result[0]);

        this.geoAddress =  this.generateAddress(result[0]);  

        console.log('location adress = ', this.geoAddress);
    })
  }

  generateAddress(addressObj){
    let obj = [];
    let uniqueNames = [];
    let address = "";
    for (let key in addressObj){
      if(key!='areaOfInterest'){
        obj.push(addressObj[key]);
      }
    }
    var i =0;
    obj.forEach(value=>{
      if (uniqueNames.indexOf(obj[i]) === -1){
        uniqueNames.push(obj[i]);
      }
      i++;
    });
    uniqueNames.reverse();
    for( let val in uniqueNames){
      if(uniqueNames[val].length)
      address += uniqueNames[val]+',';
    }

    return address.slice(0,-2);
  }



}