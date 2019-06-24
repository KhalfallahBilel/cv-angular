import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/models/field.interface';
@Component({
  selector: "app-input",
  template: `
<div [formGroup]="group">
<input [name]="field.name" [id]="field.name" [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="error">
<span *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
</ng-container>
</div>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
