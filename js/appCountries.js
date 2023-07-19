/*document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#inputCountry');

  fetch('https://restcountries.com/v3.1/all')
  
  .then(res => {
    return res.json();
    
  }).then(data => {
    let output = "";
    data.forEach(country => {
      output += `
      
      <option value="${country.name.common}">${country.name.common}</option>`;
    })

    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })
});*/

function putCountryOptions() {
  const selectDrop = document.querySelector('#inputCountry');

  fetch('https://restcountries.com/v3.1/all')
    // .then( (res) => { return res.json() })
    .then(res => res.json())
    .then(states => {
      states.sort((a, b) => a.name.common < b.name.common ? -1 : a.name.common === b.name.common ? 0 : 1)
      for (const state of states) {
        selectDrop.innerHTML += `<option value="${state.name.common}">${state.name.common}</option>`
      }
    })
}
putCountryOptions()
