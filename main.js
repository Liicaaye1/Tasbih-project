let tasbih = document.querySelector("#tasbih")
let increaseButton = document.querySelector("#increaseBtn")
let decreaseButton = document.querySelector("#decreaseBtn")
let resetButton = document.querySelector("#resetBtn")

let initailValue=0
increaseButton.addEventListener("click", function(){
        initailValue++
        tasbih.innerHTML=initailValue
        // increaseButton.style.backgroundColor ="green"
        // while(initailValue==5){
        //     document.body.style.backgroundColor="red"
        // }
        if(initailValue==4){
            document.body.style.backgroundColor="red"
        } else if(initailValue==5){
             document.body.style.backgroundColor="blue"
        } else if(initailValue==6){
             document.body.style.backgroundColor="green"
        } else if(initailValue==7){
             document.body.style.backgroundColor="orange"
        } else if(initailValue==8){
             document.body.style.backgroundColor="yellow"
        
        }else{
               document.body.style.backgroundColor=""
        }
        
})

decreaseButton.addEventListener("click" , function(){
    initailValue--
    tasbih.innerHTML=initailValue
    if(initailValue==4){
        document.body.style.backgroundColor="red"
    } else if(initailValue==5){
         document.body.style.backgroundColor="blue"
    } else if(initailValue==6){
         document.body.style.backgroundColor="green"
    } else if(initailValue==7){
         document.body.style.backgroundColor="orange"
    } else if(initailValue==8){
         document.body.style.backgroundColor="yellow"
    
    }else{
           document.body.style.backgroundColor=""
    }
})

resetButton.addEventListener("click", function(){
    initailValue=0
    tasbih.innerHTML=initailValue
    // resetButton.style.backgroundColor="red"
    // increaseButton.style.backgroundColor=""
    // decreaseButton.style.backgroundColor=""
})
