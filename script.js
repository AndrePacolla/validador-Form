let validator = {
    handleSubmit: (event)=>{
        event.preventDefault();

        let send = true;



        if(send){
            form.submit();
        }
    }

};





let form = document.querySelector('.validator');
form.addEventListener('submit',validator.handleSubmit)