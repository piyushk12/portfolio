let theme=localStorage.getItem('theme');
if(theme==null){
    setTheme('blue');
}else{
    setTheme(theme);
}



let themeDots=document.getElementsByClassName('theme-dot');

for(var i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode=this.dataset.mode;
        setTheme(mode);
        
    })
}

function setTheme(mode){
    if(mode=='light'){
       document.getElementById('theme-style').href='light.css';
    }
    if(mode=='blue'){
        document.getElementById('theme-style').href='theme.css';
    }
    if(mode=='green'){
        document.getElementById('theme-style').href='green.css';
    }
    if(mode=='purple'){
        document.getElementById('theme-style').href='purple.css';
    }
    theme=localStorage.setItem('theme',mode);
}


const btn=document.getElementById('submit-btn');
const input=document.querySelector('form');

btn.addEventListener('click',()=>{
   Email.send({
       Host: "smtp.mailtrap.io",
        Username :"5f3765349967f7",
       Password : "15aa137ebb6036",
       To:"prithvipan4327@gmail.com",
       From:"prithvizhi23@gmail.com",
       Subject:"Messege From Portfolio",
       Body:"meSSege:"+input.elements["Messege"].value +"<br>" +"eMAil:"+input.elements["eMail"].value + "<br>" +"naME :" +input.elements["name"].value,
    } ).then(
        msg=>alert("Messege Successfully Sent")
        );
});

