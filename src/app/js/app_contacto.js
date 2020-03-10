//restringir el tamaño del largo del texto 
var input=  document.getElementById('phone');
input.addEventListener('input',function(){
  if (this.value.length > 15) 
     this.value = this.value.slice(0,15); 
});

var form = $('#person-form');
$(form).submit(function(event){
     var data = objectifyForm($(this).serializeArray());

    if(!data.name || !data.email || !data.phone || !data.message){
        alert('Verificar los datos');
        event.preventDefault();
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../../email_contacto.php',
            data: data,
            dataType: 'json',
            // success: function(data){
            //     $(from).get(0).reset();
            //     alert('Correo enviado');
            // },
            // error: function (){
            //     console.log('error')
            // }
        })
        event.preventDefault();
        $(this).get(0).reset();
    }
    
});

function objectifyForm(formArray) {//serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}
