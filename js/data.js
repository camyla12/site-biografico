// ARQUIVO DE DADOS: aqui ficam as listas de habilidades e de projetos.
// Para mudar o que aparece no site nessas duas seções, edite SÓ este arquivo.
// O js/main.js lê estas listas e monta os cards na página sozinho.
//
// COMO LER ISTO:
// - [ ] colchetes = uma LISTA (vários itens, separados por vírgula)
// - { } chaves = um ITEM com várias informações, no formato nome: valor
// - "texto" = o que está entre aspas é texto. Não esqueça de fechar as aspas!
// - Cada item da lista termina com vírgula, menos o último.
// - Linhas que começam com // são comentários: o computador ignora.

const habilidades = [
  // Cada { } abaixo é um GRUPO de habilidades: tem um nome (grupo) e uma lista (itens).
  // Ajuste a lista abaixo para o que você realmente estuda/sabe
  { grupo: "Em estudo na faculdade", itens: ["Lógica de programação", "Algoritmos", "HTML", "CSS", "JavaScript"] },
  // Sugestões: deixe só as que combinam com você
  { grupo: "Competências pessoais", itens: ["Aprendizagem rápida", "Organização", "Comunicação", "Proatividade", "Trabalho em equipe"] },
  { grupo: "Idiomas", itens: ["Português (nativo)", "Inglês (básico)"] }
];

const projetos = [
  // Cada { } abaixo é um PROJETO (vira um card). Para adicionar outro:
  // 1) copie o bloco inteiro, de { até }
  // 2) coloque uma vírgula depois do bloco anterior
  // 3) troque os textos
  {
    titulo: "Site biográfico",                      // nome do projeto
    descricao: "Este portfólio pessoal, feito com HTML, CSS e JavaScript.", // frase explicando
    tags: ["HTML", "CSS", "JavaScript"],            // tecnologias usadas
    link: "https://github.com/camyla12"   // troque pelo link do repositório deste site, quando criar
  }
];
