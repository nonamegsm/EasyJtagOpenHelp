  //image size fix
  function imgFix() { 
      var images = document.getElementsByTagName('img');
      var maxWidth = Math.round(document.body.clientWidth * 0.95);
      if (maxWidth < 200)
          maxWidth = 200;
      for (var i = 0; i < images.length; i++) 
      {	
          var img = new Image();
          img.src = images[i].src;
          var naturalWidth = img.width;
          var parentWidth = maxWidth;//images[i].parentNode.offsetWidth - 10;
          //alert(parentWidth+"  "+maxWidth);		

          if (maxWidth && naturalWidth && parentWidth && images[i].width)
          {
              if (naturalWidth < maxWidth && naturalWidth < parentWidth)
              {
                  images[i].width = naturalWidth;
              }
              else
              {
                  if (maxWidth < parentWidth)
                      images[i].width = maxWidth;		
                  else
                      images[i].width = parentWidth;		
              }			
          }

      }		
  }

  function imgTable() { 
      var images = document.getElementsByTagName('img');
   		 			  for (var i = 0; i < images.length; i++) 
      {	        
        var img = images[i].outerHTML;        
        var title = images[i].getAttribute("title");
        
        images[i].outerHTML = '<table class="img-table"><tbody><tr><th>&nbsp;<p align="left">' + img +
          '</p></th></tr><tr><td><p align="center"><strong>' + title + '</strong></p></td></tr></tbody></table>';
      }
  }

	  imgTable();
  window.attachEvent("onresize", imgFix);
  window.attachEvent("onload", imgFix);