import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { CarroEsportivo } from './carros/carro-esportivo/carro-esportivo';
import { CarroSuv } from './carros/carro-suv/carro-suv';
import { CarroClassico } from './carros/carro-classico/carro-classico';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';
import { DadosPessoais } from './dados-pessoais/dados-pessoais';
import { ClienteCadastrar } from './clientes/cliente-cadastrar/cliente-cadastrar';
import { ClienteListar } from './clientes/cliente-listar/cliente-listar';
import { ClienteEditar } from './clientes/cliente-editar/cliente-editar';


export const routes: Routes = [
  { path: 'cidade/blumenau', loadComponent: () => CidadeBlumenau },
  { path: 'cidade/indaial', loadComponent: () => CidadeIndaial },
  { path: 'carros/esportivo', loadComponent: () => CarroEsportivo },
  { path: 'carros/suv', loadComponent: () => CarroSuv },
  { path: 'carros/classico', loadComponent: () => CarroClassico },
  { path: 'formulario/campos-basico', loadComponent: () => FormCamposBasico },
  { path: 'dados-pessoais', loadComponent: () => DadosPessoais },

  { path: 'clientes/cadastrar', loadComponent: () => ClienteCadastrar },
  { path: 'clientes', loadComponent: () => ClienteListar },
  { path: 'clientes/editar/:id', loadComponent: () => ClienteEditar }
];


