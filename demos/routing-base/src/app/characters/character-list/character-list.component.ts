import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList: any[];
  selectedCharacter: any;

  constructor(
    private _characterService: CharacterService,
    private _router: Router) { }

  ngOnInit() {
    this.characterList = this._characterService.getCharacters();
  }

  onCharacterSelected(character: any) {
    // this.selectedCharacter = character;
    this._router.navigate(['/characters/' + character.id]);
  }

}
