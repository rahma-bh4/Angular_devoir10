/*import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

export const voitureGuard: CanActivateFn = (route, state) => {
  return true;
};
export class VoitureGuard implements CanActivate {
  constructor (private authService: AuthService,
  private router : Router) {}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
  return true;
  else
  {
  this.router.navigate(['app-forbidden']);
  return false;
  }
  }
}
*/
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const VoitureGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};