export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: any[];
  collections?: any;
  type?: string;
  id?:number,
  value?: any;
  validations?: Validator[];
}
