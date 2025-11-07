import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';
import { Subject, BehaviorSubject } from 'rxjs';
import { GenericService } from './generic-service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices extends GenericService<Project> {
  
  //private url: string = `${environment.HOST}/projects`;
  private projectChange: Subject<Project[]> = new Subject<Project[]>();
  private messageChange: Subject<string> = new Subject<string>();
  
  //constructor(private http: HttpClient) {}
  constructor() {
    super(inject(HttpClient), `${environment.HOST}/projects`);
  }


  setProjectChange(data: Project[]) {
    this.projectChange.next(data);
  }

  getProjectChange() {
    return this.projectChange.asObservable();
  }

  setMessageChange(data: string) {
    this.messageChange.next(data);
  }

  getMessageChange() {
    return this.messageChange.asObservable();
  }
  
}
