Funcionalidade: Página de Calculadora de Benefícios (funcionário)
 Como um usuário do sistema
 Eu quero preencher meus dados pessoais e o número de dependentes
 Para que eu possa calcular meus benefícios

 Cenário: Abertura da página
    Dado que eu estou na página de calculadora de benefícios
    Então o campo de data de nascimento deve estar em branco
    E o campo de número de dependentes deve estar preenchido com 0

 Cenário: Preenchimento dos campos
    Dado que eu estou na página de calculadora de benefícios
    Quando eu preencho o campo de data de nascimento com uma data válida
    E eu preencho o campo de número de dependentes com um número inteiro
    Então os campos devem ser validados e aceitos

 Cenário: Validação de campos
    Dado que eu estou na página de calculadora de benefícios
    Quando eu preencho o campo de data de nascimento com uma data maior que a data atual
    Ou eu preencho o campo de número de dependentes com um valor negativo
    Então os campos devem ser marcados como inválidos

 Cenário: Cálculo de benefícios para idade entre 0 e 30 anos regra data de hoje menos 30 anos
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -30) (entre 0 e 30 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 0
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$1.000,00

 Cenário: Cálculo de benefícios para idade entre 0 e 30 anos com 2 dependentes
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -28) (entre 0 e 30 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 2
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$1.600,00

 Cenário: Cálculo de benefícios para idade entre 30 e 50 anos regra data de hoje menos 31 anos
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data  de (hoje -31 anos) (entre 31 e 50 anos) 
    E eu preencho o campo de número de dependentes com um número inteiro 0
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$1.500,00   

 Cenário: Cálculo de benefícios para idade entre 30 e 50 anos regra data de hoje menos 50 anos
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data  de (hoje -50 anos) (entre 31 e 50 anos) 
    E eu preencho o campo de número de dependentes com um número inteiro 0
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$1.500,00

 Cenário: Cálculo de benefícios para idade entre 30 e 50 anos com 2 dependentes
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -41) (entre 31 e 50 anos) 
    E eu preencho o campo de número de dependentes com um número inteiro 2
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$2.100,00  

 Cenário: Cálculo de benefícios para idade entre 50 e 70 anos regra data de hoje menos 51 anos
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -51 anos) (entre 51 e 70 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 0
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$2.000,00

 Cenário: Cálculo de benefícios para idade entre 50 e 70 anos regra data de hoje menos 70 anos
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -70 anos) (entre 51 e 70 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 0
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$2.000,00   

 Cenário: Cálculo de benefícios para idade entre 50 e 70 anos com 2 dependentes
    Dado que eu estou na página de calculadora de benefícios
    E eu preencho o campo de data de nascimento com uma data de (hoje -63) (entre 51 e 70 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 2
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$2.600,00  

 Cenário: Cálculo de benefícios para idade acima de 70 anos regra data de hoje menos 71 anos
    Dado que eu estou na página de calculadora de benefícios 
    E eu preencho o campo de data de nascimento com uma data de (hoje -71) (acima de 70 anos)
    E eu preencho o campo de número de dependentes com um número inteiro
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$3.000,00

 Cenário: Cálculo de benefícios para idade acima de 70 anos com 2 dependentes
    Dado que eu estou na página de calculadora de benefícios 
    E eu preencho o campo de data de nascimento com uma data de (hoje -74) (acima de 70 anos)
    E eu preencho o campo de número de dependentes com um número inteiro 2
    Quando eu clico no botão para calcular os benefícios
    Então o resultado do cálculo deve ser R$3.600,00  
