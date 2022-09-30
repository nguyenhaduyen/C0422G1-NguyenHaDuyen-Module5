import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class ServiceDictionaryService {
  dictionary: Dictionary [] = [{
    word: 'monotonous',
    mean: 'buồn chán (lặp đi lặp lại nhiều lần)',
    detail: 'These words all describe people or things that are not interesting or exciting.\n' +
      '\n'
  }, {
    word: 'wealthy',
    mean: 'thịnh vượng, giàu có', detail: 'These words refer to a person, group, country, etc. that has a lot of money.\n' +
      '\n' +
      'The most common word for this is rich.'
  }, {word: 'oak tree', mean: 'cây sồi', detail: 'a large tree that is common in northern countries, or the hard wood of this tree:'}];

  constructor() {
  }

  getAll() {
    return this.dictionary;
  }

  getDetail(word: string) {
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.dictionary[i].word == word) {
        return this.dictionary[i];
      }
    }
  }
}
