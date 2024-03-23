import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string="ironMan";
public age:number=25;
public mostrar:boolean=true;
get capitalizedName():string{
    return this.name.toUpperCase();
}
getHeroeDescription():string{
  return " hero  " + this.name +" con edad de "+this.age;
}
changeHeroe():void{
  this.name="SpiderMan"
  this.mostrar=false
}
changeAge():void{
  this.age=15;
}
}
