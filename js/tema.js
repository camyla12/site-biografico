// TEMA (claro ou escuro) - parte 1: lembrar a escolha.
// localStorage é uma "gaveta" do navegador onde o site guarda informações pequenas.
// Aqui perguntamos: "você guardou um tema antes?" (getItem('tema')).
// Se sim, usamos o guardado. Se não (||), usamos 'light', o claro, como padrão.
// Depois colocamos o resultado em data-theme na página, e o CSS troca as cores.
// Este arquivo roda ANTES da página aparecer, para ela já nascer no tema certo, sem piscar.
document.documentElement.dataset.theme = localStorage.getItem('tema') || 'light';
