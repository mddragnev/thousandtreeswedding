import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public attendance: string = 'false';

  public inputs: any = [
    {
      firstName: '',
      secondName: ''
    }
  ];

  public phone!: string;

  public form!: FormGroup;

  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
  }

  public addRow() {
    this.inputs.push({
      firstName: '',
      secondName: ''
    });
  }

  public removeRow() {
    this.inputs.pop();
  }


}
