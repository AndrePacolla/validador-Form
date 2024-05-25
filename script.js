let validator = {
    handleSubmit : (event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();

        for(let i=0; i< inputs.length; i++){
            let input = inputs[i]
            let check = validator.checkIpnut(input);
            if(check!== true){
                send = false
                validator.showError(input,check);
            }
        }

        if(send) {
            form.submit();
        }
    },

    checkIpnut: (input)=>{
        let rules = input.getAttribute('rules')
        if(rules !== null){
            let rule = rules.split('$')
            for(r in rule){
                let rDetails = rule[r].split('=')
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo vazio'
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
        }return true
    },
    showError: (input , error)=>{

        let errorElement = document.createElement('div');
        errorElement.classList.add('errorJs')
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.nextElementSibling)
        input.style.borderColor = 'orange'

    },

    clearErrors :()=>{
        let removeClass = document.querySelectorAll('.errorJs')
        for(let e=0; e<removeClass.length;e++){
            removeClass[e].remove();
        }

        let inputColor = form.querySelectorAll('input')
        for(let i=0; i<inputColor.length; i++){
            inputColor[i].style = ''
        }

    }
}



let form = document.querySelector('.formValidator');
form.addEventListener('submit',validator.handleSubmit)