import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {
  constructor(private http: HttpClient) { }
  private url: string = `${environment.HOST}/projects`;
  findAll() {
    //lista proyectos
    return this.http.get<Project[]>(this.url);
  }
  
}
