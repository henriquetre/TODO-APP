import { Component, OnInit } from "@angular/core";

interface Propriedade{
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
    listaPropriedade: Propriedade[]=[];

    ngOnInit(): void {
        this.listaSelecao.push("String", "Int", "Categoria")
        let lista2: Propriedade[] = JSON.parse(localStorage.getItem('listaPropriedade'));
    if (lista2 != null) {
      this.listaPropriedade= lista2;
      console.log(lista2);
    } 
    }



    salvarPropriedades(): void{
        const propriedade1: Propriedade ={
            selecao: this.selecao1,
            nome: this.nome
        };
        
        this.listaPropriedade.push(propriedade1);
        console.log(propriedade1);
        console.log(this.listaPropriedade)
        localStorage.setItem('listaPropriedade', JSON.stringify(this.listaPropriedade));
        console.log(propriedade1.nome)
        this.nome="";
        if(this.selecao1=="Categoria"){
            window.location.href="http://localhost:4200/categoria"
        }
        let i=0;
        // for(let propriedadeCategoria of this.listaPropriedade){
           
        //     if(propriedadeCategoria.selecao=="Categoria" && i!=1){
        //         i++;
        //     }
        // }
    }
   


}