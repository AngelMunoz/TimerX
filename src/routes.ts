import { RouteConfig } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export const ROUTES: RouteConfig[] = [
  {
    title: 'Log In', name: 'login', route: ['', 'login'],
    settings: { auth: false }, nav: false,
    moduleId: PLATFORM.moduleName('./pages/auth/login'),
  },
  {
    title: 'Sign Up', name: 'signup', route: 'signup',
    settings: { auth: false }, nav: false,
    moduleId: PLATFORM.moduleName('./pages/auth/signup'),
  },
  {
    title: 'Home', name: 'home', route: 'home',
    settings: { auth: true }, nav: true,
    moduleId: PLATFORM.moduleName('./pages/home'),
  },
  {
    title: 'Summary', name: 'summary', route: 'summary',
    settings: { auth: true }, nav: true,
    moduleId: PLATFORM.moduleName('./pages/summary'),
  },
  {
    title: 'Account', name: 'account', route: 'account',
    settings: { auth: true }, nav: true,
    moduleId: PLATFORM.moduleName('./pages/account'),
  }
];