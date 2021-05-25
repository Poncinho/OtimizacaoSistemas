import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { simplex } from 'fxsimplex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OtimizacaoSistemas';

  public resultado: any;
  public formulario: FormGroup;
  public showResult = false;
  public result: any;

  ngOnInit() {
    this.formulario = new FormGroup({
      q1: new FormControl(0),
      q2: new FormControl(0),
      q3: new FormControl(0),
      q4: new FormControl(0),
      q1r1: new FormControl(0),
      q2r1: new FormControl(0),
      q3r1: new FormControl(0),
      q4r1: new FormControl(0),
      rr1: new FormControl(">="),
      vr1: new FormControl(0),
      q1r2: new FormControl(0),
      q2r2: new FormControl(0),
      q3r2: new FormControl(0),
      q4r2: new FormControl(0),
      rr2: new FormControl(">="),
      vr2: new FormControl(0),
      q1r3: new FormControl(0),
      q2r3: new FormControl(0),
      q3r3: new FormControl(0),
      q4r3: new FormControl(0),
      rr3: new FormControl(">="),
      vr3: new FormControl(0)
    })
  }

  public solve() {
    const q1 = this.formulario.controls.q1.value;
    const q2 = this.formulario.controls.q2.value;
    const q3 = this.formulario.controls.q3.value;
    const q4 = this.formulario.controls.q4.value;
    const q1r1 = this.formulario.controls.q1r1.value;
    const q2r1 = this.formulario.controls.q2r1.value;
    const q3r1 = this.formulario.controls.q3r1.value;
    const q4r1 = this.formulario.controls.q4r1.value;
    const rr1 = this.formulario.controls.rr1.value;
    const vr1 = this.formulario.controls.vr1.value;
    const q1r2 = this.formulario.controls.q1r2.value;
    const q2r2 = this.formulario.controls.q2r2.value;
    const q3r2 = this.formulario.controls.q3r2.value;
    const q4r2 = this.formulario.controls.q4r2.value;
    const rr2 = this.formulario.controls.rr2.value;
    const vr2 = this.formulario.controls.vr2.value;
    const q1r3 = this.formulario.controls.q1r3.value;
    const q2r3 = this.formulario.controls.q2r3.value;
    const q3r3 = this.formulario.controls.q3r3.value;
    const q4r3 = this.formulario.controls.q4r3.value;
    const rr3 = this.formulario.controls.rr3.value;
    const vr3 = this.formulario.controls.vr3.value;

    var objective = `Minimize C = ${q1}Q1 + ${q2}Q2 + ${q3}Q3 + ${q4}Q4`;
    var constraints = [
      `${q1r1}Q1 + ${q2r1}Q2 + ${q3r1}Q3 + ${q4r1}Q4 ${rr1} ${vr1}`,
      `${q1r2}Q1 + ${q2r2}Q2 + ${q3r2}Q3 + ${q4r2}Q4 ${rr2} ${vr2}`,
      `${q1r3}Q1 + ${q2r3}Q2 + ${q3r3}Q3 + ${q4r3}Q4 ${rr3} ${vr3}`
    ];

    this.showResult = true;
    const resultado = simplex(objective, constraints);
    this.result = {
      result: resultado.result, solution: [
        ['Q1', 0],
        ['Q2', 0],
        ['Q3', 0],
        ['Q4', 0],
        ['Custo', 0],
      ]
    };
    resultado.solution.forEach(solution => {
      if (solution[0] === 'Q1') {
        this.result.solution[0][1] = solution[1];
      } else if(solution[0] === 'Q2'){
        this.result.solution[1][1] = solution[1];
      } else if(solution[0] === 'Q3'){
        this.result.solution[2][1] = solution[1];
      } else if(solution[0] === 'Q4'){
        this.result.solution[3][1] = solution[1];
      } else if(solution[0] === 'C'){
        this.result.solution[4][1] = solution[1];
      } 
    });
    console.log(simplex(objective, constraints));
  }


  public reset() {
    this.formulario.reset();
  }
}
