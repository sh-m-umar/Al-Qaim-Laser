import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { CustomerService } from 'src/app/services/customer.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-add-new-customers',
  templateUrl: './add-new-customers.component.html',
  styleUrls: ['./add-new-customers.component.scss']
})
export class AddNewCustomersComponent implements OnInit {

  submitted = false;
  customerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    bio: ['', [Validators.maxLength(500)]],
    balance: ['', [Validators.pattern('^[1-9]+[0-9]*$')]],
    phone: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('^(03|\\+923)[0-4][0-9]{8}$')]],
    address: this.fb.group({
      streetAddress: [''],
      postcode: ['', [Validators.pattern('^[1-9]+[0-9]*$')]],
      state: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]]
    }),
    gender: ['', [Validators.required]],
    checkbox: ['', [Validators.required]]
  })  

  constructor(
    public fb: FormBuilder,
    private snackBarService: SnackBarService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  get f() { return this.customerForm.controls; }

  resetForm(){
    this.submitted = false;
    this.customerForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      balance: '',
      phone: '',
      address: {
        streetAddress: '',
        postcode: '',
        state: '',
        city: '',
        country: '',
      },
      gender: '',
      checkbox: ''
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.customerForm.valid) {
    console.log("Form: ", this.customerForm.value);

    this.customerService.addCustomers(this.customerForm.value).subscribe({
      next: (data: any) => {
        if(data.code === "CUSTOMER_ADDED"){
          this.resetForm();
          this.snackBarService.openSnackBar('New customer added.', 'success', 'bottom');
        }
      },
      error: (error) => {
        console.log("Error in adding customer.", error);
        this.snackBarService.openSnackBar('Customer not added.', 'error', 'bottom');
        
      }
    });
    }
    
  }

}
