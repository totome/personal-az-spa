import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentDataService} from '../content-data.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  title: string | undefined;
  content: string | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private contentData: ContentDataService)
  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => this.updateContent(p.id));
  }

  updateContent(id: string): void {
    this.contentData.getContent(id).subscribe(
      result => {
        this.title = result.title != null ? result.title : 'Name';
        this.content = result.textHtml;
      });
  }
}
