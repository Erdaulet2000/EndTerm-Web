import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CanComponentLeave} from '../guard/un-saved-changes.guard';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements CanComponentLeave {
  playerName: FormControl = new FormControl();
  canLeave(): boolean{
    if (this.playerName.dirty){
      return window.confirm('You hae some changes. Save it before leaving');
    }
    return true;
  }

  ngOnInit(): void {
  }

}
