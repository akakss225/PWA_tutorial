const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");

const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.vaule == ""){
        alert("직업값이 입력되지 않았습니다.");
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert("시간값이 입력되지 않았습니다.");
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24){
        alert("잘못된 값입니다. 24 이하의 값을 입력해 주세요.");
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
        loading.style.display = 'none';
        result.style.display = 'flex';
    }, 1800);
}

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

// execCommand() 는 이미 사장됨... 따라서 Clipboard API 로 변경
function copyUrl(){
    const url = window.location.href
    navigator.clipboard.writeText(url)
    .then(() => {
        alert("url을 복사했습니다")
    })
    .catch(err =>{
        alert("url을 복사하는데 실패했습니다." + err)
    });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);