let usuarios = [];
function CadastrarUsuario(nome, idade, email) {
    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    }
    const existe = usuarios.some(u => u.email === email);
    if (existe === true) {
        alert("Usuário já cadastrado");
    }
    else {
        usuarios.push(usuario);
        alert("Usuário cadastrado com sucesso");
    }
}
function ListarUsuarios() {
    const lista = usuarios.map(
        u => `Nome: ${u.nome} | Idade: ${u.idade} | Email: ${u.email}`
    );
    alert(lista.join("\n"));
}
function ExcluirUsuario(email) {
    const index = usuarios.findIndex(u => u.email === email);
    if (index !== -1) {
        usuarios.splice(index, 1);
        alert("Usuário excluído");

    }
    else {
        alert("Usuário não encontrado");

    }

}
function AtualizarUsuario(email, novoNome, novaIdade) {
    const usuario = usuarios.find(u => u.email === email);
    if (usuario) {
        usuario.nome = novoNome;
        usuario.idade = novaIdade;
        alert("Usuário atualizado")

    }
    else {
        alert("Não existe esse usuário");
    }
}
function Menu() {
    let opcao = "";
    do {
        opcao = prompt("Escolha uma opção:\n1 - Cadastrar usuário\n2 - Listar usuários\n3 - Excluir usuário\n4 - Atualizar usuário\n5 - Sair");
        switch (opcao) {
            case "1":
                const nome = prompt("Digite o nome do usuário: ");
                const idade = parseInt(prompt("Digite a idade do usuário: "));
                const email = prompt("Digite o email do usuário: ");
                CadastrarUsuario(nome, idade, email);
                break;

        
            case "2":
                ListarUsuarios();
                break;
            case "3":
                const emailExcluir = prompt("Digite o email do usuário que deseja excluir: ");
                ExcluirUsuario(emailExcluir);
                break;
            case "4":
                const emailAtualizar = prompt("Digite o email do usuário que deseja atualizar: ");
                const novoNome = prompt("Digite o nove nome do usuário: ");
                const novaIdade = parseInt(prompt("Digite a nova idade do usuário: "));
                AtualizarUsuario(emailAtualizar, novoNome, novaIdade);
                break;
            case "5":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida");
        }
    }while (opcao !== "5");
}
Menu();