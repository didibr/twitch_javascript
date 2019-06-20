await CreateElements();

async function CreateElements(){
    var elem = document.createElement("input"); //BOTAO INICIAL
    elem.id='bot_buttom';    
    elem.style.backgroundColor='#6441a4'; 
    elem.style.position='fixed';
    elem.style.display='block';                                            
    elem.style.cursor='pointer';
    elem.style.textAlign='center';   
    elem.style.width='50px';
    elem.style.height='50px';
    elem.style.top='10px';    
    elem.style.left='5px'; 
    elem.innerHTML ='BOT';            
    document.getElementsByTagName('body')[0].appendChild(elem);
}
