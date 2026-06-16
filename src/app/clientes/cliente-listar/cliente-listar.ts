import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {

  clientes = signal<ClienteModel[]>([]);

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes(): void {

    const clientesString = localStorage.getItem('clientes');

    if (clientesString === null) {
      return;
    }

    const clientesLista = JSON.parse(clientesString) as ClienteModel[];

    const clientesOrdenados = clientesLista.sort((x, y) =>
      x.nome.localeCompare(y.nome)
    );

    this.clientes.set(clientesOrdenados);
  }

  apagar(id: string): void {

    if (!confirm('Deseja apagar este cliente?')) {
      return;
    }

    this.clientes.update(clientes =>
      clientes.filter(x => x.id !== id)
    );

    const clientesString = JSON.stringify(this.clientes());

    localStorage.setItem('clientes', clientesString);
  }
}