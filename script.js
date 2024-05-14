let validator = {
    handleSubmit : (event)=>{
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

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

   }


}


let form  = document.querySelector('.formValidator');
form.addEventListener('submit',validator.handleSubmit)