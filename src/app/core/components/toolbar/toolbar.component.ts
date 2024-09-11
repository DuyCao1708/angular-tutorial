import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() onToggle: EventEmitter<any> = new EventEmitter<any>();
  
  onMenuClick() {
    this.onToggle.emit(null);
  }
}
