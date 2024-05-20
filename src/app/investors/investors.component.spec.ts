import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestorsComponent } from './investors.component';
import { of } from 'rxjs';
import { InvestorsService } from './investors.service';
import { CheckcasingPipe } from './checkcasing.pipe';
import { FormControl, FormGroup } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InvestorsComponent', () => {

  const mockInvestorsService = {
    getQDetails: () => {
      return of ([{
        "quater": "Q32018",
        "result": {
          "sales": 2800156,
          "otherIncome": 349.7,
          "grossProfit": 217993.4,
          "Depreciation": 2992.8,
          "Interest": 10899.67,
          "Tax": 27249.2,
          "netProfit": 176851.7
        },
        "id": "7b62"
      }]);
  }
};
const mockCheckcasingPipe = {
  transform: () => { 
    return jest.fn();
}
};
  let component: InvestorsComponent;
  let fixture: ComponentFixture<InvestorsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsComponent ],
      providers: [{
        provide: InvestorsService,
        useValue: mockInvestorsService
      },
      {
        provide: CheckcasingPipe,
        useValue: mockCheckcasingPipe
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsComponent);
    component = fixture.componentInstance;
    component.quaterFor = new FormGroup({
      quater: new FormControl(''),
      financialYear: new FormControl('')
    });
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

  it('should create getQDetails', () => {
    const spy = jest.spyOn(component, 'getQDetails');
    component.quaterDate = "Q32018"; 
    component.getQDetails();
    expect(spy).toHaveBeenCalled();
  });

});
