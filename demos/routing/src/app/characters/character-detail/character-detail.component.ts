import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private _characterService: CharacterService,
    private _activatedRoute: ActivatedRoute, private _location: Location ) { }

  ngOnInit() {
    let id: number;
    this._activatedRoute.params.subscribe(params => {
      id = params['id'];
      this.getSelectedCharacter(+id);
    });
  }

  getSelectedCharacter(id: number) {
    this.character = this._characterService.getCharacter(id);
  }

  onGoBack() {
    this._location.back();
  }

}
