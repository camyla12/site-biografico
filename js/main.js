// PROGRAMA PRINCIPAL DO SITE (JavaScript).
// O HTML mostra o conteúdo, o CSS deixa bonito, e o JavaScript faz o site REAGIR e MONTAR coisas.
// Aqui temos 4 tarefas: (1) trocar o tema, (2) abrir o menu no celular,
// (3) montar a lista de habilidades e de projetos, (4) colocar o ano no rodapé.
// Vocabulário: "const" cria um nome para guardar algo; "document.getElementById('x')"
// encontra o elemento da página que tem id="x"; "=>" ( seta ) cria uma pequena função.

// ---------- 1) Botão de tema (claro/escuro) ----------
// A escolha fica salva no navegador (localStorage), para o site lembrar na próxima visita.
const raiz = document.documentElement;      // "raiz" = a página inteira
document.getElementById('tema').addEventListener('click', () => {
  // addEventListener('click', ...) significa: "quando clicarem neste botão, faça isto:"
  const novo = raiz.dataset.theme === 'dark' ? 'light' : 'dark'; // se está escuro, vira claro; se não, vira escuro
  raiz.dataset.theme = novo;                // o CSS enxerga essa mudança e troca todas as cores
  localStorage.setItem('tema', novo);       // guarda a escolha na "gaveta" do navegador
});

// ---------- 2) Menu do celular ----------
const menu = document.getElementById('menu');   // o botão de 3 tracinhos
const nav = document.getElementById('nav');     // a lista de links
menu.addEventListener('click', () => {
  // toggle liga/desliga a classe "aberto". No CSS, nav.aberto faz o menu aparecer.
  menu.setAttribute('aria-expanded', nav.classList.toggle('aberto'));
});
nav.addEventListener('click', e => {
  // Quando clicam em um link do menu, fechamos o menu (e.target é o que foi clicado).
  if (e.target.tagName === 'A') { nav.classList.remove('aberto'); menu.setAttribute('aria-expanded', 'false'); }
});

// ---------- 3) Habilidades ----------
// "habilidades" vem do arquivo data.js. O .map() passa por CADA grupo da lista e cria um pedaço de HTML.
// O ${...} coloca dentro do texto o valor que queremos (o nome do grupo, cada item...).
// .join('') junta tudo, e innerHTML despeja o resultado dentro da div id="lista-habilidades".
document.getElementById('lista-habilidades').innerHTML = habilidades.map(g => `
  <div><h3>${g.grupo}</h3><ul>${g.itens.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('');

// ---------- Projetos ----------
// Mesma ideia: para CADA projeto da lista (data.js), monta um card com título, descrição e tags.
// O "p.link ? ... : ''" quer dizer: se o projeto tem link, mostra o botão "Ver projeto"; se não tem, não mostra nada.
document.getElementById('lista-projetos').innerHTML = projetos.map(p => `
  <article class="projeto">
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Ver projeto</a>` : ''}
  </article>`).join('');

// ---------- 4) Ano do rodapé ----------
// Pega o ano atual do computador e escreve no rodapé. Assim nunca precisa atualizar à mão.
document.getElementById('ano').textContent = new Date().getFullYear();
