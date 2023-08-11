import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  title = 'msa-app';
  // urlLink='https://cognizantsolutionsltd.sharepoint.com/sites/leadership-connection/Shared%20Documents/PlanEst.ods?web=1'
  urlLink!:any;
  
  constructor(private sanitizer:DomSanitizer){}
  ngOnInit(): void {
   this.link()
  }
  link(){
    // const url='https://cognizantsolutionsltd.sharepoint.com/sites/leadership-connection/Shared%20Documents/Forms/AllItems.aspx'
    const url='https://cognizantsolutionsltd.sharepoint.com/sites/leadership-connection/Shared%20Documents/PlanEst.ods?web=1'
    //  const url='https://cognizantsolutionsltd.sharepoint.com/:x:/r/sites/leadership-connection/_layouts/15/Doc.aspx?sourcedoc=%7BC969C4C6-8D56-4F7F-9C60-13A5E5755EB3%7D&file=PlanEst.ods&action=embedview'
    this.urlLink=this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }


}
