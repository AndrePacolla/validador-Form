let validator = {
    handleSubmit : (event)=>{
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();

        for(let i = 0; i < inputs.length; i++ ){
            let input = inputs[i]
    
            let check = validator.checkInput(input);
            if(check !== true){
                send = false;
                validator.showError(input , check)
            } 
        }
        if(send){
            form.submit()
        };
    },
    checkInput : (input)=>{

        let rules = input.getAttribute('rules');
        if(rules !== null){
            rules = rules.split('$');
            for(let r in rules){
                let rDetails = rules[r].split('=')

            switch(rDetails[0]){
            case 'required':
                if(input.value ==''){
                return 'Campo nao pode estar vazio !' 
                }
                break;  

            case 'min' :

                break;          
            }
        }

        }
         return true; 
   },
   showError :(input, error) =>{
    input.style.borderColor = 'red';
    
    let errorElement= document.createElement('div');
    errorElement.classList.add('errorJs'); // style css
    errorElement.innerHTML = error ; // manipulando html

    input.parentElement.insertBefore(errorElement,input.ElementSibling) //  localiza-se  elemento do parente mais prox. no caso a LABEL . Dps  insere a div que criei dps do input , para ter efeito em tela vizualizado
   },
   clearErrors :(input)=>{

    let borders = form.querySelectorAll('input');
    for(let b = 0; b < borders.length; b++ ){
        borders[b].style.borderColor = ''
    };


    let errorElements = document.querySelectorAll('.errorJs');

    for(let r = 0; r < errorElements.length; r++){
        errorElements[r].remove()
    };

   }


}


let form  = document.querySelector('.formValidator');
form.addEventListener('submit',validator.handleSubmit)