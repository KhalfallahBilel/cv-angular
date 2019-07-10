import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-competences',
  templateUrl: './add-competences.component.html',
  styleUrls: ['./add-competences.component.css']
})
export class AddCompetencesComponent{
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'skillName',
      label: 'Skill Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'skill',
      label: 'Skill',
      value: '',
      required: true,
    },
    {
      type: 'number',
      name: 'value',
      label: 'Value',
      value: '',
      required: true,
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
