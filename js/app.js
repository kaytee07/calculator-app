let keypadEl = document.querySelectorAll(".keypad");
let screenEl = document.querySelector(".screen") ;
let historyEl = document.querySelector(".history")
let clrScreen = document.querySelector(".bsp");


// Getting Data on screen
let dataStorage1 = 0 ;
let symbol = "";
let equals = "";



keypadEl.forEach((elem,index)=>{
 elem.addEventListener("click",(e)=>{
    if(e.target.classList.contains("num")){
        if(equals == "="){
            screenEl.innerHTML = ""
            equals = "";
            symbol = "";
            dataStorage1 = 0
           screenEl.innerHTML += e.target.textContent
        }else{
            screenEl.innerHTML += e.target.textContent
        }
         
    }else if(e.target.classList.contains("add")){
        if(symbol == "+" && equals == ""){
            console.log(symbol)
            equals = ""
             if (screenEl.innerHTML == "") {
               return;
             }
           historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
            dataStorage1 += (+screenEl.innerHTML)
            screenEl.innerHTML = "";
             console.log(dataStorage1)
           
           return symbol
       }else if(symbol != "+" && symbol != "" && equals == ""){
           if(symbol == "-"){
                dataStorage1 -= (+screenEl.innerHTML)
                
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
        
       }  else if(symbol == "" ){
        symbol += e.target.textContent
        equals = ""
        dataStorage1 += (+screenEl.innerHTML)
         if (screenEl.innerHTML == "") {
           return;
         }
        historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
         screenEl.innerHTML = "";
       }else if(symbol != "" && equals == "=") {
           equals = ""
           symbol = ""
           historyEl.innerHTML = "";
            if (screenEl.innerHTML == "") {
              return;
            }
           historyEl.innerHTML += screenEl.innerHTML + " " + "+" + " ";
            symbol += e.target.textContent
            screenEl.innerHTML = "";
       }
     }else if(e.target.classList.contains("sub")){
        if(symbol == "-" && equals == ""){
            equals = ""
            dataStorage1 -= (+screenEl.innerHTML);
               if (screenEl.innerHTML == "") {
                 return;
               };
             historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
        symbol = ""
        symbol += e.target.textContent
        equals = ""
        dataStorage1 += (+screenEl.innerHTML)
         if (screenEl.innerHTML == "") {
           return;
         }
         historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
         screenEl.innerHTML = "";
        console.log(symbol)
       }  else if(symbol != "-" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent;
             if (screenEl.innerHTML == "") {
               return;
             }
            historyEl.innerHTML = ""
             historyEl.innerHTML += screenEl.innerHTML + " " + symbol + " ";
            screenEl.innerHTML = "";
       }
       
     }else if(e.target.classList.contains("mul")){
       console.log("womp")
        if(symbol == "X" && equals == ""){
            equals = ""
            dataStorage1 *= (+screenEl.innerHTML)
            if(screenEl.innerHTML == ""){
              return
            }
            historyEl.innerHTML +=
              screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
         symbol = ""; 
         symbol += e.target.textContent;
          if (screenEl.innerHTML == "") {
            return;
          }
         historyEl.innerHTML +=
          screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
        
        equals = ""
        dataStorage1 = (+screenEl.innerHTML)
         screenEl.innerHTML = "";
        console.log(e.target.textContent)
       }  else if(symbol != "X" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                 historyEl.innerHTML +=
                  screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "-"){
              console.log("wo")
                dataStorage1 -= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML +=
                  screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
                equals = "";
                screenEl.innerHTML = "";
                }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent;
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML +=
                  screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
             if (screenEl.innerHTML == "") {
               return;
             }
            historyEl.innerHTML = ""
            historyEl.innerHTML +=
              screenEl.innerHTML + " " + symbol.toLowerCase() + " ";
            screenEl.innerHTML = "";
       }
       
     }else if(e.target.classList.contains("div")){
       console.log("womp")
        if(symbol == "/" && equals == ""){
            equals = ""
            dataStorage1 /= (+screenEl.innerHTML)
             if (screenEl.innerHTML == "") {
               return;
             }
            historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
        symbol = ""
        symbol += e.target.textContent
        equals = ""
        dataStorage1 = (+screenEl.innerHTML)
         if (screenEl.innerHTML == "") {
           return;
         }
        historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
         screenEl.innerHTML = "";
        console.log(dataStorage1)
       }  else if(symbol != "/" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "-"){
              console.log("wo")
                dataStorage1 -= (Number(screenEl.innerHTML))  
                symbol = ""
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                 historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = "";
                 if (screenEl.innerHTML == "") {
                   return;
                 }
                 historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
            historyEl.innerHTML = ""
             if (screenEl.innerHTML == "") {
               return;
             }
            historyEl.innerHTML += screenEl.innerHTML + " " + "÷" + " ";
            screenEl.innerHTML = "";
       }
       
     }else if(e.target.classList.contains("equ")){
          if(equals == "=" && symbol == "+"){
            dataStorage1 += (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
       }else if(equals == "" && symbol == "+"){
        equals =  e.target.textContent;
            dataStorage1 += (Number(screenEl.innerHTML))
            historyEl.innerHTML += screenEl.innerHTML
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
         }else if(equals == "=" && symbol == "-"){
            dataStorage1 -= (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
         
       }else if(equals == "" && symbol == "-"){
        equals =  e.target.textContent;
            dataStorage1 -= (Number(screenEl.innerHTML))
            historyEl.innerHTML += screenEl.innerHTML;
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
       }else if(equals == "=" && symbol == "X"){
            dataStorage1 += (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
    
       }else if(equals == "" && symbol == "X"){
        equals =  e.target.textContent;
            dataStorage1 *= ( Number(screenEl.innerHTML))
            historyEl.innerHTML += screenEl.innerHTML;
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
       }else if(equals == "=" && symbol == "/"){
            dataStorage1 /= (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
    
       }else if(equals == "" && symbol == "/"){
        equals =  e.target.textContent;
            dataStorage1 /= ( Number(screenEl.innerHTML))
            historyEl.innerHTML += screenEl.innerHTML;
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
       }
      }else if(e.target.classList.contains("cls")){
       dataStorage1 = 0;
       symbol = "";
       equals = "";
       historyEl.innerHTML = ""
       screenEl.innerHTML = ""
     }else if(e.target.classList.contains("bsp")){
         let char = Number(screenEl.innerHTML);
         let checker = screenEl.innerHTML
         if(checker.length > 0){
           if(equals == ""){
               let str = char.toString().split("");
               let rem = str.join("");
               rem = rem.substr(0, rem.length - 1);
               screenEl.innerHTML = rem;
           }
         }
       }
 })
})
