import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InvestorsService } from './investors.service';
import { CheckcasingPipe } from './checkcasing.pipe';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {
  quaterFor!: FormGroup;
  quaterDetails!: any;
  showTable: boolean = false;
  selectedQDetails!: string;
  errorMessage!: string;
  showError: boolean = false;
  formData = { quater: '', financialYear: '' };
  quaterDate!: string;
  displayedColumns: string[] = ['quarter', 'sales', 'otherIncome', 'grossProfit', 'Depreciation', 'Interest', 'Tax', 'netProfit'];
  elementData!: any;

  //Inject the FormBuilder and investorsService, InvestorsService and CheckcasingPipe objects to the constructor
  constructor(private formBuilder: FormBuilder, private investorsService: InvestorsService, private checkcasingPipe: CheckcasingPipe) { }

  ngOnInit() {
    this.quaterFor = this.formBuilder.group({
      quater: new FormControl(''),
      financialYear: new FormControl(''),
    });
    this.showError = false;

    //Initialize the variable quaterForm with a FormBuilder group method containing the below mentioned form control.
    //quater: required validation
    //fyear: required validation
  }//ngOninit

  //Implement getQDetails method that takes in value from input field and display the details of the quater asked for
  getQDetails() {

    //initialize selectedQDetails to the call of the customPipe transform method to convert quater in uppercase and then combine the quater and year entered

    //code here\

    this.formData = {
      quater: this.quaterFor.value.quater,
      financialYear: this.quaterFor.value.financialYear
    };
    this.quaterDate = this.checkcasingPipe.transform(this.formData.quater, this.formData.financialYear);

    //implement the call to getQDetails() of investorsService that will filter the detail of the selected quater and financial year, if specified quater is not available show corresponding errorMessage

    //code here

    this.investorsService.getQDetails().subscribe((res: any) => {
      this.quaterDetails = res;
      console.log(res);
      console.log(this.quaterDate);
      const data = res.filter((x: any) => (x.quater == this.quaterDate));
        if (data.length > 0) {
          this.showError = false;
          this.showTable = true;
          this.elementData = data;
        }
        else {
          this.showTable = false;
          this.showError = true;
          this.errorMessage = "Only the above mentioned quater details are currently available";
        }
      });
  }
}
