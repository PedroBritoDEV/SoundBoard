let audios = [
    {caminho:'../audios-faro/danca-gatinho.mp3',descricao:'Danca Gatinho'},
    {caminho:'../audios-faro/vai-dar-namoro.mp3',descricao:'Vai dar Namoro'},
    {caminho:'../audios-faro/tome-tome.mp3',descricao:'Tome'},
    {caminho:'../audios-faro/que-papelao.mp3',descricao:'Que Papelão em'},
    {caminho:'../audios-faro/risadinha.mp3',descricao:'Risadinha'},
    {caminho:'../audios-faro/gugu.mp3',descricao:'gugu'},
    {caminho:'../audios-faro/que-isso-meu-filho.mp3',descricao:'Que isso meu filho calma'},
    {caminho:'../audios-faro/nao.mp3',descricao:'Não'},
    {caminho:'../audios-faro/ai-ai-ai.mp3',descricao:'ai ai ai'},
    {caminho:'../audios-faro/vish.mp3',descricao:'Vish'},
]

let paragrafos = document.querySelectorAll('p')
let botoes = document.querySelectorAll('.botao')
let nbotoes = document.querySelectorAll('.botao').length
for(let i = 0; i < nbotoes; i++){    //estrutura de repetição para atribuir a legenda e um data-item
    paragrafos[i].textContent = audios[i].descricao
    botoes[i].setAttribute('data-item', i)
}

let audio = document.querySelector('audio')
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        for(i = 0; i < nbotoes; i++){   //estrutura de repetição para remover estilos
            botoes[i].classList.remove('active')    
            botoes[i].style.backgroundColor='#4b2d4f'
        }//for
        botoes[botao.getAttribute('data-item')].style.backgroundColor='#74447a'
        botao.classList.add('active')   //adicionar borda colorida ao botão clicado
        let som = audios[botao.getAttribute('data-item')]    //pegar audio do respectivo botão
        audio.setAttribute('src', som.caminho)  //encaminhar o audio para o html
        audio.addEventListener('loadeddata', () => {    //tocar quando audio estiver carregado
            audio.play()
            audio.addEventListener('ended', () => { //retirar borda quando audio acabar
                botao.classList.remove('active')
                botoes[botao.getAttribute('data-item')].style.backgroundColor='#4b2d4f'
            })//ended
        })//loadeddata
    })//click
})//botao
