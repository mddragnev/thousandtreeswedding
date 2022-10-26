import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private _attendance: string = '';
  public info!: string;

  public inputs: any = [
    {
      firstName: '',
      secondName: '',
      food: '',
      allergies: ''
    }
  ];

  public get attendance(): string {
    return this._attendance;
  }

  public set attendance(val: string) {
    this._attendance = val;
    this.inputs = [{
      firstName: '',
      secondName: '',
      food: '',
      allergies: '',
      age: 'Възрастен'
    }];
  }

  public phone!: string;

  public form!: FormGroup;

  constructor(private service: PeopleService) {
  }

  ngOnInit(): void {
  }

  public addRow() {
    this.inputs.push({
      firstName: '',
      secondName: '',
      food: '',
      allergies: '',
      age: 'Възрастен'
    });
  }

  public removeRow() {
    this.inputs.pop();
  }



}
