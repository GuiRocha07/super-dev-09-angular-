import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  imports: [FormsModule],
  templateUrl: './dados-pessoais.html',
  styleUrl: './dados-pessoais.scss',
})
export class DadosPessoais {
 nome = signal<string>("");
sobrenome = signal<string>("");
idade =  signal<number | null>(null);

apresentarDados(): void {

  if (this.nome().trim() === "") {
    alert("Preencha o nome");
    return;
  }

  if (this.sobrenome().trim() === "") {
    alert("Preencha o sobrenome");
    return;
  }

  if (this.idade() === null) {
    alert("Preencha a idade");
    return;
  }

  alert(`
Nome completo: ${this.nome()} ${this.sobrenome()}
Idade: ${this.idade()} anos
`);
}
}