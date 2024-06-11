function operacion(num1, num2, num3, num4){
    const suma1 = num1 + num2;
    const  suma2= num3 + num4;
    const multi = suma1 * suma2;
    
    if(multi > 50){
      console.log('El número' + multi  + ' es mayor que 50');
    }
    else if(multi < 50){
      console.log('El numero '+ multi + ' es menor que 50');
    }  
  }
  
  operacion(3,10,4,5);
  operacion(2,2,2,2);