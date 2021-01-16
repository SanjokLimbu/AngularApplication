import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
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
  public Download(): void {
    this.service.getCV().subscribe((data) => {
      var newBlob = new Blob([data], { type: "application/msword" });
      //For Internet Explorer
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        return window.navigator.msSaveOrOpenBlob(newBlob);
      }
       //For other browsers: 
      //Create a link pointing to the ObjectURL containing the blob.
      const mainData = window.URL.createObjectURL(newBlob);

      var link = document.createElement('a');
      link.href = mainData;
      link.download = "CV.doc";
      link.click();;
    });
  }
}
