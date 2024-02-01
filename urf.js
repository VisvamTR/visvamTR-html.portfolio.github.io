function reg() {

    var a = document.getElementById("name").value;
    var b = document.getElementById("phn").value;
    var c = document.getElementById("email").value;
    var d = document.getElementById("dob").value;

    if (a != '' && b != '' && c != '' && d != ''){

        var password = '060703';
        var p = document.getElementById("pw");

        if (b.length == 10){

            if (p.value === password){
    
            localStorage.setItem("name", a);
            localStorage.setItem("phn", b);
            localStorage.setItem("email", c);
            localStorage.setItem("dob", d);
    
            window.location.href = "urf_output.html";
            }
            else {
                alert("Please enter the valid password or click forgot password")
            }    
        }
        else {
            alert("Invalid mobile number")
        }
    }
    else{
        alert("Please enter the inputs")
    }
}


function fp(){
    var password = '060703';
    var p = document.getElementById("pw");

    p.value = password;
    
    localStorage.setItem("pw", password);
}