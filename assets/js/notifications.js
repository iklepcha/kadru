let notif = document.querySelector('.other')
let notifClick = document.querySelector('.otherClick')
let notifClickCLOSE = document.querySelector('.close_notificate img')

notif.addEventListener('click', function() {
  notifClick.style.display = 'flex'
  notif.style.display = 'none'
})

notifClickCLOSE.addEventListener('click', function() {
  notifClick.style.display = 'none'
  notif.style.display = 'flex'
})