$(function () {    
$(".tabs").tabs(); 

$( ".ac" ).accordion({ event: 'click' }); 
var event = $( ".ac" ).accordion( "option", "event" ); 
$( ".ac" ).accordion( "option", "event", 'click' ); 

$(document).ready(function(){  $('.toggler').accordion().click(function() { $(this).next().toggle(); return false; }).next().hide(); });   

} )        
