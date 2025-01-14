# Avaliação Sprint 1 - Programa de Bolsas Compass UOL  AWS - turma janeiro/2025

Avaliação da primeira sprint do programa de bolsas Compass UOL para formação em Inteligência Artificial para AWS.

***

# Sistema em JavaScript para armazenamento de dados cadastrais.

***

## Processo de Desenvolvimento

Utilizei ferramentas de inteligência artificial generativa, como o ChatGPT, para desenvolver um protótipo inicial da tela da aplicação. Após isso, realizei ajustes para personalizá-la de acordo com minhas preferências

Para implementar as funções de Adição, Remoção e Atualização na tabela, utilizei um array obtido do ```LocalStorage```, que é atualizado e enviado de volta ao ```LocalStorage``` após as alterações nos dados.

A lógica por trás dessas funções baseia-se na manipulação de arrays e em interações diretas com os elementos do HTML.

O ChatGPT também foi utilizado para gerar uma população inicial da tabela (hard coded), permitindo a realização de testes nas funcionalidades.

***

## Dificuldades Conhecidas

Minha pouca experiência com JavaScript e o hábito de trabalhar com linguagens tipadas evidenciaram dificuldades em lidar com erros inesperados, até mesmo a ausência deles.

A utilização de um "banco de dados" não relacional (LocalStorage) expõe desafios que normalmente seriam resolvidos por SGBDs convencionais.

***

## Utilizando o Sistema

### Baixando o sistema

1. Para baixar o sistema utilize o git clone dessa forma: 

```
git clone https://github.com/Compass-pb-aws-2025-06-JANEIRO/sprint-1-pb-aws-janeiro.git
```

2. Após clonar o repositório selecione a branch ```diogo-valongo``` com o seguinte comando:

```
git checkout diogo-valongo
```

3. Para acessar o sistema, abra o arquivo  ```index.html``` com seu navegador favorito. O arquivo pode ser encontrado em 
```sprint-1-pb-aws-janeiro\src\html```

### Navegando no sistema

Uma vez que estamos no ```index.html``` podemos realizar algumas ações:

* **Criando cadastros**: Para criar um novo cadastro basta clickar no botão ```Adicionar Cadastro```, após isso basta preencher os dados e clickar em ```Salvar```.

* **Consultando cadastros**: Para consultar os cadatros no sistema é possível buscas manualmente um cadastro na tabela do ```index.html```, alternativamente também pode se usar a barra de pesquisa de nomes caso queira buscar algum nome específico.

* **Deletando cadastros**: Para deletar um cadastro basta clickar no botão ```Excluir``` na linha que deve ser excluída.



***

## Autor

* Diogo Valongo da Fonseca Santos ([```diogo-valongo```](https://github.com/diogo-valongo))