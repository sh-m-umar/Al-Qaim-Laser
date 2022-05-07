import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-customers',
  templateUrl: './add-new-customers.component.html',
  styleUrls: ['./add-new-customers.component.scss']
})
export class AddNewCustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript("./assets/js/add-new-product-image-upload.js")
  }

}
