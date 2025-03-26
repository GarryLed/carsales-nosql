import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../services/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';
import { CarComponent } from '../car/car.component';


@Component({
  selector: 'app-carlist',
  imports: [CommonModule, CarComponent],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {

  // declare variables

  public carsData:ICar[] | any;
  public show:boolean = false;

  // constructor to inject the service
  constructor(private _carAPIService:CarApiService) {}

  ngOnInit() {
    this.getCars()
  }

  refreshCars() {
    this.getCars();
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

      this.getCars()
      return false;
    }
}
