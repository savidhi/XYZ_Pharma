import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
import { Product } from './product'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //Inject the ActivatedRoute and ProductDetailService object to the constructor
  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) { }

  tabletName!: any;
  productDetail!: Product[];

  ngOnInit() {
    // Change from 'tabletName' to 'name' to match the route parameter
    this.tabletName = this.route.snapshot.paramMap.get('name');
    this.productDetailService.getTabDetail(this.tabletName).subscribe((res) => {
      this.productDetail = res.filter((item) => item.name === this.tabletName);
    });
  }

}
