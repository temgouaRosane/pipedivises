import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fcfa = new Devise('FCFA', 'XAF');
  euro = new Devise('Euro', 'EUR');
  dollar = new Devise('Dollar us', 'USD');
  dirham_marocain = new Devise('dirham_marocain ', 'MAD');
  franc_congolais = new Devise('franc_congolais', 'CDF');
  dinar_tunisien = new Devise('dinar_tunisien', 'TND');
  bceao = new Devise('bceao', 'BCEAO');
  franc_guineen = new Devise('franc_guineen', 'GNF');
  franc_rwandais = new Devise('franc_rwandais', ' RWF');
  ariary_malgache = new Devise('ariary_malgache', 'MGA');
  dinar_algerien = new Devise('dinar_algerien', 'DZD');
  franc_burundais = new Devise('franc_burundais', 'BIF');
  ouguiya_mauritanien = new Devise('ouguiya_mauritanien', 'MRO');
  rouble_russe = new Devise('rouble_russe', 'RUB');
  Real_Bresilien = new Devise('Real_Bresilien', 'BRL');
  Libre_Turque = new Devise('Livre_Turque', 'TRY');
  yen_japonais = new Devise('Yen japonais', 'YP');
  livre_sterling = new Devise('Livre sterling', 'LS');
  franc_suisse = new Devise('Franc suisse', 'FS');
  dollar_canadien = new Devise('Dollar canadien', 'DC');
  yuan_chinois = new Devise('Yuan chinois', 'YC');
  dirham_UAE = new Devise('Dirham UAE', 'DUAE');
  Bitcoin =  new Devise('Bitcoin', 'GBP');
  


  
  listedesdevises = [
    this.dollar,
    this.fcfa,
    this.euro,
    this.dirham_marocain,
    this.franc_congolais,
    this.dinar_tunisien,
    this.bceao,
    this.franc_guineen,
    this.franc_rwandais,
    this.ariary_malgache,
    this.dinar_algerien,
    this.franc_burundais,
    this.ouguiya_mauritanien,
    this.rouble_russe,
    this.Real_Bresilien,
    this.Libre_Turque,
    this.Bitcoin,
    this.dirham_UAE,
    this.yuan_chinois,
    this.dollar_canadien,
    this.franc_suisse,
    this.livre_sterling,
    this.yen_japonais,
  ];
  devisedepart = this.dollar;
  devisearrivee = this.euro;
  public valeur=0;

}


class Devise {
  name:String = '';
  code:String = '';
  constructor(name: string, code: string){
      this.name = name;
      this.code = code;
  }
}

