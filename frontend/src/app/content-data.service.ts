import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EntryInfo} from './commons/EntryInfo';
import {EntryContent} from './commons/EntryContent';

const notFound = new EntryContent('404 Not Found', 'Post you are looking for can not be found. ' +
  'In order to reach accessible content please open and use navigation bar on the left.');

@Injectable({
  providedIn: 'root'
})
export class ContentDataService {
  private readonly contents: {[id: string]: EntryContent} = {
    bio: new EntryContent('Name', `
<div>
Someones bio goes here
</div>`
    ),
    contact: new EntryContent('Contact', `
<a href='#'>a link</a>`
    ),
    experience: new EntryContent('Work experience', `
<h1>Work place 1</h1>
<p>work place desc</p>
<h2>Work place 2</h2>
<p>desc</p>
    `
    )};
  private readonly entries: {[id: string]: EntryInfo} = {
    bio: new EntryInfo('Biography'),
    contact: new EntryInfo('Contact info'),
    experience: new EntryInfo('Work experience')
  };

  constructor() { }

  getContent(id: string): Observable<EntryContent> {
    return of(this.contents[id] == null ? notFound : this.contents[id]);
  }

  getContentEntries(): Observable<{[id: string]: EntryInfo}> {
    return of(this.entries);
  }

  getFullName(): Observable<string> {
    return of('Your Name');
  }

  getDescryption(): Observable<string> {
    return of('some description');
  }
}
