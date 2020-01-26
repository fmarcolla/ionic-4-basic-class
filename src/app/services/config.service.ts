import { Injectable } from '@angular/core';

let config_KEY = "config";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config = {
      showSlide: false,
      userName: "",
      name: ""
  }

  constructor() { 

  }

  getConfigData(): any{
    return localStorage.getItem(config_KEY);
  }

  unset(): any{
    localStorage.removeItem(config_KEY);
  }

  setConfigData(showSlide?: boolean, name?: string, userName?: string){
    let config = {
      showSlide: false,
      userName: "",
      name: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(userName){
      config.userName = userName;
    }

    if(name){
      config.name = name;
    }

    localStorage.setItem(config_KEY, JSON.stringify(config));
  }

}
