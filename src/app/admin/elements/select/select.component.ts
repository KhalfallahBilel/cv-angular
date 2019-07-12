import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/models/field.interface';
@Component({
  selector: "app-select",
  template: `
<div [formGroup]="group">
<select [formControlName]="field.name">
<option *ngFor="let item of field.options" [ngValue]="item">{{item}}</option>
</select>
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="error">
<span *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
</ng-container>
</div>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}

  public onChanged(event): void {
     return event.target.value;
  }

}
