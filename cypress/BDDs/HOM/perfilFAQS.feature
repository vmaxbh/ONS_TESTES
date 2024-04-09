Funcionalidade: Restrições por perfil
 Como um usuário da ponta (funcionário)
 Eu não devo ter acesso às funcionalidades de criação, edição ou exclusão de FAQs
 Para garantir a segurança das informações e a integridade do sistema

 Cenário: Acesso restrito à criação de FAQs
    Dado que eu estou logado como usuário da ponta
    Quando eu tento acessar a página de criação de FAQs
    Então eu devo ser redirecionado para uma página de acesso negado

 Cenário: Acesso restrito à edição de FAQs
    Dado que eu estou logado como usuário da ponta
    Quando eu tento editar uma FAQ existente
    Então eu devo ser redirecionado para uma página de acesso negado

 Cenário: Acesso restrito à exclusão de FAQs
    Dado que eu estou logado como usuário da ponta
    Quando eu tento excluir uma FAQ existente
    Então eu devo ser redirecionado para uma página de acesso negado    