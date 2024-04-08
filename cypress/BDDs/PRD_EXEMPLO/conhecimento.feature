Funcionalidade: Acesso e filtragem de conhecimentos
 Como um usuário do sistema
 Eu quero acessar a aba de conhecimentos e filtrar os resultados
 Para que eu possa encontrar informações específicas de forma eficiente

 Cenário: Acessar e filtrar conhecimentos manuais
    Dado que eu estou na página inicial
    Quando eu clico na aba "Conhecimento"
    E eu seleciono o filtro "Institucional"
    E eu seleciono o filtro "Manuais"
    E eu digito "Sistema de Gerenciamento de Incidentes - OTRS" no campo de pesquisa
    Então eu devo ver o manual "Sistema de Gerenciamento de Incidentes - OTRS" listado

 Cenário: Acessar e filtrar conhecimentos contábeis
    Dado que eu estou na página inicial
    Quando eu clico na aba "Conhecimento"
    E eu seleciono o filtro "Apuração e Contabilização"
    Então eu devo ver o documento "Apuração dos Encargos de Fronteira" listado