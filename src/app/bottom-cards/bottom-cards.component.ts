import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-cards',
  templateUrl: './bottom-cards.component.html',
  styleUrls: ['./bottom-cards.component.css']
})
export class BottomCardsComponent {
  @Input() day: any
  @Input() temp : any
  @Input() staus:any
 }
