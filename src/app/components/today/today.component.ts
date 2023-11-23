import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today.component.html',
  styleUrl: './today.component.scss'
})
export class TodayComponent{
  @Input() data!: any;

ngOnchanges(changes:any){
  console.log("cambio en input")
  console.log(this.data)
}


}
