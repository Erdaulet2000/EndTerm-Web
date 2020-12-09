import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: []
})
export class PlayerComponent implements OnInit {
  player: any;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.userService.getPlayer(id).subscribe(p => {
      console.log(p);
      this.player = p;
    });
  }

}
