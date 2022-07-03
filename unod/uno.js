
const 
      nombre = document.getElementById("nombre"),
      materia = document.getElementById("materia"),
      valor = document.getElementById("valor"),
      btnMateria = document.getElementById("btnMateria"),
      btnEnviar = document.getElementById("btnEnviar"),
      res = document.getElementById("resultado");
      nombre.focus();

btnMateria.addEventListener("click",()=>{
 
      let tab = document.getElementById("tab");
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let mat = document.createTextNode(materia.value);
      td.appendChild(mat);
      tr.appendChild(td);

      let td1 = document.createElement("td");
      let val = document.createTextNode(valor.value);
      td1.appendChild(val);
      tr.appendChild(td1);

      tab.appendChild(tr);
   
    materia.value = "";
    valor.value = "";
    materia.focus(); 
  }
});


btnEnviar.addEventListener("click",()=>{
  let tab = document.getElementById("tab");
  let len = tab.getElementsByTagName('tr').length;
  if (len == 1) {
    res.innerHTML = "Agrega una Materia";
  }else{

    let contar = 1;
      let tot = 0;
      let tdtext = tab.getElementsByTagName('td');
      for (let i = 0;i < tdtext.length; i++) {
        if(i == contar){
          tot = tot + parseInt(tdtext[i].innerHTML);
          contar = contar + 2;
        }
     }
  res.innerHTML = "valor materias: $ " + tot + "<br>Descuento: $ " + (tot * 0.2) + "<br>Papeleria: $ 20000" + "<br>Carné: $ 8000"  + "<br>Total: $ " + ((tot * 0.8) + 28000);
  }

  
});