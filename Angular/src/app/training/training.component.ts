import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/training_modules/id_and_skills").subscribe((res:any) =>
      {for(let obj of [...res]){
        this.training_module_data["id_and_skills"].push([obj["id"], obj["skills"].split(',')])
      }; console.log(this.training_module_data["id_and_skills"])}
    )
    this.http.get("http://localhost:8080/training_modules/projects").subscribe((res:any) =>
      {for(let obj of [...res]){
        this.training_module_data["projects"].push([obj["project"], obj["skills_required"].split(',')])
      }}
    )
  }
  training_module_data:any = {
    id_and_skills: [],
    projects: []
  }
  training = Array();
  matched = Array();
  init = 0
  skill_check(data: any){
    this.init = 1;
    this.training = [];
    this.matched = [];
    for(let i of this.training_module_data["id_and_skills"]){
      let j = data.filter((ue: any) => !i[1].includes(ue))
      if(j.length === 0){
        this.matched.push(i);
      } else {
        this.training.push(i.concat([j]));
      }
    }
  }
}
