import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const mockProductsService = {
    getAllProducts: () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [{
        provide: ProductsService,
        useValue: mockProductsService
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create getSpecificProducts', () => {
    const spy = jest.spyOn(component, 'getSpecificProducts');
    const val = [{
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
    }];
    component.searchmed = "Tormove";
    component.getSpecificProducts(val);
    expect(spy).toHaveBeenCalled();
  });

  it('should create viewDetails', () => {
    const spy = jest.spyOn(component, 'viewDetails');
    const val = "abc";
    component.viewDetails(val);
    expect(spy).toHaveBeenCalled();
  });


});
