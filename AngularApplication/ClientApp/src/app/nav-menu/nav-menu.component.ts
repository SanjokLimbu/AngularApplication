import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(private service: SharedService) { }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  Download() {
    this.service.getCV('api/download').subscribe(data => {
      saveAs(new Blob([data], { type: 'application/msword' }));
    })
  }
}
