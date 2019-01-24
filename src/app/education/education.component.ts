import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  ngAfterViewInit() {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
  }
  collapseOthers() {
    this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.hide();
    });
  }
}