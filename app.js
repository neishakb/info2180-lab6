window.onload = ()=>{
    let search = document.getElementById("search");
    let box = document.getElementById("box");
    let result = document.getElementById("result");
    
    
    search.addEventListener("click", function(){
        let httpRequest = new XMLHttpRequest();
        let url = `https://826691f0c8ce41baba35ed997d001c28.vfs.cloud9.us-east-1.amazonaws.com/superheroes.php?q=${box.value}`;
       
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = httpRequest.responseText;
                    result.innerHTML = response;
                    // alert(response);
            } else {
                alert('There was a problem with the request.');
           }
} 
        }
        httpRequest.open('GET', url);
       httpRequest.send();
       httpRequest.open('GET', url);
       httpRequest.send();
    })
    
    
}