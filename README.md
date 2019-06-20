# twitch_javascript

<b>Injetando o Script:</b><br>
Para rodar o bot no canal que deseja, basta injetar o script abaixo.<br>
para isso você deve estar no canal que deseja colocar o Bot<br>
e escrever na barra de endereço, o seguinte comando<br><br>
<i>
JAVASCRIPT:<br>
    (function() {var script = document.createElement('script');<br>
    script.src = <b>'//cdn.jsdelivr.net/gh/didibr/twitch_javascript@latest/bot.js'</b>;<br>
    document.getElementsByTagName('head')[0].appendChild(script);})();<br>    
</i>
<br><br>
Agora Basta escrever no char do canal !debug<br>
que vai receber a resposta relativa que esta definida na funcao<br>
onChatMessage(rom,msg){<br>
    if(msg=='!debug'){<br>
        ChatWrite('DEBUG OK');<br>
    }<br>
}


//http://raw.githubusercontent.com/<username>/<repo>/<branch>/path/to/file.js<br>
//http://cdn.jsdelivr.net/gh/<username>/<repo>/path/to/file.js
