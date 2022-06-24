import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GearService } from 'src/app/services/gear.service';
import { Gear } from '../../shared/models/gear';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  gears:Gear[]=[];
  constructor(private gearService:GearService,activatedRoute:ActivatedRoute){
    let GearsObservable:Observable<Gear[]>
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.gears = this.gearService.getAllGearsBySearchTerm(params.searchTerm);
      else
      this.gears = gearService.getAll();
    })

  }

  ngOnInit(): void {
  }
}
