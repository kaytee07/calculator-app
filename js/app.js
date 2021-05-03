let keypadEl = document.querySelectorAll(".keypad")
let screenEl = document.querySelector(".screen")

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
            dataStorage1 += (+screenEl.innerHTML)
            screenEl.innerHTML = "";
             console.log(dataStorage1)
           
           return symbol
       }else if(symbol != "+" && symbol != "" && equals == ""){
           if(symbol == "-"){
                dataStorage1 -= (+screenEl.innerHTML)
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
        
       }  else if(symbol == "" ){
           console.log(symbol)
        symbol += e.target.textContent
        equals = ""
        dataStorage1 += (+screenEl.innerHTML)
         screenEl.innerHTML = "";
       }else if(symbol != "" && equals == "=") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
            screenEl.innerHTML = "";
       }
     }else if(e.target.classList.contains("sub")){
        if(symbol == "-" && equals == ""){
            equals = ""
            dataStorage1 -= (+screenEl.innerHTML)
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
        symbol = ""
        symbol += e.target.textContent
        equals = ""
        dataStorage1 += (+screenEl.innerHTML)
         screenEl.innerHTML = "";
        console.log(symbol)
       }  else if(symbol != "-" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
            screenEl.innerHTML = "";
       }
       
     }else if(e.target.classList.contains("mul")){
       console.log("womp")
        if(symbol == "X" && equals == ""){
            equals = ""
            dataStorage1 *= (+screenEl.innerHTML)
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
        symbol = ""
        symbol += e.target.textContent
        equals = ""
        dataStorage1 = (+screenEl.innerHTML)
         screenEl.innerHTML = "";
        console.log(dataStorage1)
       }  else if(symbol != "X" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "-"){
              console.log("wo")
                dataStorage1 -= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "/"){
                dataStorage1 /= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
            screenEl.innerHTML = "";
       }
       
     }else if(e.target.classList.contains("div")){
       console.log("womp")
        if(symbol == "/" && equals == ""){
            equals = ""
            dataStorage1 /= (+screenEl.innerHTML)
            screenEl.innerHTML = "";
            console.log(dataStorage1)
        
       }else if(symbol == "" ){
        symbol = ""
        symbol += e.target.textContent
        equals = ""
        dataStorage1 = (+screenEl.innerHTML)
         screenEl.innerHTML = "";
        console.log(dataStorage1)
       }  else if(symbol != "/" && symbol != "" && equals == "" ){
           if(symbol == "+"){
                dataStorage1 += (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
            }else if(symbol == "-"){
              console.log("wo")
                dataStorage1 -= (Number(screenEl.innerHTML))
                
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }else if(symbol == "X"){
                dataStorage1 *= (+screenEl.innerHTML)
                symbol = ""
                symbol += e.target.textContent
                equals = "";
                screenEl.innerHTML = "";
                console.log(dataStorage1)
                }
       }else if(symbol != "" && equals != "") {
           equals = ""
           symbol = ""
            symbol += e.target.textContent
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
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
         }else if(equals == "=" && symbol == "-"){
            dataStorage1 -= (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
         
       }else if(equals == "" && symbol == "-"){
        equals =  e.target.textContent;
            dataStorage1 -= (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
       }else if(equals == "=" && symbol == "X"){
            dataStorage1 += (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
    
       }else if(equals == "" && symbol == "X"){
        equals =  e.target.textContent;
            dataStorage1 *= ( Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
       }else if(equals == "=" && symbol == "/"){
            dataStorage1 /= (Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
             console.log(dataStorage1)
    
       }else if(equals == "" && symbol == "/"){
        equals =  e.target.textContent;
            dataStorage1 /= ( Number(screenEl.innerHTML))
            screenEl.innerHTML = dataStorage1
            console.log(dataStorage1)
       }
         
        
     }else if(e.target.classList.contains("cls")){
       dataStorage1 = 0;
       symbol = "";
       equals = "";
       screenEl.innerHTML = ""
     }
 })
})

const addSymbol = (staticVar ,screenFigure) =>{
        staticVar = screenFigure
}