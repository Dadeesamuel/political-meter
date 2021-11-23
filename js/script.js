$("document").ready(function(){
$("button.btn").click(function(){
$(".status").show();
});

$(".form").submit(function(event){
  
const elected =$("select#elected").val();
const society =$("select#society").val();
const citizen =$("select#citizen").val();

 if (elected==="1" || society === "1" && citizen==="1") {
    $(".result1").show();
 }else if (elected==="2" || society === "1" && citizen==="1"){
    $(".result2").show();
 }else if (elected==="3" || society === "1" && citizen==="1"){
    $(".result3").show();
 } else {
    $(".result").text('you are not eligible to be elected.')
 }


event.preventDefault();  

    });





});