import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailService } from './product-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ProductDetailComponent', () => {
    let component: ProductDetailComponent;
    let fixture: ComponentFixture<ProductDetailComponent>;
  
    const mockProductDetailService = {
      getTabDetail: () => {
        return of([{
          name: "Tormove",
            saltCompostion: "paracetamol (500mg)",
            about: "Tormove Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headache, body ache, toothache and common cold.",
            use: [
              "pain relief",
              "fever"
            ],
            sideEffects: [
              "dizziness",
              "lightheadedness"
            ],
            id: "106d"
        }]);
    }
  };
  const mockActivatedRoute = { 
    queryParamMap: of({ tab: 'test' })
  };
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductDetailComponent ],
        providers: [{
          provide: ProductDetailService,
          useValue: mockProductDetailService
        },
        {
          provide: ActivatedRoute,
          useValue:  mockActivatedRoute
        }],
        imports: [HttpClientModule],
      })
      .compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create ngOnInit', () => {
    const spy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

});
