let validator = {
    handleSubmit : (event)=>{
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i = 0; i < inputs.length; i++ ){
            let input = inputs[i]
         //pegando cada campo input , preciso saber se neles há regras, coloco uma function para verificar essas condiçoes, no parametro coloco input , para verificar cada entrada , se retorno da minha função for false ,vai dar error , send recebe false para nao ser possivel o envio do meu formulario
            let check = validator.checkInput(input);
            if(check !== true){
                send = false;
                console.log(check)
            } 
        }
        if(send){
            form.submit()
        };
    },
    checkInput : (input)=>{
        // essa funcao vai verificar se detecta alguma regra nos inputs
        // if rules for diferente de null, quer dizer que tem uma regra ali
        //se tem mais de uma regra preciso separa-las com split , criando 2 arrays
        // dps uso for para verificar cada uma das regras na inteção de separar a regra do segundo array para que cada regra se torne array na posição zero ...
        // para q exista 2 arrays , switch case na posicao [0] verificando cada uma das regras!

        let rules = input.getAttribute('rules');
        if(rules !== null){
            rules = rules.split('$');
            for(let r in rules){
                let rDetails = rules[r].split('=')

            switch(rDetails[0]){
                 case 'required':
                     if(input.value ==''){
                        return 'Campo nao pode ser vazio'
                        }
                    break;
              
                }
            }
        
            

        }else{
            return true; // passa pelo campo sem  regra ,quer dizer que esta tudo certo
        }

    }

}






let form  = document.querySelector('.validator');
form.addEventListener('submit',validator.handleSubmit)
