import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service'
import { Product } from '../product-detail/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProduct!: Product[];
  displaysearch: boolean = false;
  searchedProduct!: Product;
  errorMessage!: string;
  showError: boolean = false;
  searchmed!: any;
  //Inject the Router and ProductsService object to the constructor
  constructor(private productsService: ProductsService, private router: Router) {

  }

  // implement getSpecificProducts() that will filter the details of the specific product registed for from the product list
  getSpecificProducts(val: any) {
    //implement call to getAllProducts() in productsService
    this.searchmed = val;
    this.showError = false;
    this.productsService.getAllProducts().subscribe((res) => {
      const searchedPro = res.filter((x) => (this.searchmed == x.name));
      console.log(searchedPro);
      this.allProduct = searchedPro;
      if (searchedPro.length > 0) {
        this.displaysearch = true;
        this.showError = false;
        console.log("displaysearch");
      }
      else {
        this.displaysearch = false;
        this.showError = true;
        console.log("error");
        this.errorMessage = "Sorry this medicine not manufactured by XYZPharma";
      }
    });
  }
  ngOnInit() {
    //code to display all product on load of product page
    this.displaysearch = false;
    this.showError = false;
    this.productsService.getAllProducts().subscribe((res) => {
      this.allProduct = res;
    });
  }

  viewDetails(val: any) {
    // do programatically navigation to product-detail component, passing the product selected received as parameter of viewDetails()
    this.router.navigate(['/productDetail/', val])
  }

}


