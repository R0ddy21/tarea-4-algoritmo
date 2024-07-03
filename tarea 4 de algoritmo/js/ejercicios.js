class Tarea{
    ejercicio1() {
        let num=0,resp,msg=""
        num=document.getElementById("numero").value
        num=parseInt(num)
        resp=document.getElementById("resp")
            if(num%2==0 ){
                msg=msg+num+"<br>"
                msg=msg+"El numero es par"+"<br>"
            }else{
                msg=msg+num+"<br>"
                msg=msg+"El numero es impar"+"<br>"
            }
        resp.innerHTML=msg
    }
    ejercicio2(){
        let edad=0,resp,msg=""
        edad=document.getElementById("edad").value
        edad=parseInt(edad)
        resp=document.getElementById("resp")
            if(edad>=18 ){
                msg=msg+edad+"<br>"
                msg=msg+"Usted es mayor de edad"+"<br>"
            }else{
                msg=msg+edad+"<br>"
                msg=msg+"Usted es menor de edad"+"<br>"
            }
        resp.innerHTML=msg
    }
    ejercicio3(){
        let num=0,resp,msg=""
        num=document.getElementById("numero").value
        num=parseInt(num)
        resp=document.getElementById("resp")
            if(num>0){
                msg=msg+num+"<br>"
                msg=msg+"El numero es positivo"+"<br>"
            }else if(num<0){
                msg=msg+num+"<br>"
                msg=msg+"El numero es negativo"+"<br>"
            }else{
                msg=msg+num+"<br>"
                msg=msg+"El numero es cero"+"<br>" 
            }
        resp.innerHTML=msg
    }
    ejercicio4() {
        let anio=0,resp,msg=""
        anio=document.getElementById("anio").value
        anio=parseInt(anio)
        resp=document.getElementById("resp")
            if((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
                msg=msg+anio+"<br>"
                msg=msg+"Es un año bisiesto"+"<br>"
            }else{
                msg=msg+anio+"<br>"
                msg=msg+"No es un año bisiesto"+"<br>"
            }
        resp.innerHTML=msg
    }
    ejercicio5(){
    let num,num2,resp,msg=""
    num=document.getElementById("numero").value
    num=parseInt(num)
    num2=document.getElementById("numero2").value
    num2=parseInt(num2)
    resp=document.getElementById("resp")
        if(num>num2){
            msg=msg+"El numero "+" "+num+" es mayor que el numero "+num2+"<br>"
        }else if(num<num2){
            msg=msg+"El numero "+" "+num+" es menor que el numero "+num2+"<br>"
        }else{
            msg=msg+"El numero"+" "+num+" "+"y el numero"+" "+num2+"<br>"
            msg=msg+"Los numeros son iguales"+"<br>" 
        }
    resp.innerHTML=msg
    }
    ejercicio6(){
        let num,resp,msg="",i=1
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
        for ( i = 1; i <= num; i++) {
            if (i % 2 === 0) {
                msg = msg+ i + " es par"+"<br>"
            }
        }
        resp.innerHTML = msg
    }
    ejercicio7(){
        let num,resp,msg="",i=0
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
        for ( i = 1; i <= num; i++) {
            if (num % i === 0) {
                msg = msg + i + " es un divisor de " + num + "<br>"
            }
        }
    
        resp.innerHTML = msg;
    }
    ejercicio8(){
        let num,resp,msg="",suma=0,i
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                suma = suma + i
            }
        }
        if (suma === num) {
            msg = msg + num + " es un número perfecto"
        } else {
            msg = msg + num + " no es un número perfecto"
        }
        resp.innerHTML = msg;
    }
    ejercicio9(){
        let num,resp,msg="",esPrimo=true,i
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
        if (num <= 1) {
            esPrimo = false
        } else {
            for (i = 2; i < num; i++) {
                if (num % i === 0) {
                    esPrimo = false
                    break;
                }
            }
        }
        if (esPrimo) {
            msg = num + " es un número primo"
        } else {
            msg = num + " no es un número primo"
        }
    
        resp.innerHTML = msg
    }
    ejercicio10(){
        let num,resp,msg="",invertido=0,digito
        num = document.getElementById("numero").value
        num = parseInt(num)
        resp = document.getElementById("resp")
        while (num !== 0) {
            digito = num % 10
            invertido = invertido * 10 + digito
            num = Math.floor(num / 10)
        }
        msg = "El número invertido es " + invertido
        resp.innerHTML = msg
    }
    ejercicio11(){
        let num1,num2,resultado=0,resp,msg="",i
        num1= parseInt(document.getElementById("numero1").value)
        num1 = parseInt(num1)
        num2 = parseInt(document.getElementById("numero2").value)
        num2 = parseInt(num2)
        resp = document.getElementById("resp")
    
        for (i = 0; i < num2; i++) {
            resultado =resultado + num1
        }
    
        msg = "El resultado de la multiplicación es " + resultado
        resp.innerHTML = msg
    }
    ejercicio12(){
        let dividendo,divisor,cociente=0,resp,msg=""
        dividendo = parseInt(document.getElementById("dividendo").value)
        dividendo = parseInt(dividendo)
        divisor = parseInt(document.getElementById("divisor").value)
        divisor = parseInt(divisor)
        resp = document.getElementById("resp")
    
        if (divisor === 0) {
            msg = msg + "El divisor no puede ser 0."
        } else {
            while (dividendo >= divisor) {
                dividendo -= divisor
                cociente = cociente + 1
            }
            msg = msg + "El cociente de la división es " + cociente
        }
    
        resp.innerHTML = msg
    }
    ejercicio13(){
        let num,resp,msg="",i,a=0,b=1,c
        num = parseInt(document.getElementById("numero").value)
        num = parseInt(num)
        resp = document.getElementById("resp")
    
        if (isNaN(num) || num <= 0) {
            msg = msg + "Por favor ingrese un número entero positivo."
        } else {
            msg += a + "<br>" + b + "<br>"
    
            for (i = 2; i < num; i++) {
                c = a + b
                msg = msg + c + "<br>"
                a = b
                b = c
            }
        }
    
        resp.innerHTML = msg
    }
    ejercicio14(){
        let numeros, resp, msg = "", i
        numeros = document.getElementById("numeros").value.split(',').map(Number)
        resp = document.getElementById("resp")
    
        for (i = 0; i < numeros.length; i++) {
            if (numeros[i] % 5 === 0) {
                msg = msg+ numeros[i] + " es múltiplo de 5" + "<br>"
            }
        }
    
        resp.innerHTML = msg
    }
    ejercicio15(){
        let numeros,suma=0,resp,msg="",promedio,i
        numeros = document.getElementById("numeros").value.split(',').map(Number)
        resp = document.getElementById("resp")
    
        for (i = 0; i < numeros.length; i++) {
            suma += numeros[i]
        }
    
        promedio = suma / numeros.length
        msg = "El promedio es " + promedio
        resp.innerHTML = msg
    }
    ejercicio16(){
        let numeros, resp, msg = "", i, mayor
        numeros = document.getElementById("numeros").value.split(',').map(Number)
        resp = document.getElementById("resp")

        if (numeros.length > 0) {
            mayor = numeros[0]
            for (i = 1; i < numeros.length; i++) {
                if (numeros[i] > mayor) {
                    mayor = numeros[i]
                }
            }

            msg = "El mayor número es " + mayor
        } else {
            msg = "Por favor, ingrese una lista de números."
        }
        
        resp.innerHTML = msg
    }
    ejercicio17(){
        let nombres, resp, msg = "", i
        nombres = document.getElementById("nombres").value.split(',')
        resp = document.getElementById("resp")
    
        for (i = 0; i < nombres.length; i++) {
            if (nombres[i].trim() !== "Ana") {
                msg += nombres[i].trim() + "<br>"
            }
        }
    
        resp.innerHTML = msg
    }
    ejercicio18(){
        let numeros, resp, msg = "", i
        numeros = document.getElementById("numeros").value.split(',').map(Number)
        resp = document.getElementById("resp")

        for (i = numeros.length - 1; i >= 0; i--) {
            if (numeros[i] % 2 === 0) {
                msg = msg + "El número " + numeros[i] + " es par" + "<br>"
            }
        }
        resp.innerHTML = msg
    }
    ejercicio19(){
        let cadena,resp,msg="",i
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for ( i = 0; i < cadena.length; i++) {
            msg = msg + cadena[i] + "<br>"
        }
        resp.innerHTML = msg
    }
    ejercicio20(){
        let cadena,resp,msg="",i,c=0 
        let vocales = "aeiouAEIOU"
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for (i = 0; i < cadena.length; i++) {
            if (vocales.includes(cadena[i])) {
                c=c+1
            }
        }
        msg = msg + "El número de vocales es " + c
        resp.innerHTML = msg
    }
    ejercicio21(){
        let cadena,i,resp,msg = "",invertida=""
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for (i = cadena.length - 1; i >= 0; i--) {
            invertida = invertida + cadena[i]
        }
        msg = msg + "La cadena invertida de:"+ " " + cadena +"<br>" 
        msg = msg + " es:" + invertida +"<br>"
        resp.innerHTML = msg
    }
    ejercicio22(){
        let cadena,contar=1,resp,i,msg =""
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
            for (i = 0; i < cadena.length; i++) {
                if (cadena[i] === " ") {
                    contar=contar+1
                }
            }
            msg=msg+"El número de palabras que ingreso es: " + contar +"<br>" 
            resp.innerHTML = msg
    }
    ejercicio23(){
        let cadena,resp,i,msg=" ",modificada=" "
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for (i = 0; i < cadena.length; i++) {
            if (cadena[i] === " ") {
                modificada = modificada + "-"
            } else {
                modificada= modificada + cadena[i]
            }
        } 
        msg= "La cadena modificada es: " + modificada +"<br>"
            resp.innerHTML = msg
    }
    ejercicio24(){
        let cadena, caracter, i, resp, contador = 0,msg=""
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        caracter = document.getElementById("caracter").value
        caracter=(caracter)
        resp = document.getElementById("resp")

        for (i = 0; i < cadena.length; i++) {
            if (cadena[i] === caracter) {
                contador=contador+1
            }
        }

        msg = "El carácter '" + caracter + "' aparece " + contador + " veces."
        resp.innerHTML = msg
    }
    ejercicio25(){
        let cadena, caracter, i, resp,msg=" ",nuevacadena=""
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        caracter = document.getElementById("caracter").value
        caracter=(caracter)
        resp = document.getElementById("resp")
        for (i = 0; i < cadena.length; i++) {
            if (cadena[i] !== caracter) {
                nuevacadena = nuevacadena + cadena[i]
            }
        }
        msg = "La nueva cadena es: " + nuevacadena
        resp.innerHTML = msg
    }
    ejercicio26(){
        let cadena, resp, msg = "", nuevaCadena = "", i, char
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")

        for (i = 0; i < cadena.length; i++) {
            char = cadena[i]
            if (char >= 'a' && char <= 'z') {
                nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32)
            } else if (char >= 'A' && char <= 'Z') {
                nuevaCadena =nuevaCadena + String.fromCharCode(char.charCodeAt(0) + 32)
            } else {
                nuevaCadena =nuevaCadena + char
            }
        }
        msg = "La cadena convertida es: " + nuevaCadena
        resp.innerHTML = msg
    }
    ejercicio27(){
        let cadena, resp, msg = "", nuevaCadena = "", i
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for (i = 0; i < cadena.length; i++) {
            if (cadena[i] !== " ") {
                nuevaCadena = nuevaCadena + cadena[i]
            }
        }
        msg = "La cadena sin espacios es: " + nuevaCadena 
        resp.innerHTML = msg
    }
    ejercicio28(){
        let cadena, resp, msg = "", palabraActual = "", i, longitudMaxima = 0
        cadena = document.getElementById("cadena").value
        cadena=(cadena)
        resp = document.getElementById("resp")
        for (i = 0; i < cadena.length; i++) {
            if (cadena[i] === " " || i === cadena.length - 1) {
                if (i === cadena.length - 1 && cadena[i] !== " ") {
                    palabraActual = palabraActual + cadena[i]
                }
                if (palabraActual.length > longitudMaxima) {
                    longitudMaxima = palabraActual.length
                }
                palabraActual = ""
            } else {
                palabraActual = palabraActual + cadena[i]
            }
        }
        msg = "La longitud de la palabra más larga es: " + longitudMaxima
        resp.innerText = msg
    }
    
}
let tarea = new Tarea() //crea una variable igual que la clase
// tarea.mensaje()