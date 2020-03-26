


let btn = document.getElementById("btn").addEventListener("click", gerar);

function gerar() {
    document.getElementById("titulo").innerText = "Mousse de Limão";
    document.getElementById("preparo").innerText = "Coloque no liquidificador o leite condensado, o creme de leite e o suco de limão, bata bem até misturar tudo muito bem. Despeje em um pote ou em taças individuais. Rale a parte verde do limão (só a verde, senão amarga) e polvilhe sobre a mousse. Leve a mousse para gelar por pelo menos 2 ou 3 horas. Sirva bem geladinha. Use mais ou menos suco de limão se você quiser uma mousse mais azedinha ou não. Se quiser aumentar a quantidade, é só duplicar a quantidade dos ingredientes. Se quiser agilizar o tempo para gelar essa mousse, você pode colocar no freezer por uns 30 minutos.";
    document.getElementById("img").src = "./imgs/limao.jpg";
    document.getElementById("video").innerHTML = "<object width='425' height='340' data='https://www.youtube.com/embed/2DBExscWCxo'></object>";
    document.getElementById("ul").innerHTML = "<li>1 lata ou caixa de leite condensado</li> <li>1 caixa de creme de leite</li> <li>60 ml de suco de limão</li> <li>Raspas de 1 limão</li>";
}
