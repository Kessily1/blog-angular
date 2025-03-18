import { Component, INJECTOR, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
    photoCover:String =""
    @Input()
    CardTitle:String ="N"
    @Input()
    CardDescription:String =""
  constructor() { }

  ngOnInit(): void {
  }

}
