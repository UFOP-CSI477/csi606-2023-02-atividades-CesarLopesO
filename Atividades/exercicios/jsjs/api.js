async function carregarEstados() {
    console.log("ok")

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    console.log(response);
    const estados = response.json();
    
  }
  



function carrregarCidades(){

}