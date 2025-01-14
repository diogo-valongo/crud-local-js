class Cadastro {
    constructor(id, nome, dataNascimento, tel, email) {
        this.id = id
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.tel = tel
        this.email = email
    }
}

class CadastroFactory {
    criaCadastro(id, nome, dataNascimento, tel, email){
        return new Cadastro(id, nome, dataNascimento, tel, email)
    }
}

// Se os dados de cadastro estiverem nulos um array vazio o criado
if(localStorage.getItem('arrayCadastro') == null ){
    localStorage.setItem('arrayCadastro', JSON.stringify([]))
}

// Deleta da memória um cadastro a partir do seu id
function excluiCadastro(id){
    let cadastrosJSON = localStorage.getItem('arrayCadastro')
    let cadastros = JSON.parse(cadastrosJSON)
    let linhaId = cadastros.findIndex((cadastro => cadastro.id === id))
    cadastros.splice(linhaId, 1)
    cadastrosJSON = JSON.stringify(cadastros)
    localStorage.setItem('arrayCadastro', cadastrosJSON)
    carregaTebela()
}

function adicionaCadastro(){
    // Guarda as informações contindas no form quando o botão de salvar é clickado
    let nomeIn = document.getElementById('nome')
    let dataNascimentoIn = document.getElementById('dataNascimento')
    let telefoneIn = document.getElementById('telefone')
    let emailIn = document.getElementById('email')
    
    // Dados recolhidos do LocalStorage e instanciação do Factory
    const cadastroFactory = new CadastroFactory
    let cadastrosJSON = localStorage.getItem('arrayCadastro')
    let cadastros = JSON.parse(cadastrosJSON)    
    
    // Percorrer com a finalidade de achar o ID mais próximo de 1 que não está sendo usado para criar o próximo cadastro
    for (let i = 0; true; i++) {
        if (cadastros.length === 0 ||cadastros[i] === undefined|| i + 1 != Number(cadastros[i].id)){
            //criação do cadastro no indice disponivel
            let cadastro = cadastroFactory.criaCadastro(i+1, nomeIn.value, dataNascimentoIn.value, telefoneIn.value, emailIn.value)
            cadastros.splice(i, 0,cadastro)
            break
        }
    }

    // Devolução dos dados atualizados com a adição
    cadastrosJSON = JSON.stringify(cadastros)
    localStorage.setItem('arrayCadastro', cadastrosJSON)

    // Deixa as entradas do formulario em Branco
    nomeIn.value = ''
    dataNascimentoIn.value = ''
    telefoneIn.value = ''
    emailIn.value = ''

    //Fecha o modal de adição e atualiza a tabela no html
    fecharModal()
    carregaTebela()
}

// Atualiza a tabela no html
function carregaTebela(){
    // Carrega dos dados do localStorage
    let cadastrosJSON = localStorage.getItem('arrayCadastro')
    let cadastros = JSON.parse(cadastrosJSON)

    // Deleta a tabela atual
    let tabela = document.getElementById('Cadastros')
    let linhas = tabela.tBodies[0].rows
    while (linhas.length > 0) {
        tabela.deleteRow(0);
    }

    // Para cada cadastro em memória se cria uma linha nova na tabela com o botão para exclusão
    cadastros.forEach(cadastro => {
        let novaLinha = tabela.insertRow()
        let nomeCel = novaLinha.insertCell()
        nomeCel.textContent = cadastro.nome
        let dataNascimentoCel = novaLinha.insertCell()
        dataNascimentoCel.textContent = cadastro.dataNascimento
        let telCel = novaLinha.insertCell()
        telCel.textContent = cadastro.tel
        let emailCel = novaLinha.insertCell()
        emailCel.textContent = cadastro.email
        
        let excluirCel = novaLinha.insertCell()
    
        
        let botaoExcluir = document.createElement('button')
        botaoExcluir.textContent = 'Excluir'        
        botaoExcluir.classList.add("btn", "btn-delete")
        botaoExcluir.onclick = function() {
            excluiCadastro(cadastro.id) // botão passa o id do seu respectivo cadastro para a função de deleção
        }
        excluirCel.appendChild(botaoExcluir)
    })
    
}   

function popularLocalStorage() {
    const cadastros = [];
  
    // Criando alguns cadastros de exemplo
    cadastros.push(new CadastroFactory().criaCadastro(1, 'João Silva', '1990-01-01', '123456789', 'joao@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(2, 'Maria Souza', '1985-05-15', '987654321', 'maria@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(3, 'Ana Pereira', '1993-08-12', '1122334455', 'ana.pereira@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(4, 'Carlos Lima', '1988-11-23', '2233445566', 'carlos.lima@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(5, 'Fernanda Oliveira', '1992-02-19', '3344556677', 'fernanda.oliveira@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(6, 'Ricardo Santos', '1995-07-30', '4455667788', 'ricardo.santos@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(7, 'Juliana Alves', '1990-03-05', '5566778899', 'juliana.alves@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(8, 'Paulo Vieira', '1983-12-15', '6677889900', 'paulo.vieira@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(9, 'Bianca Rocha', '1998-09-27', '7788990011', 'bianca.rocha@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(10, 'Felipe Mendes', '1987-04-08', '8899001122', 'felipe.mendes@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(11, 'Mariana Costa', '1996-06-17', '9900112233', 'mariana.costa@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(12, 'Lucas Martins', '1994-10-21', '1011121314', 'lucas.martins@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(13, 'Gabriela Farias', '1991-01-30', '1213141516', 'gabriela.farias@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(14, 'Rafael Ferreira', '1989-08-11', '1314151617', 'rafael.ferreira@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(15, 'Tatiana Moraes', '1997-03-13', '1415161718', 'tatiana.moraes@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(16, 'Diego Ramos', '1986-05-20', '1516171819', 'diego.ramos@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(17, 'Camila Borges', '1999-11-05', '1617181920', 'camila.borges@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(18, 'Vinícius Teixeira', '1992-02-28', '1718192021', 'vinicius.teixeira@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(19, 'Patrícia Lopes', '1984-07-09', '1819202122', 'patricia.lopes@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(20, 'Roberto Silva', '1990-10-25', '1920212223', 'roberto.silva@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(21, 'Larissa Cunha', '1993-06-06', '2021222324', 'larissa.cunha@email.com'));
    cadastros.push(new CadastroFactory().criaCadastro(22, 'André Carvalho', '1985-04-14', '2122232425', 'andre.carvalho@email.com'));


    localStorage.setItem('arrayCadastro', JSON.stringify(cadastros));
}
  


  popularLocalStorage() // coloca 22 linhas de teste e sobrescreve as demais (apaga tudo e coloca novas 22 linhas)
  carregaTebela() // remove as linhas da tabela e popula de acordo com os objetos no localstorage.
  

function fecharModal() {
    document.getElementById('modal').style.display='none'
}