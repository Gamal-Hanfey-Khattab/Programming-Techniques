var bt = document.querySelectorAll(".btn1")
// To Make tooltip work
$(bt).tooltip() 
// change title on click
$(bt).click(function(){
    $(this).attr( "data-original-title", "Copied!" );
    $(this).tooltip('show');
})