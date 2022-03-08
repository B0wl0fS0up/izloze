const vardi=[`Artūrs`,`Jānis`,`Mārtiņš`,`Ričards`,`Al-habīds`];
const balvas=[`19$ Fortnite dāvanu karte`,`Juan`,`Turcijas impērija`,`vieta CIA watchlistā`,`šie rieksti`]
 const naudaKopa=0.03
 let uzvsk=5
 let rindas = document.querySelector('rindas');

 for(let i=0;i<uzvsk;i++){
let rand=Math.random()*vardi.length;
rand=Math.floor(rand);

 console.log (vardi[rand]);}
 rindas.innerHTML +=``
 <tr>$