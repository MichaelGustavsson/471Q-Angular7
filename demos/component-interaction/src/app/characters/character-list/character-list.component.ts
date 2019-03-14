import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList: any[];
  selectedCharacter: any;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characterList = this._characterService.getCharacters();
  }

  onCharacterSelected(character: any) {
    this.selectedCharacter = character;
  }

}
