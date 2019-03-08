import { RouteConfig } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export const ROUTES: RouteConfig[] = [
  {
    title: 'Home', name: 'home', route: ['', 'home'],
    settings: { auth: false }, nav: false,
    moduleId: PLATFORM.moduleName('./pages/home'),
  },
  {
    title: 'Log In', name: 'login', route: 'login',
    settings: { auth: false }, nav: false,
    moduleId: PLATFORM.moduleName('./pages/auth/login'),
  },
  {
    title: 'Sign Up', name: 'signup', route: 'signup',
    settings: { auth: false }, nav: false,
    moduleId: PLATFORM.moduleName('./pages/auth/signup'),
  },
  {
    title: 'Summary', name: 'summary', route: 'summary',
    settings: { auth: true }, nav: true,
    moduleId: PLATFORM.moduleName('./pages/summary'),
  }
];