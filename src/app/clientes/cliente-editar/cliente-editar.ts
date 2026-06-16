import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-editar',
  imports: [FormsModule],
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.scss',
})
export class ClienteEditar {

  cliente = signal<ClienteModel>({
    id: '',
    nome: '',
    email: '',
    telefone: ''
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {

    const idParaEditar = activeRoute.snapshot.paramMap.get('id');

    const clientesString = localStorage.getItem('clientes');

    if (clientesString === null) {
      alert('Nenhum cliente cadastrado');
      router.navigate(['/clientes']);
      return;
    }

    const clientes = JSON.parse(clientesString) as ClienteModel[];

    const clientesEncontrados =
      clientes.filter(cliente => cliente.id === idParaEditar);

    if (clientesEncontrados.length === 0) {
      alert('Cliente não encontrado');
      router.navigate(['/clientes']);
      return;
    }

    this.cliente.set(clientesEncontrados[0]);
  }

  salvar(): void {

    const clientes = this.carregarClientesDoLocalStorage();

    const indiceCliente =
      clientes.findIndex(x => x.id === this.cliente().id);

    clientes[indiceCliente].nome = this.cliente().nome;
    clientes[indiceCliente].email = this.cliente().email;
    clientes[indiceCliente].telefone = this.cliente().telefone;

    const clientesString = JSON.stringify(clientes);

    localStorage.setItem('clientes', clientesString);

    alert('Cliente alterado com sucesso');

    this.router.navigate(['/clientes']);
  }

  carregarClientesDoLocalStorage(): ClienteModel[] {

    const clientesString = localStorage.getItem('clientes');

    if (clientesString === null) {
      return [];
    }

    return JSON.parse(clientesString) as ClienteModel[];
  }
}