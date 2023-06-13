import { Component, OnInit } from "@angular/core";

interface Propiedade{
    nome: string;
    selecao: string;

}

@Component({
    selector: 'propriedades',
    templateUrl: './propriedades.component.html',
    styleUrls:['./propriedades.component.css']
})
export class propriedadesComponent implements OnInit{
    nome: string=""
    selecao1: string=""


    listaSelecao: String[]=[];
    listaPropiedade: Propiedade[]=[];
    ngOnInit(): void {
        this.listaSelecao.push("String", "Int", "Categoria")
    }

    salvarPropriedades(): void{
        const propriedade: Propiedade ={
            selecao: this.selecao1,
            nome: this.nome
        };
        console.log(this.selecao1)
        this.listaPropiedade.push(propriedade);
        console.log(propriedade);
    }
   


}