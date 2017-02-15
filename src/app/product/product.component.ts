import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { CurrentUserService } from "../shared/services/current-user.service";

@Component({
  selector: 'ws-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input() private productDetails: any;



    addToCart(): void {
        // this.currentUserService.addToCart()
    }



    constructor(private currentUserService: CurrentUserService) { }

    ngOnInit() {
        console.log(this.productDetails.id);
    }

}