// // Скрипт, добавляющий новую уз
// let uz = document.querySelector('.buttonADDuz')
// let uzButton = document.querySelector('.uzButton')

// let checkDateUZ = document.querySelectorAll('.checkDateUZ')
// let DateUZ = document.querySelectorAll('.dateUZ')

// uz.addEventListener('click', function(){
//   uzButton.insertAdjacentHTML('beforeBegin', `
//   <div class="col-md-5">
//     <label for="validationCustom22" class="form-label">Тип УЗ</label>
//     <select class="form-select" id="validationCustom04">
//       <option selected disabled value="">---</option>
//       <option>region привилегированная</option>
//       <option>region непривилегированная</option>
//       <option>dpc привилегированная</option>
//       <option>dpc непривилегированная</option>
//       <option>idmz привилегированная</option>
//       <option>sobi привилегированная</option>
//       <option>iss привилегированная</option>
//       <option>ern привилегированная</option>
//       <option>УЗ для тестирования ЕКП</option>
//       <option>ППК ЕГР ЗАГС (для тестировщиков)</option>
//       <option>ПАК ЕГР ЗАГС (для тестировщиков)</option>
//       <option>ПАК ЕГР ЗАГС (для администратора)</option>
//       <option>УЗ КПЭ АИС ФЦОД</option>
//       <option>УЗ ППК АИС ФЦОД</option>
//       <option>УЗ КПЭ ЕРН</option>
//     </select>
//   </div>

//   <div class="col-md-7">
//     <label for="validationCustom23" class="form-label">УЗ</label>
//     <input type="text" class="form-control" id="validationCustom02" placeholder="учетная-запись">
//   </div>

//   <div class="col-md-6">
//     <input class="form-check-input checkDateUZ" type="checkbox" id="invalidCheck">
//     <label for="validationCustom23" class="form-label" style="color: rgb(79, 79, 79);">Срок действия</label>
//     <input type="date" value="2222-02-22" disabled class="form-control dateUZ" id="validationCustom02">
//   </div>
//   <div class="col-md-6"></div>
//   `)

//   checkDateUZ2 = document.querySelectorAll('.checkDateUZ')
//   DateUZ2 = document.querySelectorAll('.dateUZ')

//   for (let i = 0; i < checkDateUZ2.length; i++) {
//     checkDateUZ2[i].addEventListener('click', () => {
//       if(DateUZ2[i].disabled) {
//         DateUZ2[i].disabled = false
//       } else {
//         DateUZ2[i].disabled = true
//       }
//     })
//   }
// })

// for (let i = 0; i < checkDateUZ.length; i++) {
//   checkDateUZ[i].addEventListener('click', () => {
//     if(DateUZ[i].disabled) {
//       DateUZ[i].disabled = false
//     } else {
//       DateUZ[i].disabled = true
//     }
//   })
// }

// // Скрипт, добавляющий новый арм
// let arm = document.querySelector('.armAdd')
// let armButton = document.querySelector('.armButton')

// arm.addEventListener('click', function(){
//   armButton.insertAdjacentHTML('beforeBegin', `
//                 <div class="col-md-4 arm">
//                   <label for="validationCustom22" class="form-label">Типы АРМ</label>
//                   <select class="form-select" id="validationCustom04">
//                     <option selected disabled value="">---</option>
//                     <option>Локальный АРМ</option>
//                     <option>Интернет АРМ</option>
//                     <option>ФРМ ФЦОД</option>
//                     <option>АРМ ЗАГС</option>
//                     <option>Соболь</option>
//                   </select>
//                 </div>

//                 <div class="col-md-8 arminput arm">
//                   <label for="validationCustom23" class="form-label">АРМ</label>
//                   <input type="text" class="form-control" id="validationCustom02" placeholder="Имя или номер АРМ">
//                 </div>
//   `)
// })

// // Скрипт, добавляющий новый VDI
// let vdi = document.querySelector('.vdiAdd')
// let vdiButton = document.querySelector('.vdiButton')

// vdi.addEventListener('click', function(){
//   vdiButton.insertAdjacentHTML('beforeBegin', `
//                   <div class="col-md-4">
//                     <label for="validationCustom22" class="form-label">Площадка</label>
//                     <select class="form-select" id="validationCustom04">
//                       <option selected disabled value="">---</option>
//                       <option>Кемерово</option>
//                       <option>Дубна</option>
//                       <option>Городец</option>
//                     </select>
//                   </div>

//                   <div class="col-md-8 vdiinput">
//                     <label for="validationCustom23" class="form-label">Имя VDI</label>
//                     <input type="text" class="form-control" id="validationCustom02" placeholder="Имя VDI">
//                   </div>
//     `)
// })

selectTypeUz = document.querySelector(".selectTypeUz");
buttonADDuz = document.querySelector(".buttonADDuz");

