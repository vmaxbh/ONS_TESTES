Funcionalidade: Login no sistema
 Como um usuário do sistema
 Eu quero poder me autenticar com sucesso
 Para que eu possa acessar as funcionalidades protegidas

 Cenário: Login com sucesso
    Dado que eu estou na página de login
    Quando eu preencho o campo de usuário com o valor do ambiente "USERNAME"
    E eu preencho o campo de senha com o valor do ambiente "PASSWORD"
    E eu clico no botão de submit
    Então eu devo ver o nome "Maxwell Madureira Viana" na tela inicial

 Cenário: Login com usuário inválido
    Dado que eu estou na página de login
    Quando eu preencho o campo de usuário com "usuario@invalido.com"
    E eu preencho o campo de senha com o valor do ambiente "PASSWORD"
    E eu clico no botão de submit
    Então eu devo ver a mensagem de erro "Sua tentativa de acesso não obteve sucesso. Por favor tente novamente."

 Cenário: Login com senha inválida
    Dado que eu estou na página de login
    Quando eu preencho o campo de usuário com o valor do ambiente "USERNAME"
    E eu preencho o campo de senha com "123456"
    E eu clico no botão de submit
    Então eu devo ver a mensagem de erro "Sua tentativa de acesso não obteve sucesso. Por favor tente novamente."