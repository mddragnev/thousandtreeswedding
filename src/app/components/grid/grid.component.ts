import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxExcelExporterOptions, IgxExcelExporterService, IgxGridComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, SortingDirection } from 'igniteui-angular';
import { map } from 'rxjs'
import { AuthService } from 'src/app/services/auth.service';
import { PeopleService } from 'src/app/services/people.service';

class BooleanSummary {
  public operate(data: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'true',
      label: 'Да',
      summaryResult: data?.filter(x => x).length
    },
      {
        key: 'false',
        label: 'Не',
        summaryResult: data?.filter(x => !x).length
      });

    return result;
  }
}

class GroupSummary {
  public operate(data: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
    const result = [];
    const filteredData = data.filter((value, index, self) =>
      self.findIndex(v => v === value) === index
    );
    result.push({
      key: 'Count',
      label: 'Count',
      summaryResult: IgxSummaryOperand.count(data)
    },
      {
        key: 'Groups',
        label: 'Groups Count',
        summaryResult: filteredData.length
    });

    return result;
  }
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('grid') public grid!: IgxGridComponent;
  public data!: any;
  public isLogged: boolean = false;
  public username: string = '';
  public password: string = '';
  public summary = BooleanSummary;
  public groupSummary = GroupSummary;

  constructor(private service: PeopleService, private exportService: IgxExcelExporterService, private auth: AuthService) { }

  ngOnInit(): void {

  }

  public exportExcel() {
    this.exportService.export(this.grid, new IgxExcelExporterOptions('ExportedDataFile'));
  }

  public formSubmit() {
    this.auth.login(this.username, this.password).then((res: any) => {
      this.isLogged = res;
      this.service.getAll().subscribe((data: any) => {
        this.data = data;
        if (this.isLogged) {
          this.grid.sortingExpressions = [
            { fieldName: "group", dir: SortingDirection.Asc }
          ];
        }

      });
    })
      .catch((error) => {
        alert("Wrong user");
        this.isLogged = false;
      });

  }

}
