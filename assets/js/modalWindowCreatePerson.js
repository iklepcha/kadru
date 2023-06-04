let openMWCP = document.querySelector('.buttons_in_header button')
let closeMWCP = document.querySelector('.close_modal_CP_Header')
let MWCP = document.querySelector('.modalWindows')
let MWCPblock = document.querySelector('.modalCreatePerson')
let closeMWCPbtn = document.querySelector('.btn_mw_close')

openMWCP.addEventListener('click', function(){
  MWCP.style.display = 'flex'
})

closeMWCP.addEventListener('click', function(){
  MWCP.style.display = 'none'
})

closeMWCPbtn.addEventListener('click', function(){
  MWCP.style.display = 'none'
})
