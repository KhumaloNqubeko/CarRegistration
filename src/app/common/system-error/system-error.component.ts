import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-system-error',
  templateUrl: './system-error.component.html',
  styleUrls: ['./system-error.component.scss']
})
export class SystemErrorComponent implements OnInit {

  @Output() refresh = new EventEmitter<string>();
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onRefresh(e) {
    this.refresh.emit('refresh');
  }
}
