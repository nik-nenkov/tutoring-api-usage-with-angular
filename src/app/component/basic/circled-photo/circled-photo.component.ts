import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-circled-photo',
  templateUrl: './circled-photo.component.html',
  styleUrls: ['./circled-photo.component.scss']
})
export class CircledPhotoComponent implements OnInit {

  @Input()
  imageUrl?: string;

  @Input()
  itemId?: string;

  @Output()
  clickEventEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onImageClick() {
    this.clickEventEmitter.emit(this.itemId);
  }
}
