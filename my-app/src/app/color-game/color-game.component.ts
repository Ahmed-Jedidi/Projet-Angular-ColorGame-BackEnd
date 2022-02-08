import { Router } from '@angular/router';

import { Color } from './../model/color.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { ColorService } from '../services/color.service';

/*//API REST
import { Observable } from 'rxjs';
//API REST
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
//API REST*/

@Component({
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.css']
})
export class ColorGameComponent implements OnInit {

  /*//API REST
  apiURL : string = 'http://localhost:8085/colorBackEnd/api';
  colors !: Color[];*/

  newColor = new Color();

  addColor() {
    this.newColor.actionDate = new Date;
    this.colorService.ajouterColor(this.newColor).subscribe(col => { console.log(col); });
    //this.router.navigate(['/ColorGame']);
  }

  //API REST


  htmlColorNames !: string[];
  range !: number[];
  rangec !: number[];

  line !: number;
  column !: number;

  curid : any;

  erreur !: number;

  submitted !: boolean;
  

  constructor(private myHeader: ElementRef,
              private renderer: Renderer2,
              /*private http: HttpClient*/
              private router : Router,
              private colorService : ColorService
             ) 
              { /*this.colorService.listeColors().subscribe(cols  => {console.log(cols); });*/}



  ngOnInit(): void {

    
    this.range = [];
    this.rangec = [];
    //this.line = 0;
    
    this.erreur = 0;
    this.submitted = false;

    this.htmlColorNames = [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenrod",
      "DarkGray",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "Goldenrod",
      "Gray",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenrodYellow",
      "LightGray",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquamarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenrod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen"
    ];
  }




  /*listeColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.apiURL);
  }*/
 
////////////////////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////////////////////

  validateHTMLColorName(nom: string): boolean {
    let validUser: boolean = false;
    this.htmlColorNames.forEach((nomactuelle) => { if (nomactuelle.toLowerCase() === nom.toLowerCase()) { validUser = true; } });
    return validUser;
  }

  /////////////////////////////////////////////////

  validateHTMLColorHex(nom: string): boolean {
    let validUser: boolean = false;
    //let v : any =  /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
    if (/^#([\[0-9a-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i.test(nom.toLowerCase())) { validUser = true; } ;
    return validUser;
  }
  
/////////////////////////////////////////////////

  compteur(): void {

    console.log(this.range);
    //this.line = 7;
    this.range = [];
    for (var i = 1; i <= this.line; i++) {
      this.range.push(i);
    }
    console.log(this.range);
  }

/////////////////////////////////////////////////

  compteurc(): void {
    console.log(this.rangec);
    //this.line = 7;
    this.rangec = [];
    for (var i = 1; i <= this.column; i++) {
      this.rangec.push(i);
    }
    console.log(this.rangec);
  }

/////////////////////////////////////////////////

  ChangerCouleur(put: any) {
    this.curid = put;
    this.newColor.oldOne = this.curid.style.backgroundColor;
    
    //put.style.backgroundColor ="white";
    this.submitted = false;
  }

/////////////////////////////////////////////////

  Validation(put: any) {
    let X: string = put.value;
    this.submitted = true;

    if (!this.validateHTMLColorName(put.value) && !this.validateHTMLColorHex(put.value)) {
      console.log("Nice");
      this.erreur = 1;
    }
    else {
      this.addColor();
      this.curid.style.backgroundColor = put.value;
      put.value = "";
      this.erreur = 0;
    }
  }

/////////////////////////////////////////////////

  effacer(put: any) {
    put.value = "";
    this.submitted = false;
  }


}
