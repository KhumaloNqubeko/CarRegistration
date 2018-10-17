import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  isLoad: boolean;
  userForm: FormGroup;
  subscription;
  noMatch = false;
  isError = false;

  nameError = 'Please provide the drivers`s name !';
  carTypeError = 'Please provide the car type e.g. Van, Bakkie, SUV etc.';
  carRegistrationError = 'Please provide the car registration number!';
  reasonForVisitationError = 'Please provide the reason for your visitation!';
  personResponsibleError = 'Please provide the name of the person responsible for your visitation!';
  emailError = 'Please provide the email!';
  passwordError = 'Please provide a password for security purposes!';
  confPasswordError = 'Please confirm the password you just provided above!';

  private formSubmitAttempt: boolean;

  constructor(
    private navigationService: NavigationService,
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  submit() {
    // this.userForm.controls['timeIn'].setValue();
    this.formSubmitAttempt = true;
    const visitor = this.userForm.value;
    this.isLoad = true;

    console.log('>>>>>>>>', visitor);

    if ((this.userForm.get('password').value === this.userForm.get('confPassword').value)) {
      if (this.userForm.valid) {
        this.subscription = this.signUpService.createStudent(visitor).subscribe(success => {

          console.log('success ', success);

          this.route.navigateByUrl('inside');
          this.isError = false;
        }, error => {
          this.isLoad = false;
          this.isError = true;
          console.log('error occured', error);
        }
        );
      } else {
        this.isLoad = false;

        this.validateAllFormFields(this.userForm); // {7}
      }
      this.noMatch = false;
    } else {
      window.scrollTo(0, 0);
      this.isLoad = false;
      this.userForm.get('password').setValue('');
      this.userForm.get('confPassword').setValue('');
      this.noMatch = true;
    }
  }

  createForm() {
    // form control name should match with User class property name
    this.userForm = this.fb.group({
      driverName: ['', Validators.required],
      carType: ['', Validators.required],
      carRegistration: ['', Validators.required],
      reasonForVisitation: ['', Validators.required],
      personResponsible: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confPassword: ['', Validators.required],
      timeIn: [new Date().toTimeString() + ' ' + new Date().toDateString(), Validators.required]
    });
  }

  cancel() {
    this.navigationService.emitGoto();
  }

  isFieldValid(field: string) {
    return !this.userForm.get(field).valid && this.userForm.get(field).touched ||
    (this.userForm.get(field).untouched && this.formSubmitAttempt);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);             // {3}
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  }

  reset() {
    this.userForm.reset();
    this.formSubmitAttempt = false;
  }

}
