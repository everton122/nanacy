    // script whatsapp


    $(document).ready(function(){
        $(".contatoWpp").on("click",function(){
    
          var telefone = "11930225630";
          if(telefone) {
              telefone = telefone.replace(/\D/g,'');
              telefone = "+55" + telefone;
              window.open('https://api.whatsapp.com/send?phone='+telefone+"&text=Olá, tenho uma dúvida!", '_blank');
          }
        });
      });