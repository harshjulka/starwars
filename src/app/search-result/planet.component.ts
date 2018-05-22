import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'star-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() data: [string];
  size: any;
  constructor() { }

  ngOnInit() {
    this.size = (this.data['diameter']) / 100;
    if (this.size > 150) {
      this.size = 150;
    }
    this.size = this.size + 'px';
  }

  getSize() {
    return this.size;
  }

}
