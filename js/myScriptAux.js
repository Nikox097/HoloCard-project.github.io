const formulario = document.querySelector("#formulary");
formulario.addEventListener("input", validarFormulario)

function validarFormulario(e){
  e.preventDefault();
  const nameUser = document.querySelector("#inputName").value
  const cardName = document.getElementById("newNameInCard");
  cardName.innerText = `${nameUser}`

  const birthdateUser = document.querySelector("#inputBirthdate").value
  const cardBirthdate = document.getElementById("newBirthdateInCard");
  cardBirthdate.innerText = `${birthdateUser}`

  const countryUser = document.querySelector("#inputCountry").value
  const cardCountry = document.getElementById("newCountryInCard");
  cardCountry.innerText = `${countryUser}`
}

$(function () {
  $('#datepicker').datepicker({
    format: 'dd/mm/yyyy',
  });
});

const options = {
    filename: 'MyHoloCard.pdf',
    image: {
      type: 'png',
      quality: 2000
    },
    html2canvas: {
      scale: 2
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait'
    }
  }

  function saveSection(){
    const element = document.getElementById('finalCard');
    html2pdf().from(element).set(options).save();
  }


  function printDiv(divName){
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }