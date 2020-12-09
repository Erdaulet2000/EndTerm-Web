import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AddPlayerComponent} from '../add-player/add-player.component';

export interface CanComponentLeave{
  canLeave: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UnSavedChangesGuard implements CanDeactivate<CanComponentLeave>{
  canDeactivate(component: CanComponentLeave){
      if (component.canLeave){
        return component.canLeave();
      }
      return true;
  }

}
