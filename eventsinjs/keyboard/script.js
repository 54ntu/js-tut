const insert = document.getElementById('insert')
console.log(insert);

window.addEventListener('keydown', (e)=>{
 insert.innerHTML = `
 <div>
 <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.key ===""? 'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr> 
</table>
<div>`;

})