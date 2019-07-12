import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/admin/elements/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/models/field.interface';

@Component({
  selector: 'app-add-competences',
  templateUrl: './add-competences.component.html',
  styleUrls: ['./add-competences.component.css']
})
export class AddCompetencesComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor() {
  }

  ngOnInit() {
  }

  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Skill Name",
      inputType: "text",
      name: "skillName",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Skill Name Required"
        }
      ]
    },
    {
      type: "input",
      label: "Skill",
      inputType: "text",
      name: "skill",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Skill Required"
        }
      ]
    },
    {
      type: "input",
      label: "Value",
      inputType: "number",
      name: "value",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Value Required"
        },
        {
          name:"minlenght",
          validator:Validators.min(1),
          message:"hmjmkhj"
        },
        {
          name:"maxlenght",
          validator:Validators.max(100),
          message:"hmjmkhj"
        }
      ]
    },
    {
      type: "button",
      label: "Add Skill"
    }
  ];
}
