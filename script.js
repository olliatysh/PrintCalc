const formElement = document.querySelector('#form'); // извлекаем элемент формы
const modelTimeBlock = document.querySelector('.model-time');
const modelCheckBlock = document.querySelector('.tgl');
const materialBlock = document.querySelector('.material');
var modal = document.getElementById("my_modal");
let resField = document.querySelector('.result-field');
// console.log(resField.innerText)

modelCheckBlock.addEventListener('change', () => {
    console.log(modelCheckBlock.checked);
    if (modelCheckBlock.checked) {
        modelTimeBlock.toggleAttribute("disabled");
    } else {
        modelTimeBlock.toggleAttribute("disabled");
    }
})

function nameRecieve(sel) {
    var matName = (sel.options[sel.selectedIndex].text);
    return matName;
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    let needsModel = formData.get('needs-model');
    let modelTime = formData.get('model-time');
    let material = formData.get('material');
    let consumption = formData.get('consumption');
    let timePrint = formData.get('time-print');
    let timePost = formData.get('time-post');
    // console.log(
    //     (needsModel ? modelTime : '0'),
    //     String(material),
    //     String(consumption),
    //     String(timePrint),
    //     String(timePost)
    // )
    let res = Math.round(modelTime * 50 + material * consumption + timePrint * 100 + timePost * 100);
    console.log(res)
    if(isNaN(res)){
        alert('Не заполнены необходимые поля');
    } else {
        resField.textContent = res;     
        modal.style.display = "block";
    } 

});







var span = document.getElementsByClassName("close_modal_window")[0];
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}