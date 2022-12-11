import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { atcb_init } from 'add-to-calendar-button';
import { RadioGroupAlignment } from 'igniteui-angular';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  private _attendance: string = '';
  public alignment = RadioGroupAlignment.horizontal;
  public info: string = '';
  public submitted: boolean = false;

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

  ngAfterViewInit(): void {
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


  public submit() {
    const result = [...this.inputs];
    result.forEach((i: any) => {
      i['attendance'] = this.attendance === 'true';
      i['info'] = this.info;
      i['phone'] = this.phone;
    });
    this.service.save(result);

    this.submitted = true;
    setTimeout(() => {
      atcb_init();
    },0)
  }

  //plus - Добави следващ присъстващ.
  //minus - Премахни последен присъстващ.


}
