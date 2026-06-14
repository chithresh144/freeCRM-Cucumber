import { World, setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld extends World{
  companyName: string = '';
  page: any;
  newTab: any;

  constructor(options: any){
    super(options);
  }
}

setWorldConstructor(CustomWorld);
