import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { SidebarComponent } from '../sidebar/sidebar.component';

import WebViewer from '@pdftron/webviewer';

import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-mainview',
  providers: [MessageService],
  templateUrl: './memberclub.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MemberClubComponent implements OnInit, AfterViewInit {

  @ViewChild('viewer', { static: false }) viewer: ElementRef;
  wvInstance: any;

  ngAfterViewInit(): void {
    WebViewer({
      path: '../lib',
      initialDoc: '../assets/pdf/scb/test.pdf'
    }, this.viewer.nativeElement).then(instance => {
      instance.disableElements(['header']);
      instance.disableElements(['viewControlsButton']);
      instance.disableElements(['freeHandToolGroupButton']);
      instance.disableElements(['textToolGroupButton']);
      instance.disableElements(['shapeToolGroupButton']);
      instance.disableElements(['leftPanel']);
      /*
      instance.disableElements(['signatureToolButton']);
      instance.disableElements(['freeTextToolButton']);
      instance.disableElements(['eraserToolButton']);
      instance.disableElements(['stickyToolButton']);
      instance.disableElements(['miscToolGroupButton']);
      instance.disableElements(['printButton']);
      instance.disableElements(['downloadButton']);
      instance.disableElements(['searchButton']);
      instance.disableElements(['menuButton']);
      instance.disableElements(['pageNavOverlay']);
      instance.disableElements(['highlightToolButton']);
      instance.disableElements(['underlineToolButton']);
      instance.disableElements(['squigglyToolButton']);
      instance.disableElements(['strikeoutToolButton']);
      instance.disableElements(['stickyToolButton']);
      instance.disableElements(['freeTextToolButton']);
      instance.disableElements(['textToolGroupButton']);
      instance.disableElements(['toolsOverlay']);
      instance.disableElements(['viewControlsOverlay']);
      instance.disableElements(['menuOverlay']);
      instance.disableElements(['searchOverlay']);*/
      // instance.enableTextSelection(false)

      /*instance.disableElements(['freeHandToolGroupButton']);
      instance.disableElements(['textToolGroupButton']);
      instance.disableElements(['shapeToolGroupButton']);
      instance.disableElements(['signatureToolButton']);
      instance.disableElements(['freeTextToolButton']);
      instance.disableElements(['eraserToolButton']);
      instance.disableElements(['stickyToolButton']);
      instance.disableElements(['miscToolGroupButton']);
      instance.disableElements(['printButton']);
      instance.disableElements(['downloadButton']);
      instance.disableElements(['leftPanel']);
      instance.disableElements(['searchButton']);
      instance.disableElements(['menuButton']);


      instance.setTheme('default')

      instance.setHeaderItems(header => {
        const items = header.getItems().slice(2, 0);
        header.update(items);
      });*/

      var LayoutMode = instance.LayoutMode;
      instance.setLayoutMode(LayoutMode.Facing);
      // instance.disableElements(['toolbarGroup-Edit']);
      // instance.disableElements(['leftPanel', 'leftPanelButton']);

      this.wvInstance = instance;

      this.viewer.nativeElement.addEventListener('pageChanged', (e) => {
        const [pageNumber] = e.detail;
        console.log(`Current page is ${pageNumber}`);
      });

      instance.docViewer.on('annotationsLoaded', () => {
        console.log(`annotations loaded`);
      });

      instance.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler);
    })
  }

  public pdfSrc = "../assets/pdf/scb/test.pdf";

  data;

  message: string;

  public slides = []

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private messageService: MessageService) { }

  ngOnChanges(): void {
    console.log('asdasdasdasdasdasd');
  }

  ngOnInit(): void {
    this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);

    this.messageService.currentMessage.subscribe(message => this.message = message);

    this.activatedRoute.data.subscribe(v => this.data = v);
    
    console.log(this.data);

    this.messageService.changeMessage(this.data.title);

    this.pdfSrc = '../assets/pdf/' + this.data.path + '.pdf';
    console.log(this.pdfSrc);

    // uncomment to use carousel for slides
    /*var x = new Array(this.data.length);

    for (var i = 0; i < this.data.length; i++) {
      x[i] = { 'image':'./assets/img/brochures/' + this.data.path + '/' + (i+1).toString() + '.png' }
    }

    this.slides = x;*/
  }

  wvDocumentLoadedHandler(): void {
    // you can access docViewer object for low-level APIs
    const docViewer = this.wvInstance;
    const annotManager = this.wvInstance.annotManager;
    // and access classes defined in the WebViewer iframe
    const { Annotations } = this.wvInstance;
    const rectangle = new Annotations.RectangleAnnotation();
    rectangle.PageNumber = 1;
    rectangle.X = 100;
    rectangle.Y = 100;
    rectangle.Width = 250;
    rectangle.Height = 250;
    rectangle.StrokeThickness = 5;
    rectangle.Author = annotManager.getCurrentUser();
    /*annotManager.addAnnotation(rectangle);
    annotManager.drawAnnotations(rectangle.PageNumber);*/
    // see https://www.pdftron.com/api/web/WebViewer.html for the full list of low-level APIs
  }


}
