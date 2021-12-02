import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
 name : 'pipedevises'
})

export class CurrencyPipe implements PipeTransform {
    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("FCFA", 1);
        devises.set("Euro", 655.957);
        devises.set("Dollar us", 575.500);
        devises.set("Yen japonais", 5.075);
        devises.set("Livre sterling", 768.250);
        devises.set("Franc suisse", 626.750);
        devises.set("Dollar canadien", 450.500);
        devises.set("Yuan chinois", 90.000);
        devises.set("Dirham UAE", 156.250);
        devises.set("dirham_marocain", 0.0015);
        devises.set("franc_congolais", 3.4532);
        devises.set("dinar_tunisien", 0.0050);
        devises.set("bceao", 1.0000);
        devises.set("franc_guineen", 16.4201);
        devises.set("franc_rwandais", 1.7886);
        devises.set("ariary_malgache", 6.8787);
        devises.set("dinar_algerien", 0.2402);
        devises.set("franc_burundais", 3.4401);
        devises.set("ouguiya_mauritanien", 0.6168);
        devises.set("rouble_russe", 0.1279);
        devises.set("Real_Bresilien", 0.0098);
        devises.set("Livre_Turque", 0.0233);
        devises.set("Yen japonais", 0.0098);
        devises.set("Bitcoin", 0.0013);
    
  

    for (const key of devises.keys()) {
        if(depart==key){
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))*val/Number(devises.get(String(arrivee)));
        }   
    }
    return val;
    }
}