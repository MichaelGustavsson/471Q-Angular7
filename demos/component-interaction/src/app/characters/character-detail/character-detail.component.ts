import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  @Input()
  set selectedCharacter(character: any) {
    if (character) {
      this.character = this._characterService.getCharacter(character.id);
    }
  }

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
  }

}
