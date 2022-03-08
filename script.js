const vardi=['Artūrs','Jānis','Mārtiņš','Ričards','Al-Habībs'];
const balvas=['19$ Fortnite dāvanu karte','Juan','Turcijas impērija','vieta CIA watchlistā','šie rieksti'];
const naudaKopa=3;
let uzvaretajuskaits=5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ' ;
let uz2 = document.querySelector('.balvas');
balvas.innerHTML = ' ' ;
 
 for(let i = 0;i<uzvaretajuskaits;i++){
let rand = Math.random() * vardi.length;
rand = Math.floor(rand);
let uzvaretajs = vardi[rand];
let uz2 = balvas[rand];

rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${uz2}</td>
</tr>`
}
