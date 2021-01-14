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
    this.service.getCV().subscribe(data => {
      var newBlob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      // For other browsers: 
      // Create a link pointing to the ObjectURL containing the blob.
      const otherData = window.URL.createObjectURL(newBlob);

      var link = document.createElement('a');
      link.href = otherData;
      link.download = "CV.docx";
      // this is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }
}
