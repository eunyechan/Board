function signup(){
  const id=document.getElementById('id').value;
  const pw=document.getElementById('pw').value;
  const email=document.getElementById('email').value;

  
      var req=new XMLHttpRequest();
      req.onreadystatechange=function(){
          if(req.readyState==4 && req.status==200){
              alert(req.responseText);
              location.href="./signup.html"
          }
                  
      req.open('POST', './signup.php', true);
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.send('id='+id+'&pw='+pw+'&email='+email);  
  }
}