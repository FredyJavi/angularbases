import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title:string = 'Home';
 public counter:number=10;

 incrementar(){
  this.counter=this.counter+1;
 }
decrementar(){
  if(this.counter>0){
    this.counter=this.counter-1;
  }
  else{
    this.counter=0;
  }

}
reset(){
  this.counter=0;
}
}
