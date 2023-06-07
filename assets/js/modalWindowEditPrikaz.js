let openMWCP = document.querySelector('.buttons_in_header button')
let closeMWCP = document.querySelector('.close_modal_CP_Header')
let MWCP = document.querySelector('.modalWindows')
let MWCPblock = document.querySelector('.modalCreatePerson')
let closeMWCPbtn = document.querySelector('.btn_mw_closeP')

// Страница редактирования
let openMWeditKadruPrikaz = document.querySelector('.edit_btn_kadru_prikaz button')

openMWeditKadruPrikaz.addEventListener('click', function(){
  MWCP.style.display = 'flex'
})

closeMWCP.addEventListener('click', function(){
  MWCP.style.display = 'none'
})

closeMWCPbtn.addEventListener('click', function(){
  MWCP.style.display = 'none'
})



// Отпуск
btnOtpusk = document.querySelector('.edit_btn_kadru_otpusk')
let MWCPo = document.querySelector('.MWeditOtpusk')
let closeMWCPo = document.querySelector('.close_modal_CP_Header_o')
let closeMWCPbtnO = document.querySelector('.btn_mw_closeO')

btnOtpusk.addEventListener('click', function(){
  MWCPo.style.display = 'flex'
})

closeMWCPo.addEventListener('click', function(){
  MWCPo.style.display = 'none'
})

closeMWCPbtnO.addEventListener('click', function(){
  MWCPo.style.display = 'none'
})