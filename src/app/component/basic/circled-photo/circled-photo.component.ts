import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-circled-photo',
  templateUrl: './circled-photo.component.html',
  styleUrls: ['./circled-photo.component.scss']
})
export class CircledPhotoComponent {

  @Input()
  imageUrl?: string;

  @Input()
  itemId?: string;

  @Output()
  clickEventEmitter = new EventEmitter<string>();

  onImageClick() {
    if (this.itemId) this.clickEventEmitter.emit(this.itemId);
  }
}
