let audios = [
    {caminho:"../audios-ratinho/ratinho.mp3", legenda:"Ratinho"},
    {caminho:"../audios-ratinho/uepa.mp3", legenda:"Uêpa"},
    {caminho:"../audios-ratinho/rapaz.mp3", legenda:"Rapaz"},
    {caminho:"../audios-ratinho/pare.mp3", legenda:"Pare"},
    {caminho:"../audios-ratinho/irra.mp3", legenda:"Irra"},
    {caminho:"../audios-ratinho/vish.mp3", legenda:"Vish"},
    {caminho:"../audios-ratinho/no-existe.mp3", legenda:"Isso no existe"},
    {caminho:"../audios-ratinho/cavalo.mp3", legenda:"Cavalo"},
    {caminho:"../audios-ratinho/meu-patrao.mp3", legenda:"Esse é meu Patrão"},
    {caminho:"../audios-ratinho/nao-e-pai.mp3", legenda:"Ele não é o Pai"},
]  

let botoes = document.querySelectorAll('.botao')
let paragrafos = document.querySelectorAll('p')
let nbotoes = document.querySelectorAll('.botao').length
for (let i=0; i < nbotoes; i++){       //estrutura de repetição para atribuir a legenda e um data-item
    paragrafos[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i)
}

let audio = document.querySelector('audio')
botoes.forEach(botao => {   
    botao.addEventListener('click', () => {
        for (i=0; i < nbotoes; i++){   //estrutura de repetição para remover estilos
            botoes[i].classList.remove('active')
            botoes[i].style.backgroundColor='#353c46'
        }//for
        botoes[botao.getAttribute('data-item')].style.backgroundColor='#525e70'
        botao.classList.add('active')   //adicionar borda colorida ao botão clicado
        let som = audios[botao.getAttribute('data-item')]   //pegar audio do respectivo botão
        audio.setAttribute('src', som.caminho)   //encaminhar o audio para o html
        audio.addEventListener('loadeddata', () => {   //tocar quando audio estiver carregado
            audio.play()
            audio.addEventListener('ended', () => { //retirar borda quando audio acabar
                botao.classList.remove('active')
                botoes[botao.getAttribute('data-item')].style.backgroundColor='#353c46'
            })//ended
        })//loadeddata    
    })//click
})//botao




/*
let botao = document.querySelectorAll('.botao')
let paragrafo = document.querySelectorAll('p')
let nbotoes = document.querySelectorAll('.botao').length

for(let i = 0; i < nbotoes; i++){
    paragrafo[i].textContent = sons[i].legenda
    botao[i].setAttribute('data-item', i)
}

let audio = document.querySelector('audio')
botao.forEach(botoes => {
    botoes.addEventListener('click', () => {
        console.log('cu')
        let som = sons[botoes.getAttribute('data-item')]
        audio.setAttribute('src', som.caminho)
        audio.addEventListener('loadeddata', () => {
            audio.play()
        })
    })
})
/*
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
*/