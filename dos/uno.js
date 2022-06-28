const 
     a = document.getElementsByName('numero1'),
     b = document.getElementsByName('numero2'),
     c = document.getElementsByName('numero3'),
     d = document.getElementsByName('numero4'),
     e = document.getElementsByName('numero5'),
     boton=document.getElementsByName('button1'),
     parrafMayor= document.getElementById('numeroMayor'),
     parrafMenor= document.getElementById('numMenor');

     boton.addEventListener('click',()=>{
        
        if ((a.value==b.value) || (a.value==c.value) || (a.value==d.value)) {
            alert("No pueden haber dos numeros iguales")
        } else if ((b.value==c.value) || (b.value==d.value)){
         alert("No pueden haber dos numeros iguales")

        }else if ((c.value==d.value)) {
         alert("No pueden haber dos numeros iguales")
        }else {
         let valorMayor= Math.max(a.value,b.vlaue,c.value,d.value)
          if (valorMayor==a.value){
            numMayor.innerHTML= 'El numero mayor es ' + valorMayor;

          }else  if (valorMayor==b.value){
            parrfMayor.innerHTML= 'El numero mayor es ' + valorMayor;
            
        }else  if (valorMayor==c.value){
         parrfMayor.innerHTML= 'El numero mayor es ' + valorMayor;
      }else (valorMayor==d.value);{
         parrfMayor.innerHTML= 'El numero mayor es ' + valorMayor;
      }
      let valorMenor= Math.min(a.value,b.vlaue,c.value,d.value)
          if (valorMenor==a.value){
            numMenor.innerHTML= 'El numero menor es ' + valorMenor;

          }else  if (valorMayor==b.value){
            parrfMenor.innerHTML= 'El numero menor es ' + valorMenor;
            
        }else  if (valorMayor==c.value){
         parrfMenorr.innerHTML= 'El numero menor es ' + valorMenor;
      }else (valorMayor==d.value);{
         parrfMenor.innerHTML= 'El numero menor es ' + valorMenor;
      }
       }})