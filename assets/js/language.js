
$(document).ready(function(){
    $('body').addClass('loaded');
    myFunction();
});

function setLang(code){
    window.localStorage.setItem("lang",code);
    location.reload();
    
}
function getLang(){
    if(typeof (localStorage.getItem("lang")) === null){
        window.localStorage.setItem("lang","VN");
    }
   return window.localStorage.getItem("lang");   
}

function myFunction(){
    var lang = getLang();

    $('.multilang').each(function(i, obj){
        $("#"+obj.id).html(labels[obj.id][lang]).attr("title",labels[obj.id][lang]);
        console.log(obj.id);
    })   
}

