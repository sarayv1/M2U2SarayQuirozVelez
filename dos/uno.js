const
     a = document.getElementById('numero1'),
     b = document.getElementById('numero2'),
     c = document.getElementById('numero3'),
     d = document.getElementById('numero4'),
     boton = document.getElementById('button1'),
     parrafMayor = document.getElementById('numeroMayor'),
     parrafMenor = document.getElementById('numeroMenor');
     

     boton.addEventListener('click',(e)=>{
        e.preventDefault()

        if((a.value=="") || (b.value=="") || (c.value=="") || (d.value=="")){
            alert("Campos son obligatorios")
        
        }else if ((a.value==b.value) || (a.value==c.value) || (a.value==d.value) || (b.value==c.value) || (b.value==d.value) || (c.value==d.value)){
            alert("No pueden haber numeros iguales")

           
        }else {
         let valorMayor = Math.max(a.value,b.value,c.value,d.value);
         let valorMenor = Math.min(a.value,b.value,c.value,d.value);
         parrafMayor.innerHTML= 'El numero mayor es ' + valorMayor;
         parrafMenor.innerHTML= 'El numero menor es ' + valorMenor;
         
       }
     });