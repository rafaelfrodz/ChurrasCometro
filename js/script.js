//Carne - 400 gramas por adulto, se o evento passar mais de 6 horas, esse consumo aumenta para 650 gramas
//Cerveja - 1200ml por adulto, se o evento passar mais de 6 horas, esse consumo aumenta para 2000 ml 
//Refrigerante/água - 1000ml por adulto, se o evento passar mais de 6 horas, esse consumo aumenta para 1500 ml 


function receber(){
  let adultos = document.querySelector("#qntAdultos").value
  let criancas = document.querySelector("#qntCriancas").value
  let duracao = document.querySelector("#duracaoEvento").value
  let resultadoDoCalc = document.querySelector(".resultadoDoCalc")

  if (duracao < 6){
    let consumoCarne = ((adultos * 0.400) + (criancas * 0.200)).toFixed(1)
    let consumoCerveja = Math.ceil((adultos * 1200) / 350)
    let consumoBebidas = Math.ceil(((adultos * 1000) + (criancas * 500)) / 2000)
    resultadoDoCalc.innerHTML = `${consumoCarne} Kg de carne <br>${consumoCerveja} latas de cerveja <br> ${consumoBebidas} garrafas de 2L de bebidas`
  }else{
    let consumoCarne = ((adultos * 0.650) + (criancas * 0.325)).toFixed(1)
    let consumoCerveja = Math.ceil((adultos * 2000) / 350)
    let consumoBebidas = Math.ceil(((adultos * 1500) + (criancas * 750)) / 2000)
    resultadoDoCalc.innerHTML = `${consumoCarne} Kg de carne <br>${consumoCerveja} latas de cerveja <br> ${consumoBebidas} garrafas de 2L de bebidas`
}}