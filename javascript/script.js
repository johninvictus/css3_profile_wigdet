$(document).ready(function(){
    var clicked=0;
    var contentShowingplus=false;

$("#plusClose").hide();

$("#googleplus").click(function(){

    console.log("form google plus "+this.clicked);

    if(clicked===0){
        $(this).removeClass("addgoogleplusanim").addClass("movebtn");
        $("#plusContent").removeClass("movebackplus").addClass("addanimPlusContent");

        contentShowingplus=true;
        $("#plusClose").show();
    }

    if(clicked===1){
        $(this).removeClass("movebackplus").addClass("movebtn");
        $("#plusContent").removeClass("returnplus").addClass("addanimPlusContent");
        contentShowingplus=true;
        $("#plusClose").show();
    }

});
    //check states of btn


$("#preventOverFlow svg").click(function(){

    console.log("from closing "+clicked);

    if(clicked===0){
        $("#plusContent").removeClass("addanimPlusContent").addClass("returnplus");
        $("#googleplus").removeClass("movebtn").addClass("translateHack").addClass("movebackplus");
        $("#plusClose").hide();
       clicked=1;
        contentShowingplus=false;
    }

    if(clicked===1){
        $("#plusContent").removeClass("addanimPlusContent").addClass("returnplus");
        $("#googleplus").removeClass("movebtn").addClass("movebackplus");
        $("#plusClose").hide();
        this.clicked=0;

        contentShowingplus=false;
    }
    console.log("from closing bellow "+clicked);

    });

$("#twitter").click(function(){
    if(contentShowingplus){
        $("#preventOverFlow svg").trigger('click');
        $(this).removeClass("addtwitteranim").addClass("addtwittermovebtnanimation");

    }else{
    $(this).removeClass("addtwitteranim").addClass("addtwittermovebtnanimation");
    }
});





});