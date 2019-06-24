import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../elements/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../models/field.interface';
import { AuthenticationService } from '../services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
@ViewChild(DynamicFormComponent) from:DynamicFormComponent;
  constructor(
    private auth: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$"
          ),
          message: "Password must have at least one upper case letter, one lower case letter, and one numeric digit"
        }
      ]
    },
    {
      type: "button",
      label: "Login"
    }
  ];

}
