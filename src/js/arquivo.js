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
    criaCadastro(id, nome, dataNascimento, tel, email) {
        return new Cadastro(id, nome, dataNascimento, tel, email)
    }
}

// Se os dados de cadastro estiverem nulos um array vazio o criado
if (localStorage.getItem('arrayCadastro') == null) {
    localStorage.setItem('arrayCadastro', JSON.stringify([]))
}

// Adicionar evento de input para o campo de pesquisa
document.getElementById('search').addEventListener('input', function () {
    console.log("input search");
    const termoPesquisa = this.value.toLowerCase();
    const cadastros = getCadastros();

    // Filtra os cadastros que contêm o termo pesquisado no nome
    const cadastrosFiltrados = cadastros.filter(cadastro =>
        cadastro.nome.toLowerCase().includes(termoPesquisa)
    );

    // Atualiza a tabela com os resultados filtrados
    atualizaTabelaFiltrada(cadastrosFiltrados);
});

// Adiciona filtro para permitir apenas números no campo telefone
document.getElementById('telefone').addEventListener('input', function () {
    console.log("input telefone");
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Funções utilitárias para localStorage
function getCadastros() {
    console.log("getCadastros");
    const cadastrosJSON = localStorage.getItem('arrayCadastro')
    return JSON.parse(cadastrosJSON)
}

function saveCadastros(cadastros) {
    console.log("saveCadastros");
    const cadastrosJSON = JSON.stringify(cadastros)
    localStorage.setItem('arrayCadastro', cadastrosJSON)
}

// Deleta da memória um cadastro a partir do seu id
function excluiCadastro(id) {
    console.log("excluiCadastro");
    let cadastros = getCadastros()
    let linhaId = cadastros.findIndex((cadastro => cadastro.id === id))
    cadastros.splice(linhaId, 1)
    saveCadastros(cadastros)
    atualizaTabelaFiltrada(cadastros)
}



function adicionaCadastro() {
    console.log("adicionaCadastro");
    // Guarda as informações contindas no form quando o botão de salvar é clickado
    let nomeIn = document.getElementById('nome')
    let dataNascimentoIn = document.getElementById('dataNascimento')
    let telefoneIn = document.getElementById('telefone')
    let emailIn = document.getElementById('email')

    // Verifica se algum campo está vazio
    if (!nomeIn.value || !dataNascimentoIn.value || !telefoneIn.value || !emailIn.value) {
        alert('Por favor, preencha todos os campos!')
        return
    }

    // Verifica se o email contém @
    if (!emailIn.value.includes('@')) {
        alert('Por favor, insira um email válido com @!')
        return
    }

    // Dados recolhidos do LocalStorage e instanciação do Factory
    const cadastroFactory = new CadastroFactory
    let cadastrosJSON = localStorage.getItem('arrayCadastro')
    let cadastros = JSON.parse(cadastrosJSON)

    // Percorrer com a finalidade de achar o ID mais próximo de 1 que não está sendo usado para criar o próximo cadastro
    for (let i = 0; true; i++) {
        if (cadastros.length === 0 || cadastros[i] === undefined || i + 1 != Number(cadastros[i].id)) {
            //criação do cadastro no indice disponivel
            let cadastro = cadastroFactory.criaCadastro(i + 1, nomeIn.value, dataNascimentoIn.value, telefoneIn.value, emailIn.value)
            cadastros.splice(i, 0, cadastro)
            break
        }
    }

    // Devolução dos dados atualizados com a adição
    saveCadastros(cadastros)

    // Deixa as entradas do formulario em Branco
    nomeIn.value = ''
    dataNascimentoIn.value = ''
    telefoneIn.value = ''
    emailIn.value = ''

    //Fecha o modal de adição e atualiza a tabela no html
    fecharModal()
    atualizaTabelaFiltrada(cadastros)
}


function popularLocalStorage() {
    console.log("popularLocalStorage");
    const cadastrosIniciais = [
        { id: 1, nome: 'João Silva', dataNascimento: '1990-01-01', tel: '123456789', email: 'joao@email.com' },
        { id: 2, nome: 'Maria Souza', dataNascimento: '1985-05-15', tel: '987654321', email: 'maria@email.com' },
        { id: 3, nome: 'Ana Pereira', dataNascimento: '1993-08-12', tel: '1122334455', email: 'ana.pereira@email.com' },
        { id: 4, nome: 'Carlos Lima', dataNascimento: '1988-11-23', tel: '2233445566', email: 'carlos.lima@email.com' },
        { id: 5, nome: 'Fernanda Oliveira', dataNascimento: '1992-02-19', tel: '3344556677', email: 'fernanda.oliveira@email.com' },
        { id: 6, nome: 'Ricardo Santos', dataNascimento: '1995-07-30', tel: '4455667788', email: 'ricardo.santos@email.com' },
        { id: 7, nome: 'Juliana Alves', dataNascimento: '1990-03-05', tel: '5566778899', email: 'juliana.alves@email.com' },
        { id: 8, nome: 'Paulo Vieira', dataNascimento: '1983-12-15', tel: '6677889900', email: 'paulo.vieira@email.com' },
        { id: 9, nome: 'Bianca Rocha', dataNascimento: '1998-09-27', tel: '7788990011', email: 'bianca.rocha@email.com' },
        { id: 10, nome: 'Felipe Mendes', dataNascimento: '1987-04-08', tel: '8899001122', email: 'felipe.mendes@email.com' },
        { id: 11, nome: 'Mariana Costa', dataNascimento: '1996-06-17', tel: '9900112233', email: 'mariana.costa@email.com' },
        { id: 12, nome: 'Lucas Martins', dataNascimento: '1994-10-21', tel: '1011121314', email: 'lucas.martins@email.com' },
        { id: 13, nome: 'Gabriela Farias', dataNascimento: '1991-01-30', tel: '1213141516', email: 'gabriela.farias@email.com' },
        { id: 14, nome: 'Rafael Ferreira', dataNascimento: '1989-08-11', tel: '1314151617', email: 'rafael.ferreira@email.com' },
        { id: 15, nome: 'Tatiana Moraes', dataNascimento: '1997-03-13', tel: '1415161718', email: 'tatiana.moraes@email.com' },
        { id: 16, nome: 'Diego Ramos', dataNascimento: '1986-05-20', tel: '1516171819', email: 'diego.ramos@email.com' },
        { id: 17, nome: 'Camila Borges', dataNascimento: '1999-11-05', tel: '1617181920', email: 'camila.borges@email.com' },
        { id: 18, nome: 'Vinícius Teixeira', dataNascimento: '1992-02-28', tel: '1718192021', email: 'vinicius.teixeira@email.com' },
        { id: 19, nome: 'Patrícia Lopes', dataNascimento: '1984-07-09', tel: '1819202122', email: 'patricia.lopes@email.com' },
        { id: 20, nome: 'Roberto Silva', dataNascimento: '1990-10-25', tel: '1920212223', email: 'roberto.silva@email.com' },
        { id: 21, nome: 'Larissa Cunha', dataNascimento: '1993-06-06', tel: '2021222324', email: 'larissa.cunha@email.com' },
        { id: 22, nome: 'André Carvalho', dataNascimento: '1985-04-14', tel: '2122232425', email: 'andre.carvalho@email.com' }
    ];
    let cadastros = getCadastros()

    // Verifica se já existem cadastros com IDs de 1 a 22
    let idsExistentes = cadastros.map(c => c.id);

    for (let i = 1; i <= 22; i++) {
        if (!idsExistentes.includes(i)) {
            cadastros.push(new CadastroFactory().criaCadastro(
                cadastrosIniciais[i-1].id,
                cadastrosIniciais[i-1].nome,
                cadastrosIniciais[i-1].dataNascimento,
                cadastrosIniciais[i-1].tel,
                cadastrosIniciais[i-1].email
            ));
        }
    }

    saveCadastros(cadastros)
}

// Função para atualizar a tabela com os resultados filtrados
function atualizaTabelaFiltrada(cadastrosFiltrados) {
    console.log("atualizaTabelaFiltrada");
    let tabela = document.getElementById('Cadastros');
    let tbody = tabela.tBodies[0];

    // Limpa a tabela atual
    while (tbody.rows.length > 0) {
        tabela.deleteRow(0);
    }

    // Adiciona as linhas filtradas
    cadastrosFiltrados.forEach(cadastro => {
        let novaLinha = tabela.insertRow();

        // Adiciona as células com os dados
        let nomeCel = novaLinha.insertCell();
        nomeCel.textContent = cadastro.nome;
        let dataNascimentoCel = novaLinha.insertCell();
        dataNascimentoCel.textContent = cadastro.dataNascimento;
        let telCel = novaLinha.insertCell();
        telCel.textContent = cadastro.tel;
        let emailCel = novaLinha.insertCell();
        emailCel.textContent = cadastro.email;

        // Adiciona o botão de excluir
        let excluirCel = novaLinha.insertCell();
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add("btn", "btn-delete");
        botaoExcluir.onclick = function () {
            excluiCadastro(cadastro.id);
        };
        excluirCel.appendChild(botaoExcluir);
    });
}

function fecharModal() {
    console.log("fecharModal");
    document.getElementById('modal').style.display = 'none'
}

popularLocalStorage() // coloca 22 linhas de teste e sobrescreve as demais (apaga tudo e coloca novas 22 linhas)
atualizaTabelaFiltrada(getCadastros()) // remove as linhas da tabela e popula de acordo com os objetos no localstorage.
