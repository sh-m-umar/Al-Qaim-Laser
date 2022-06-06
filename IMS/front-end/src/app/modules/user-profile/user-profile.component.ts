import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phone: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('^(03|\\+923)[0-4][0-9]{8}$')]],
    password: ['', [Validators.required]],
    address: this.fb.group({
      streetAddress: [''],
      postcode: ['', [Validators.pattern('^[1-9]+[0-9]*$')]],
      state: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$'), Validators.minLength(3)]]
    }),
  })

  constructor(
    public fb: FormBuilder,
    private snackBarService: SnackBarService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("User form: ", this.userForm.value);

    this.authService.updateUser(this.userForm.value).subscribe({
      next: (res) => {},
      error: (error) => {},
    });
  }

}
