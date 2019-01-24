
import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements AfterViewInit {
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
