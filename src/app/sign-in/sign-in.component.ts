import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/common/navigation.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignInService } from 'src/app/sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {

  isLoad = false;
  userForm: FormGroup;

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
    const visitor_login = this.userForm.value;
    this.isLoad = true;
    this.signInService.createStudent(visitor_login).subscribe(resp => {
      this.isLoad = false;
      this.route.navigateByUrl('inside');
    }, error => {
      this.isLoad = false;
    });
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
}
