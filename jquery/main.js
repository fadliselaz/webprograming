

var cr = ()=>{
    var bd = document.getElementById("body")
    bd.style.backgroundImage="url('https://images.pexels.com/photos/2974657/pexels-photo-2974657.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";

    bd.style.backgroundSize="cover"
    bd.style.backgroundPosition="center"
}

var cb = ()=>{
    var bd = document.getElementById("body")
    bd.style.backgroundImage="url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";

    bd.style.backgroundSize="cover"
    bd.style.backgroundPosition="center"
}

var cy = ()=>{
    var bd = document.getElementById("body")
    bd.style.backgroundImage="url('https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";

    bd.style.backgroundSize="cover"
    bd.style.backgroundPosition="center"
}

var validate = (us, ps)=> {
    if(us == "fadliselaz" && ps == "123"){
        window.location.href= "home.html"
    }
    else{
        alert("username / password salah..")
    }
    
}

var login = ()=> {
    username = document.getElementById("username").value

    password = document.getElementById("password").value
    validate(username, password)
}