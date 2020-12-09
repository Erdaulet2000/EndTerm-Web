import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
  getAllPlayers(){
    return this.http.get('http://localhost:3000/users');
  }
  getPlayer(id: number){
    return this.http.get('http://localhost:3000/users/' + id);
  }
}
