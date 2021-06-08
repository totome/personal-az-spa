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
    bio: new EntryContent('Bio', `
<div>
My name is Tomasz Tomczyk. I'm a software developer focused on web technologies.
I have nearly 3 years hands on experience in developing web services for business critical infrastructure in Java and Spring.
Besides stack I'm using at work, I'm interested in frontend technologies (learning JS and TypeScript), and cloud infrastructure.
As of now, I'm exploring Angular framework and Azure cloud, which this website runs on.
I also had an opportunity to work at project written in Golang, develop embedded Java and C++ software, and write tests in TTCN-3 <a href="https://en.wikipedia.org/wiki/TTCN-3">What is this ?!?</a>
</br>
I have a bachelor's degree in mathematics. I majored in mathematics with computer science at University of Wroclaw.
I live in Wroclaw with my better half, and our 1yo son.
</div>`
    ),
    contact: new EntryContent('Contact', `
<p>Here are some links which you can reach me:</p>
<ul>
<li><a class="long-link" href="https://www.linkedin.com/in/tomasz-tomczyk-software-developer">LinkedIn profile</a>
<li><a class="long-link" href="https://github.com/totome">GitHub repository</a>
</li>
</ul>`
    ),
    experience: new EntryContent('Work experience', `
<h3>Luxoft Oct 2018 - Present</h3>
<p>Java server applications and embedded software development.</p>
<h3>Nokia Jun 2014 - May 2016</h3>
<p>Embedded software development, writing code in C++ and component level tests in TTCN-3.</p>
    `
    )};
  private readonly entries: {[id: string]: EntryInfo} = {
    bio: new EntryInfo('About me'),
    contact: new EntryInfo('Contact'),
    experience: new EntryInfo('Work Experience')
  };

  constructor() { }

  getContent(id: string): Observable<EntryContent> {
    return of(this.contents[id] == null ? notFound : this.contents[id]);
  }

  getContentEntries(): Observable<{[id: string]: EntryInfo}> {
    return of(this.entries);
  }

  getFullName(): Observable<string> {
    return of('Tomasz Tomczyk');
  }

  getDescryption(): Observable<string> {
    return of('software developer');
  }
}
