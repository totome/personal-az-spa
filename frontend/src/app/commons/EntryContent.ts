export {EntryContent, DEFAULT_TITLE};

const DEFAULT_TITLE = 'Resume';

class EntryContent {
  constructor(public readonly title: string,
              public readonly textHtml: string) {
  }
}
