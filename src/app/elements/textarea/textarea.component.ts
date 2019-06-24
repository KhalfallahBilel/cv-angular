import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from 'src/app/models/field.interface';
@Component({
  selector: "app-textarea",
  template: `
<div [formGroup]="group">
<textarea [formControlName]="field.name" [placeholder]="field.label">{{field.label}}</textarea >
</div>
`,
  styles: []
})
export class TextareaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
