import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../../model/dictionary';
import {ServiceDictionaryService} from '../../service/service-dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionaries: Dictionary[];

  constructor(private serviceDictionary: ServiceDictionaryService) {
    this.dictionaries = serviceDictionary.getAll();
  }

  ngOnInit() {
  }

}
