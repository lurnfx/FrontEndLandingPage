
$(".list-link").click(function(){
  $("#bookmark-section").css('display', 'inline-block');
  $("#speddy-search").css('display', 'none')
  $("#easy-sharing").css('display', 'none')
})

$(".speedy-link").click(function(){
  $("#bookmark-section").css('display', 'none');
  $("#speddy-search").css('display', 'inline-block')
})

$(".easy-link").click(function(){
  $("#bookmark-section").css('display', 'none');
  $("#easy-sharing").css('display', 'inline-block')
})




function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  else{
    alert('Subscribed Sucssesfully');
  }
}  
