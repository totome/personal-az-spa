import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ContentDataService} from '../content-data.service';
import {EntryInfo} from '../commons/EntryInfo';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit{
  content: { [url: string]: EntryInfo; } | undefined;
  name: string| undefined;
  descryption: string| undefined;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isHandsetNow: boolean | undefined;

  constructor(private breakpointObserver: BreakpointObserver,
              private dataService: ContentDataService) {}

  ngOnInit(): void {
    this.isHandset$.subscribe(v => {
      this.isHandsetNow = v;
      if (this.isHandsetNow) {
        this.descryption = '';
      }
    });
    this.dataService.getContentEntries().subscribe(t => this.content = t);
    this.dataService.getFullName().subscribe(n => this.name = n);
    this.dataService.getDescryption().subscribe(n => {
      if (!this.isHandsetNow) {
        this.descryption = n;
      }
    });
  }
}
