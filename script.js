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

            case 'min':
                if(input.value.length < rDetails[1]){
                    return `Campo tem que ter pelo menos ${rDetails[1]} caracteres`
                }

                break;    
            case 'e-mail':
                if(input.value !==''){
                 let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!regex.test(input.value.toLowerCase())){
                    return 'E-mail digitado não é valido !' ;
                }
                } 
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
    errorElement.innerHTML = error ;

    input.parentElement.insertBefore(errorElement,input.ElementSibling)
   },
   clearErrors :()=>{

   let errorsElement = document.querySelectorAll('.errorJs');
        for(let e = 0; e < errorsElement.length; e++){
            errorsElement[e].remove();
        }
   let errorsBorder = form.querySelectorAll('input');
        for(let b =0; b < errorsBorder.length; b++){
            errorsBorder[b].style.borderColor =''
        }
   }


}


let form  = document.querySelector('.formValidator');
form.addEventListener('submit',validator.handleSubmit)