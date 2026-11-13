function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}


function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl('#titulo-filme', 'elemento-selecionado');
    hl('#filme-principal', 'elemento-selecionado');

}

function selecionarPorClasse() { 


const elementos = document.getElementsByClassName("genero-acao");

console.log("Quantidade:", elementos.length);

for (let i = 0; i < elementos.length; i++) {
    console.log(i, elementos[i].textContent.trim());
}

    hl('.genero-acao',  'highlight-acao',  2500);
    hl('.genero-drama', 'highlight-acao', 2500);
}


function selecionarPorQuery () {

    const elemento = document.querySelector(".filme-mini");

    console.log(elemento);

  hl(elemento, 'elemento-selecionado');
}

function selecionarTodos() {
    const elementos = document.querySelectorAll(".filme-mini");

    console.log("quantidade:", elementos.length);

    elementos.forEach((el, indice)=> {
    console.log(indice, el.textContent.trim());
    });

    elementos.forEach((el, i) => hl(el, 'elemento-selecionado', 2500, i * 300));
}

function mudarTexto() {

    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = "Lobo solitário: A história de um herói improvável";

    console.log("Novo texto", titulo.textContent);

    titulo.classList.add("texto-animado");
    
    setTimeout(() => titulo.classList.remove('texto-animado'), 1500);
    hl('#titulo-destaque', 'elemento-selecionado', 2000);
}

function adicionarBadge() {
    const badge = document.createElement("span");

    const container = document.getElementById("badge-container");

    container.innerHTML = "";

    badge.className = "badge";

    badge.textContent = "⭐ Em Alta";

    document.getElementById("badge-container").appendChild(badge);

    console.log("badge criado", badge);
}

function mudarPoster () {
    const poster = document.getElementById("poster-destaque");
    
    const titulo = document.getElementById("titulo-destaque");

    const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ];

    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

    poster.src = sorteado.url;
    poster.alt = sorteado.nome;
    titulo.textContent = sorteado.nome;

    console.log("poster trocado para:", sorteado.nome);

    poster.style.opacity = "0";

    poster.style.transition = "opacity 0.3s";
    setTimeout(() => {
        
    poster.style.opacity = "1";
    }, 300);

    poster.classList.add("poster-fade-in");

    setTimeout(() => {
        
        poster.classList.remove("poster-fade-in"),
        600

    }, 300);
}

  function adicionarDestaque () {

    const card = document.getElementById ("filme-destaque");

    card.classList.add("destaque");

    console.log("classes atuais:", card.className);

    setTimeout(() => {
        card.classList.remove("destaque");
        console.log("destaque-removido!");
    }, 3000);
}

function lerInput() {
 
    const input = document.getElementById("input-busca");

    console.log(input);

    const texto = input.value.trim();

    if (texto === "") {
        alert("TA VAZIO MEU FILHO!");
        return;
    }

    const titulo = document.getElementById('titulo-destaque');

    titulo.textContent = texto;

    console.log ("Valor lido", texto);
    
    console.log("Caracteres:", texto.length);

    titulo.classlist.add("texto-animado");

    setTimeout(() => titulo.classList.remove("texto-animado"), 1500);

    
    hl(
        '#input-busca',          // elemento
        'elemento-selecionado', // classe CSS
        1500                    // duração
    );
}