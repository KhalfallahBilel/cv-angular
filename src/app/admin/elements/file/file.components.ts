import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/models/field.interface';

// text,email,tel,textarea,password, 
@Component({
    selector: 'app-file',
    template: `
      <div [formGroup]="group">
            <label>
              <input [name]="field.name" [placeholder]="field.label" 
              type="file" accept="application/zip" 
              (change)="onUpload($event)"> Select File
            </label>
            <ng-container *ngFor="let validation of field.validations;" ngProjectAs="error">
<span *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</span>
</ng-container>
        </div>
    `,
    styles:[]
})
export class FileComponent {
    field: FieldConfig;
    group: FormGroup;
    constructor() { }
    
  onUpload(event) {
    return event.target.files;
 }
}