import { Component } from '@angular/core';
import { ProjectServices } from '../../services/project-services';
import { Project } from '../../model/project';

@Component({
  selector: 'app-project-component',
  imports: [],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css'
})
export class ProjectComponent {
  project: Project[];

  constructor(private projectServices: ProjectServices) { }

  ngOnInit(): void {
    this.projectServices.findAll().subscribe(data => this.project = data);
  }

}
