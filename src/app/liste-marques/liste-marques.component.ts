import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styles: ``
})
export class ListeMarquesComponent implements OnInit {
  marques! : Marque[];
  updateMarque:Marque={"idMarque":0,"nomMarque":""};
  ajout:boolean=true;

  constructor(private voitureService : VoitureService) { }
  ngOnInit(): void {
    this.chargerMarque();
  
}
marqueUpdated(cat:Marque):void{
  this.voitureService.ajouterMarque(cat); 
  this.chargerMarque; // Recharge la liste des marques après ajout.
  
  /*this.voitureService.ajouterMarque(cat);
  this.chargerMarque();
 /* console.log("Cat updated event",cat);
  this.voitureService.ajouterMarque(cat);
 this.chargerMarque();*/
 /*if (this.ajout) {
  // Si ajout est vrai, ajouter la marque
  this.voitureService.ajouterMarque(cat);
} else {
  // Si ajout est faux, modifier la marque existante
  const index = this.marques.findIndex(m => m.idMarque === cat.idMarque);
  this.marques[index] = cat;
   
  
}
this.chargerMarque();*/
 
  }
  
chargerMarque(){
  this.marques=this.voitureService.listeMarques();
  console.log(this.marques);
}
UpdateMar(mar:Marque) {
  this.updateMarque=mar;
  this.ajout=false;
  }
  



}