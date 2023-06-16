var usuarios = [{
    "email": 'isabella@gmail.com',
    "senha": '1315*A'
},
{
    "email": 'lucascalu@gmail.com',
    "senha": '232425'
},
{
    "email": 'marciodena@gmail.com',
    "senha": '30246s'
},
];



function login(){
	 var user = document.getElementById('user').value;
     var senha = document.getElementById('senha').value;

    
     for(var i = 0; i < usuarios.length; i++) {
      if(usuarios[0].email == user && usuarios[0].senha == senha){
        alert("Login finalizado!")
        window.location.href = "https://isabila2.github.io/ClinicaMedPlus.github.io/";
     } else if(usuarios[1].email == user && usuarios[1].senha == senha){
        alert("Login finalizado!")
        window.location.href = "https://isabila2.github.io/ClinicaMedPlus.github.io/";
    } else if(usuarios[2].email == user && usuarios[2].senha == senha){
        alert("Login finalizado!")
        window.location.href = "https://isabila2.github.io/ClinicaMedPlus.github.io/";

        // if(usuarios[i].email == user && usuarios[i].senha == senha){
        // alert("Login finalizado!")
        // window.location.href = "https://isabila2.github.io/ClinicaMedPlus.github.io/";
     }
    }
}