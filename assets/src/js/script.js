//Criando a classe:
class Inscrito {
    constructor(nome,email,telefone,cidade) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.cidade = cidade
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

//Pegar dados do formulário pelo ID:
function cadastrarInscrito() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cidade = document.getElementById('cidade').value
    
    let novoInscrito = new Inscrito(
        nome,
        email,
        telefone,
        cidade
    )

    //Validar os dados:
    if (novoInscrito.validarDados()) {
        
        //modal true
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso!'
        document.getElementById('modal_conteudo').innerHTML = 'Inscrição realizada com sucesso!'
        document.getElementById('modal_botao').className = 'btn btn-success'
        document.getElementById('modal_botao').innerHTML = 'Voltar'

        $('#modalCadastrarInscrito').modal('show')

        // Gravar só se for válido
        dados.gravar(novoInscrito)

        // Limpar formulário
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('cidade').value = '';

    } else {
        //modal false
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_titulo').innerHTML = 'Erro na gravação!'
        document.getElementById('modal_conteudo').innerHTML = 'Existem campos inválidos!'
        document.getElementById('modal_botao').className = 'btn btn-danger'
        document.getElementById('modal_botao').innerHTML = 'Voltar e corrigir'

        $('#modalCadastrarInscrito').modal('show')
    }
}

//Criando classe Dados para salvar em LocalStorage:
class Dados {
    constructor() {
        let id = localStorage.getItem('id') // Pega o último ID salvo no localStorage

        if (id === null) { // Se não houver nenhum ID, inicializa com 0
            localStorage.setItem('id', 0) 
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id') // null
        return parseInt(proximoId) + 1
    }

    gravar(i) { // i recebe o valor de 'novoInscrito' passado de fora, mesmo que a função não tenha acesso à variável local
        let id = this.getProximoId() // gera o próximo ID

        localStorage.setItem(id, JSON.stringify(i)) // Salva o objeto no localStorage (aqui está salvando sempre na mesma chave 'novoId', sobrescrevendo)

        localStorage.setItem('id', id) // Atualiza o ID no localStorage
    }   
}

let dados = new Dados()


function carregarInscritos() {
    console.log('iniciou') 
}




