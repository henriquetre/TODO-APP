import { Component, Input, OnInit } from "@angular/core";

interface Propriedade {
  nome: string;
  selecao: string;
}

@Component({
  selector: "propriedades",
  templateUrl: "./propriedades.component.html",
  styleUrls: ["./propriedades.component.css"],
})
export class propriedadesComponent implements OnInit {
  nome: string = "";
  selecao1: string = "";

  listaSelecao: String[] = [];
  listaPropriedade: Propriedade[] = [];

  ngOnInit(): void {
    
    this.listaSelecao.push("String", "Int", "Categoria");
    let lista2: Propriedade[] = JSON.parse(
      localStorage.getItem("listaPropriedade")
    );
    if (lista2 != null) {
      this.listaPropriedade = lista2;
      console.log(lista2);
    }
  }

  desabilitar: boolean;

  salvarPropriedades(): void {
    
    if (this.selecao1 == "Categoria") {
       console.log("VAIII "+this.nome)
      this.desabilitar=true;
      this.nome="";
    }else{
      const propriedade1: Propriedade = {
        selecao: this.selecao1,
        nome: this.nome,
      };
      this.desabilitar=false;
  
      this.listaPropriedade.push(propriedade1);
  
      localStorage.setItem(
        "listaPropriedade",
        JSON.stringify(this.listaPropriedade)
       );
  
      this.nome = "";
    }
    let i = 0;
    
  }


  excluirPropriedades(propriedade: Propriedade): void{
    const index = this.listaPropriedade.indexOf(propriedade);

    if (index !== -1) {
      this.listaPropriedade.splice(index, 1);
      console.log(this.listaPropriedade)
    }
    localStorage.setItem('listaPropriedade', JSON.stringify(this.listaPropriedade))   
    

  }
}
