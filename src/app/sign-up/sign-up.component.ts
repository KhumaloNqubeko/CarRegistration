import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SignUpService } from './sign-up.service';

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

  constructor(
    private navigationService: NavigationService,
    private fb: FormBuilder,
    private signUpService: SignUpService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  submit() {
    this.userForm.controls['timeIn'].setValue(new Date().toTimeString() + ' ' + new Date().toDateString());
    const visitor = this.userForm.value;
    this.isLoad = true;
    this.subscription = this.signUpService.createStudent(visitor).subscribe (success => {
      this.isLoad = false;
        console.log('success ', success);
      }, error => {
        this.isLoad = false;
        console.log('error occured', error);
      }
    );
  }

  createForm() {
    // form control name should match with User class property name
    this.userForm = this.fb.group({
      driverName: ['', Validators.required],
      carType: ['', Validators.required],
      carRegistration: ['', Validators.required],
      reasonForVisitation: ['', Validators.required],
      personResponsible: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      timeIn: ['', Validators.required]
    });
  }

  cancel() {
    this.navigationService.emitGoto();
  }

}
