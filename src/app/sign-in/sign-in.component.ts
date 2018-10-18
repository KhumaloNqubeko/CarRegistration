import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {

  incorrectCreditials = false;
  private formSubmitAttempt: boolean;
  isError = false;
  isLoad = false;
  userForm: FormGroup;

  emailError = 'Please provide the email!';
  passwordError = 'Please provide a password for verification purposes!';

  systemError = 'We have a problem signing you in, please try again later and if the problem persists please call 082 514 0951.';

  constructor(
    private navigationService: NavigationService,
    private fb: FormBuilder,
    private signInService: SignInService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  submit() {
    this.formSubmitAttempt = true;
    const visitor_login = this.userForm.value;
    this.isLoad = true;

    if (this.userForm.valid) {
      this.signInService.createStudent(visitor_login).subscribe(resp => {
        this.isLoad = false;
        this.isError = false;

        if (resp !== null) {
          this.route.navigateByUrl('inside');
          this.incorrectCreditials = false;
        } else {
          this.incorrectCreditials = true;
        }

      }, error => {
        this.isLoad = false;
        this.isError = true;
      });
    } else {
      this.isLoad = false;

      this.validateAllFormFields(this.userForm);
    }
  }

  cancel() {
    this.navigationService.emitGoto();
  }

  createForm() {
    // form control name should match with User class property name
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
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
