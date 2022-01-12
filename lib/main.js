/*eslint-env es6*/
/*eslint-env browser*/
document.body.onload = AddElement;

function AddElement () {
    var maincss = document.createElement("link");
    maincss.setAttribute('rel',  'stylesheet');
    maincss.setAttribute('type', 'text/css');
    maincss.setAttribute('href','lib/main.css');
    
    var originHead = document.getElementsByTagName('head')[0];
    //var originBody = document.getElementsByTagName('body')[0];
    originHead.appendChild(maincss);
    //originBody.appendChild(palette);
}

function SetThemeLight(){
    
}