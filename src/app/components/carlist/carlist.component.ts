import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../services/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';


@Component({
  selector: 'app-carlist',
  imports: [CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {

  carsData:ICar[] = [];
  show:boolean = false; 

  // constructor to inject the service
  constructor(private _carAPIService:CarApiService) {}

  ngOnInit() {
    this.getCars()
  }

  // get the car details
  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
        { this.carsData = carsData
      });
    }

    // add a car to the list
    addCar(make:string, model:string, year:string,imageUrl:string):boolean {
      let addCar:ICar;
      addCar=new NewCar(make,model,year,imageUrl);
      this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
        { this.carsData = carsData}
      );

      return false;
    }
}
