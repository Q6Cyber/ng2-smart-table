import { Component, Input, OnInit } from '@angular/core';

import { ViewCell, Cell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() cell: Cell;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

}
