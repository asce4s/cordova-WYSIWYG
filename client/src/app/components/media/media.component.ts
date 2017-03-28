import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { TabsetComponent } from 'ng2-bootstrap';
import { NgUploaderOptions } from "ngx-uploader";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {


  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;
  
  constructor(@Inject(NgZone) private zone: NgZone) {
    this.options = new NgUploaderOptions({
      url: 'http://localhost/cordova/test.php',
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png'],
      maxSize: 2097152,
      data: { userId: 12 },
      autoUpload: true,
      fieldName: 'file',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });
  }

    handleUpload(data: any) {

console.log(data);
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          console.log(data);
        }
      });
    });
  }

  fileOverBase(e: boolean) {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
  }

}
