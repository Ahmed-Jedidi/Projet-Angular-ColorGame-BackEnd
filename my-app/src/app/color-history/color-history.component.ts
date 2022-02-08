import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from './../model/color.model';
import { ColorService } from '../services/color.service';


@Component({
  selector: 'app-color-history',
  templateUrl: './color-history.component.html',
  styleUrls: ['./color-history.component.css']
})
export class ColorHistoryComponent implements OnInit {

  colors !: Color[];

  constructor(private colorService : ColorService) { 
                this.colorService.listeColors().subscribe(cols => {console.log(cols);
                                                                   this.colors = cols; } );
                                                   }

  ngOnInit(): void {
  }

}
