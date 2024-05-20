import { TestBed } from '@angular/core/testing';
import { ProductDetailService } from './product-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductDetailService', () => {
  let service: ProductDetailService;

  let activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (tabletName: "Tormove") => {return tabletName},
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductDetailService,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(ProductDetailService);
  });

  it('should be created', () => {
    const service: ProductDetailService = TestBed.get(ProductDetailService);
    expect(service).toBeTruthy();
  });

  it('should create getTabDetail', () => {
    const spy = jest.spyOn(service, 'getTabDetail');
    const val = "scdsa";
    service.getTabDetail(val);
    expect(spy).toHaveBeenCalledWith(val);
  });

});
