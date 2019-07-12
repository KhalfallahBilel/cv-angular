import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'date',
      label: 'Years',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'companyName',
      label: 'Company Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'poste',
      label: 'Position',
      value: '',
      required: true
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
      value: '',
      required: true
    },
    {
      type: 'text',
      name: 'technos',
      label: 'Technos',
      value: '',
      required: true
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
