// Aplica o tema salvo antes da página aparecer (evita piscar). O claro é o padrão.
document.documentElement.dataset.theme = localStorage.getItem('tema') || 'light';
