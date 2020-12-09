import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  constructor() {}
  items = ['Messi', 'Coutinio', 'Fati', 'Marc-André ter Stegen', 'Jordi Alba', 'Clément Lenglet',
    'Piqué', 'Sergi Roberto', 'Busquets', 'Frenkie de Jong', 'Antoine Griezmann'];

  ngOnInit(): void {
  }
}
