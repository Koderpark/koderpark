function loadflkty(){
    flkty = new Flickity( document.querySelector('.prizelist'), option);
}

function renewprize(){

    var chkadult = document.getElementById('chkadult');
    var chkhigh  = document.getElementById('chkhigh');
    var chkyoung = document.getElementById('chkyoung');

    var prizeadult = document.getElementsByClassName('prizeadult');
    var prizehigh  = document.getElementsByClassName('prizehigh');
    var prizeyoung = document.getElementsByClassName('prizeyoung');

    Array.from(prizeadult).forEach(val => {
        if(chkadult.checked) { val.style.display = "block"; }
        else                 { val.style.display = "none";  }
    });

    Array.from(prizehigh).forEach(val => {
        if(chkhigh.checked) { val.style.display = "block"; }
        else                { val.style.display = "none";  }
    });

    Array.from(prizeyoung).forEach(val => {
        if(chkyoung.checked) { val.style.display = "block"; }
        else                 { val.style.display = "none";  }
    });
    setTimeout(() => { loadflkty(); flkty.resize()}, 50);
}