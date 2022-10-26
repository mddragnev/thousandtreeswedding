import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxExcelExporterOptions, IgxExcelExporterService, IgxGridComponent } from 'igniteui-angular';
import { map } from 'rxjs'
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('grid') public grid!: IgxGridComponent;
  public data!: any;

  constructor(private service: PeopleService, private exportService: IgxExcelExporterService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: any) => {
      this.data = data;
      this.data.push({})
    });
  }

  public exportExcel() {
    this.exportService.export(this.grid, new IgxExcelExporterOptions('ExportedDataFile'));
  }

}
