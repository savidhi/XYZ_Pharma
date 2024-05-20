import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  it('should create getAllProducts', () => {
    const spy = jest.spyOn(service, 'getAllProducts');
    service.getAllProducts();
    expect(spy).toHaveBeenCalledWith();
  });

});
