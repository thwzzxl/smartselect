/* Smart Select — adaptado do SiteForge */
(() => {
'use strict';
const $ = s => document.querySelector(s);
const menuButton = $('#menuToggle'), menu = $('#primaryNav');
const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Abrir menu'); document.body.classList.remove('menu-open'); };
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded',String(open)); menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu'); document.body.classList.toggle('menu-open',open); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(innerWidth>900)closeMenu();});
const service=$('#serviceType');
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{if([...service.options].some(o=>o.value===a.dataset.service))service.value=a.dataset.service;}));
$('#quoteForm').addEventListener('submit',e=>{
e.preventDefault(); if(!e.currentTarget.reportValidity())return;
const message=`Olá, Smart Select! Gostaria de consultar um orçamento.\n\nNome: ${$('#customerName').value.trim()}\nDispositivo: ${$('#deviceType').value}\nMarca e modelo: ${$('#deviceModel').value.trim() || 'Não informado'}\nServiço: ${service.value}\nProblema: ${$('#problem').value.trim()}`;
const link='https://wa.me/5531984024246?text='+encodeURIComponent(message);
const feedback=$('#formFeedback'); feedback.textContent='Mensagem preparada. '; const a=document.createElement('a'); a.href=link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Abrir WhatsApp';feedback.append(a);window.open(link,'_blank','noopener,noreferrer');
});
})();
