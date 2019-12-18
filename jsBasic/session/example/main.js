
var save = ()=>{
    //kita akan ambil element H1
    var txt = document.getElementById('text')

    //kita ambil inputan user
    var ip = document.getElementById('input').value

    //kita SAVE ke session
    sessionStorage.setItem('inputUser',`${ip}`)

    //kita coba tangkap memory session inputUser
    var sesIp = sessionStorage.getItem('inputUser')

    //kita coba RETURN hasil tangkapan
    txt.innerHTML = sesIp
}