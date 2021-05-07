var btnSubmit = document.getElementById("btnSubmit");





btnSubmit.addEventListener('click', () =>{
    let name = document.getElementById("inputName4");
    let cpf = document.getElementById("inputCpf4");
    let phone = document.getElementById("inputPhone4");
    
    
    if((!name.value || !cpf.value) || !phone.value){
       
      

       name.style.borderColor = "red";
       cpf.style.borderColor = "red";
       phone.style.borderColor = "red";
       alert("Você esqueceu de preencher alguns campos:\nNome, \nCPF ou\nTelefone");
     
       
        
    }
    
    
    })









   
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.

        
        $("#inputAddress").val("");
        $("#inputAddress2").val("");
        $("#inputCity").val("");
        $("#inputCountry").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#inputCEP").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#inputAddress").val("...");
                $("#inputAddress2").val("...");
                $("#inputCity").val("...");
                $("#inputCountry").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#inputAddress").val(dados.logradouro);
                        $("#inputAddress2").val(dados.bairro);
                        $("#inputCity").val(dados.localidade);
                        $("#inputCountry").val(dados.uf);
                        
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
              
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
        }
    });
