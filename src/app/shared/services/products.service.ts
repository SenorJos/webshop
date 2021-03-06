// imports products out of the database

import { Injectable } from '@angular/core';
import { Product } from "../classes/product";
import { HttpService } from "./http.service";

@Injectable()
export class ProductsService {

    private products: Product[] = [];



    init(): void {
        this.httpService.getData('products').subscribe(res => {
            this.transformProductsData(res);
        });
    }



    get (id?: string): Product[] {
        if (!id) return this.products;
        else {
            return this.products.filter(product => product.id === id);
        }
    }



    // transforms product database data
    private transformProductsData (products: {}): void {
        for (let keyId in products) {
            let product = products[keyId];
            this.products.push(new Product(
                keyId,
                product.name,
                product.imgSrc,
                product.desc,
                product.category,
                product.price,
                product.sku,
                product.stock
            ));
        }
    }


    constructor(private httpService: HttpService) { }

}
