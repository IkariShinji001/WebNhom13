$(document).ready(function(){
    $('body').addClass('loaded');
    var tooltipTriggerList =
    [].slice.call(document.querySelectorAll('[data-bstoggle="tooltip"]'));
     var tooltipList = tooltipTriggerList.map(function
    (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
     });
     
});
