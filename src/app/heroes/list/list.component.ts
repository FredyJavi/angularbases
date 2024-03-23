import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName:string[]=["SpiderMan","IronMan","BatMan","Chapulin"]
  public renobaHeroe?:string;

  deleteHeroe():void{
    this.renobaHeroe=this.herosName.pop();
  } 
}
