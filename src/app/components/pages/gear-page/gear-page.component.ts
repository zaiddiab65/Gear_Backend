import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { GearService } from 'src/app/services/gear.service';
import { Gear } from '../../shared/models/gear';

@Component({
  selector: 'app-gear-page',
  templateUrl: './gear-page.component.html',
  styleUrls: ['./gear-page.component.css']
})
export class GearPageComponent implements OnInit {

  gear!:Gear;

  constructor(activatedRoute:ActivatedRoute, gearService:GearService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.gear = gearService.getGearById(params.id);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){

    this.cartService.addToCart(this.gear);
    this.router.navigateByUrl('/cart-page');

  }

}
