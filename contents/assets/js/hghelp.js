//specified in help.htm
//var home1= "Welcome.htm";
//var spage = "Welcome.htm";
//var jump1url, jump2url, jump1text, jump2text  
///=========================
  
 $(function () {
 	//resize panes
    $("#tabs").tabs();               
   resizepanes();

  	$("#tabs").bind('tabsshow', function(event, ui) {       
    	$(".inputsearch").focus();    
  	});
	//show page from argument    
    var attribstring = location.search ? unescape(location.search.substring(1)) : '';		    			   
    if (attribstring != '') spage = attribstring;
	    $("#right").attr('src', spage); 
    
	//hide extra buttons with no url specified
    if (jump1url=="") {
  		$("#jump1").hide()};
    if (jump2url=="") {
  		$("#jump2").hide()};                
});
              
function jump1() { $("#right").attr('src', jump1url); }
function jump2() { $("#right").attr('src', jump2url); }
function home() { $("#right").attr('src', home1); }

$(function () {
	$("#toggle_node").click(function () { 
		$("#treecontents").jstree("toggle_node","#start1");
		$("#treeindex").jstree("toggle_node","#start1");
	});
	
	$("#treecontents")
		.bind("open_node.jstree close_node.jstree", function (e) {
		//	$("#log1").html("Last operation: " + e.type);
		})
		.jstree({ "plugins" : [ "themes", "html_data","search" ] });
});

$(function () {
   $(window).resize(function () {
	resizepanes();
	});
  });   
                    
function resizepanes()
{
    //var i = $("#right").height();
    var w = $(window).height() - 60;
    $("#right").attr('height', w);    
//    $("#tabs").attr('height', w);                
  $("#tabs").height(w);
}
                       
function previous() {
    var t = $.jstree._reference('#treecontents')
    t.select_node(t._get_prev(), true);
}

function next() {
    var t = $.jstree._reference('#treecontents')
    t.select_node(t._get_next(), true);
}

var fontSize = 1;
function zoomin() {
    if (fontSize <= 1.3) {
        fontSize += 0.1;
        document.body.style.fontSize = fontSize + "em";
        window.frames["right"].document.body.style.fontSize = fontSize + "em";
        //	alert (document.body.style.fontSize);
    }
    else {
        fontSize = 0.8;
        document.body.style.fontSize = fontSize + "em";
        window.frames["right"].document.body.style.fontSize = fontSize + "em";
    }
}   
               
function hideshow() {    
    $('#leftpane').toggle("slide", { direction: "left" }, function resizeright() {
        $("#rightpane").toggleClass("newClass");
        return false;
    });
}  
            
function print() {
	$("#right").printElement(
        {
        iframeElementOptions:
        {
   		 styleToAdd:'position:absolute;width:0px;height:0px;bottom:0px;'   
    	}
    });           
} 

//==========Contents===========================================================
$(function () {
    $("#treecontents").jstree({
        "themes": { "icons": true },
		"core" : { "initially_open" : ["start1"] },
        "html_data": {                     
            "ajax": {
                "url": "webhhc.htm",
                 "data": function (n) {
                    return { id: n.attr ? n.attr("id") : 0 };
                }
            }
        }, 
        "plugins": ["themes", "html_data", "ui", "themeroller"]
    })

		.bind('select_node.jstree', function (e, data) {
		var node = data.rslt.obj;
		var link = node.children('a');
		if (link.attr('href') != '#' && link.attr('target') != '') {
		    $('iframe[name="' + link.attr('target') + '"]').attr('src', link.attr('href')); // src voor IE
			}
		})
});
            
//---------------------------------Index-------------------------------------------------
$(function () {
     $("#tsearch").keyup(function () {   
    	 var svalue = $("#tsearch").val();    
         $("#treeindex").jstree("search",svalue );                                           
     });  
    
     $("#treeindex").jstree({ 
          "search": {
					  "case_insensitive": true,
					  "show_only_matches": true },

           "core" : {  "initially_open" : [] }, 
                "html_data": {
                "ajax": {
                    "url": "webhhk.htm",                            
                    "data": function (n) {
                        return { id: n.attr ? n.attr("id") : 0 };
                    }
                 }
            },
            "plugins": ["themes", "html_data","search", "themeroller"]
      })
            .bind("search.jstree", function (event, data) { 
			    $(this).find("li").hide().removeClass("jstree-last");  
			    data.rslt.nodes.parentsUntil(".jstree").andSelf().show()
				.filter("ul").each(function () {
				    $(this).children("li:visible").eq(-1).addClass("jstree-last");
				});
			})
				.bind("clear_search.jstree", function () {
				    $(this).find("li").css("display", "");
				    $(this).jstree("clean_node", -1);
				});
		
	  var tree = $("#treeindex"); 
  	  tree.bind("loaded.jstree", function (event, data) { 
      tree.jstree("open_all");
   });
});
 
//==========================================================================//
//	Function:	searchSelectBox(in_sFormName, in_sInputName, in_sSelectName)
//	Purpose: Acts as a "searchable" input for a given select box.
//	Parameters:
//		in_sFormName 	- The form name where the elements live
//		in_sInputName 	- The "search input element name.
//		in_sSelectName	- The select box to search against.
//
//==========================================================================//
function searchSelectBox(in_sFormName, in_sInputName, in_sSelectName) {
    sSearchString = document.forms[in_sFormName].elements[in_sInputName].value.toUpperCase();
    iSearchTextLength = sSearchString.length;

    for (j = 0; j < document.forms[in_sFormName].elements[in_sSelectName].options.length; j++) {
        sOptionText = document.forms[in_sFormName].elements[in_sSelectName].options[j].text;
        sOptionComp = sOptionText.substr(0, iSearchTextLength).toUpperCase();

        if (sSearchString == sOptionComp) {
            document.forms[in_sFormName].elements[in_sSelectName].selectedIndex = j;
            break;
        }
    }
}

function goSelect(cbSearchSelect) {
    with (cbSearchSelect) {
        parent.frames['right'].location = options[selectedIndex].value; // jump to that option's value
    }
} 
 

          