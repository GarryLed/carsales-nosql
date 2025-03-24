export interface ICar {
    _id?: string;
    make: string;
    model: string;
    year: string;
    image: string;
  }
  
  export class NewCar implements ICar {
    constructor(
      public make: string,
      public model: string,
      public year: string,
      public image: string
    ) {}
  }
  