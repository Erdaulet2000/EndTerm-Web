import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private userService: UsersService, private activateRoute: ActivatedRoute) { }

  players: any;

  ngOnInit(): void {
    this.players = this.activateRoute.snapshot.data['data'];
  }
}

