import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ServiceDictionaryService} from '../../service/service-dictionary.service';
import {Dictionary} from '../../model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;

  constructor(private activatedRoute: ActivatedRoute, private serviceDictionaryService: ServiceDictionaryService) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let word = param.get('word');
      if (word != null) {
        this.dictionary = this.serviceDictionaryService.getDetail(word);
      }
    });
  }

  ngOnInit() {
  }

}
