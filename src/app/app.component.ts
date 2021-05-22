import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {simplex} from 'fxsimplex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OtimizacaoSistemas';

  public resultado: any;
  public formulario: FormGroup;

  ngOnInit(){
    this.formulario = new FormGroup({
      qtdeAlimentoA: new FormControl(0),
      qtdeAlimentoB: new FormControl(0),
      qtdeAlimentoC: new FormControl(0),
      restricaoX: new FormControl(0),
      restricaoY: new FormControl(0),
      restricaoZ: new FormControl(0)
    })
  }

  public solve(){
    const qtdeAlimentoA = this.formulario.controls.qtdeAlimentoA.value;
    const qtdeAlimentoB = this.formulario.controls.qtdeAlimentoB.value;
    const qtdeAlimentoC = this.formulario.controls.qtdeAlimentoC.value;
    const restricaoX = this.formulario.controls.restricaoX.value;
    const restricaoY = this.formulario.controls.restricaoY.value;
    const restricaoZ = this.formulario.controls.restricaoZ.value;
    var objective = `Minimize C = ${qtdeAlimentoA}x + ${qtdeAlimentoB}y + ${qtdeAlimentoC}z`;
    var constraints = [`x >= ${restricaoX}`,
                        `y >= ${restricaoY}`,
                        `z >= ${restricaoZ}`];
 
                        
    debugger

    console.log(simplex(objective, constraints));
  }
}
