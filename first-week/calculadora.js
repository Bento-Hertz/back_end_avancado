function calcular() {
   const formData = new FormData(document.querySelector('form'))

   const calculo = formData.get('calculoForm')

   const calculoArray = calculo.split(' ')

   let resultado = 0

   if(calculoArray[1] == '+'){
      resultado = parseInt(calculoArray[0]) + parseInt(calculoArray[2])
   }
   else if(calculoArray[1] == '-'){
      resultado = parseInt(calculoArray[0]) - parseInt(calculoArray[2])
   }
   else if(calculoArray[1] == '/'){
      resultado = parseInt(calculoArray[0]) / parseInt(calculoArray[2])
   }
   else if(calculoArray[1] == '*'){
      resultado = parseInt(calculoArray[0]) * parseInt(calculoArray[2])
   }

   console.log("A resposta é = ", resultado)

} 