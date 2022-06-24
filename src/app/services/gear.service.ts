import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sample_gears } from 'src/data';
import { Gear } from '../components/shared/models/gear';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor(private http:HttpClient) { }

  getAll():Gear[]{
    return sample_gears;
  }

  getAllGearsBySearchTerm(searchTerm:string){
    return this.getAll().filter(gear => gear.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }


  getGearById(gearId:string):Gear{
    return this.getAll().find(gear => gear.id == gearId) ?? new Gear();
  }



}
