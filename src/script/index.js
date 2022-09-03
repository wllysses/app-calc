//criar eventos e capturar os valores dos botões
document.querySelectorAll('.num').forEach(btnValue => {
    btnValue.addEventListener('click', (e) => {
        document.getElementById('result').value += e.target.value
    })
})
//função que limpa o campo de input ao apertar o botão C
function clearCalc() {
    document.querySelector('#result').value = ''
}
//função que calcula todos os valores que estão contidos no input ao clicar o botão =
function calculate() {
    let total = document.getElementById('result').value
    document.getElementById('result').value = eval(total)
}