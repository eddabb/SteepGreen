document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    const selectedOption = document.querySelector('input[name="deficiencia"]:checked');
    
    if (selectedOption) {
        if (selectedOption.value === "daltonico") {
            
            window.location.href = "../para Daltonicos/html D/loginDalton.html"; 
            
            
            setTimeout(function() {
                window.location.href = "/outro-caminho"; 
            }, 2000); 
        } else {
            
            window.location.href = "../Html/Login.html"; 
        }
    } else {
        alert("Por favor, selecione uma opção.");
    }
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("loginForm").submit();
    }
});