uzId1 = document.querySelector(".uzId1");
uzId2 = document.querySelector(".uzId2");
uzId3 = document.querySelector(".uzId3");
uzId4 = document.querySelector(".uzId4");
uzId5 = document.querySelector(".uzId5");
uzId6 = document.querySelector(".uzId6");
uzId7 = document.querySelector(".uzId7");
uzId8 = document.querySelector(".uzId8");
uzId9 = document.querySelector(".uzId9");
uzId10 = document.querySelector(".uzId10");
uzId11 = document.querySelector(".uzId11");
uzId12 = document.querySelector(".uzId12");
uzId13 = document.querySelector(".uzId13");
uzId13_2 = document.querySelector(".uzId13_2");
uzId14 = document.querySelector(".uzId14");
uzId15 = document.querySelector(".uzId15");
uzId16 = document.querySelector(".uzId16");
uzId17 = document.querySelector(".uzId17");

uzId1.style.display = "none";
uzId2.style.display = "none";
uzId3.style.display = "none";
uzId4.style.display = "none";
uzId5.style.display = "none";
uzId6.style.display = "none";
uzId7.style.display = "none";
uzId8.style.display = "none";
uzId9.style.display = "none";
uzId10.style.display = "none";
uzId11.style.display = "none";
uzId12.style.display = "none";
uzId13.style.display = "none";
uzId13_2.style.display = "none";
uzId14.style.display = "none";
uzId15.style.display = "none";
uzId16.style.display = "none";
uzId17.style.display = "none";

buttonADDuz.addEventListener("click", () => {
  // selectTypeUz.selectedIndex = 4
  switch (selectTypeUz.selectedIndex) {
    case 0:
      console.log("Тип УЗ не выбран");
      break;
    case 1:
      uzId1.style.display = "block";
      console.log("1");
      break;
    case 2:
      uzId2.style.display = "block";
      console.log("2");
      break;
    case 3:
      uzId3.style.display = "block";
      console.log("3");
      break;
    case 4:
      uzId4.style.display = "block";
      console.log("3");
      break;
    case 5:
      uzId5.style.display = "block";
      console.log("3");
      break;
    case 6:
      uzId6.style.display = "block";
      console.log("3");
      break;
    case 7:
      uzId7.style.display = "block";
      console.log("3");
      break;
    case 8:
      uzId8.style.display = "block";
      console.log("3");
      break;
    case 9:
      uzId9.style.display = "block";
      uzId10.style.display = "block";
      uzId11.style.display = "block";
      console.log("3");
      break;
    case 10:
      uzId12.style.display = "block";
      console.log("3");
      break;
    case 11:
      uzId13.style.display = "block";
      uzId13_2.style.display = "block";
      console.log("3");
      break;
    case 12:
      uzId14.style.display = "block";
      console.log("3");
      break;
    case 13:
      uzId15.style.display = "block";
      console.log("3");
      break;
    case 14:
      uzId16.style.display = "block";
      console.log("3");
      break;
    case 15:
      uzId17.style.display = "block";
      console.log("3");
      break;

    default:
      console.log("Тип УЗ не выбран");
      break;
  }
});

selectTypeArm = document.querySelector(".selectTypeArm");
buttonADDarm = document.querySelector(".buttonADDarm");

armId1 = document.querySelector(".armId1");
armId2 = document.querySelector(".armId2");
armId3 = document.querySelector(".armId3");
armId4 = document.querySelector(".armId4");
armId5 = document.querySelector(".armId5");

armId1.style.display = "none";
armId2.style.display = "none";
armId3.style.display = "none";
armId4.style.display = "none";
armId5.style.display = "none";

buttonADDarm.addEventListener("click", () => {
  // selectTypeUz.selectedIndex = 4
  switch (selectTypeArm.selectedIndex) {
    case 0:
      console.log("Тип АРМ не выбран");
      break;
    case 1:
      armId1.style.display = "block";
      console.log("1");
      break;
    case 2:
      armId2.style.display = "block";
      console.log("2");
      break;
    case 3:
      armId3.style.display = "block";
      console.log("3");
      break;
    case 4:
      armId4.style.display = "block";
      console.log("3");
      break;
    case 5:
      armId5.style.display = "block";
      console.log("3");
      break;

    default:
      console.log("Тип АРМ не выбран");
      break;
  }
});

// Дубрирование табельного номера
let inputIN = document.querySelector(".cardNumber");
let inputOUT = document.querySelector(".cardNumberID");

inputIN.oninput = function () {
  inputOUT.value = inputIN.value;
  //console.log(inputOUT.value) //(Проверка дублирования)
};

// Дублирование и сокращение ФИО
const nameIN = document.querySelector(".nameInput");
const nameShortOUT = document.querySelector(".fullNameInput");

function initials(str) {
  return str
    .split(/\s+/)
    .map((w, i) => (i ? w.substring(0, 1).toUpperCase() + "." : w))
    .join(" ");
}

nameIN.oninput = function () {
  // nameShortOUT.value = nameIN.value;
  // Клепча Эдуард Алексеевич
  nameShortOUT.value = initials(nameIN.value);
  // console.log(initials(nameIN.value)) //(Проверка сокращение ФИО)
};

// Валидация номера телефона
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});