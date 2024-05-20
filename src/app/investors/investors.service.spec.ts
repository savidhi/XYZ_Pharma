import { TestBed } from '@angular/core/testing';

import { InvestorsService } from './investors.service';
import { HttpClientModule } from '@angular/common/http';

describe('InvestorsService', () => {
  let service: InvestorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InvestorsService]
    });
    service = TestBed.inject(InvestorsService);
  });

  it('should be created', () => {
    const service: InvestorsService = TestBed.get(InvestorsService);
    expect(service).toBeTruthy();
  });

  it('should create getQDetails', () => {
    const spy = jest.spyOn(service, 'getQDetails');
    service.getQDetails();
    expect(spy).toHaveBeenCalledWith();
  });
});
