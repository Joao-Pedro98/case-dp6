// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MC5C6GGG');


document.addEventListener('DOMContentLoaded', function () {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'page_view',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const contatoLink = document.querySelector('.menu-lista-contato');

  if (contatoLink) {
    contatoLink.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'click',
        page_location: window.location.href,
        element_name: "entre_em_contato",
        element_group: "menu"
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const downloadLink = document.querySelector('.menu-lista-download');

  if (downloadLink) {
    downloadLink.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'file_download',
        page_location: window.location.href,
        element_name: "download_pdf",
        element_group: "menu"
      });
    });
  }
});

document.querySelectorAll('.card-montadoras').forEach(card => {
  card.addEventListener('click', function () {
    const nome = this.dataset.name
      .toLowerCase()
      .replace(/\s+/g, '_');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click',
      page_location: window.location.href,
      element_name: nome,
      element_group: "ver_mais"
    });
  });
});

const formulario = document.querySelector('form');

if (formulario) {

  formulario.addEventListener('input', function () {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'form_start',
      page_location: window.location.href,
      form_id: this.getAttribute('id') || '',
      form_name: this.getAttribute('name') || '',
      form_destination: this.getAttribute('action') || ''
    });

  }, { once: true });


  formulario.addEventListener('submit', function () {

    const botao = this.querySelector('button[type="submit"]');

    const botaoTexto = botao ? botao.textContent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_') : '';

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'form_submit',
      page_location: window.location.href,
      form_id: this.getAttribute('id') || '',
      form_name: this.getAttribute('name') || '',
      form_destination: this.getAttribute('action') || '',
      form_submit_text: botaoTexto
    });

  });

}


const body = document.querySelector('body');

const observer = new MutationObserver(function () {

  if (body.classList.contains('lightbox-open')) {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'view_form_success',
      page_location: window.location.href,
      form_id: formulario.getAttribute('id') || '',
      form_name: formulario.getAttribute('name') || ''
      
    });

    observer.disconnect();
  }

});

observer.observe(body, {
  attributes: true,
  attributeFilter: ['class']
});