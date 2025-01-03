document.addEventListener('DOMContentLoaded', function () {
    
    let urlParams = new URLSearchParams(window.location.search);
    let score = urlParams.get('score') ; 
    let progressCircle = document.querySelector('.progress-circle');   
    progressCircle.style.setProperty('--percentage', (score/10) *100 ) ; 

    let progresstext = document.querySelector('.progress-text');
    progresstext.innerText=`${(score/10) *100} %`;

    let progressExplain = document.querySelector('.progress-explain');
        let p_explain = document.createElement("p");
        p_explain.innerText = `You have ${score} out of 10 correct answers.`;
        progressExplain.append(p_explain);
});

setTimeout(()=>{
    location.href ="index.html" ;
},10000)