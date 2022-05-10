import './Info.css';
import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="info" className="info">
      <div className="container">
        <div className="info__inner">
          <button id="info-left" className="info__title opasity">Tahlil</button>
          <button id="info-right" className="info__title">Texnik xususiyatlari</button>
          <span id="info-slide" className="info__back"></span>
        </div>
        <div id="info-text">
          <p className="info__text">Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq quvvatidan foydalanib, grafikani talab qiladigan dasturlar va o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun 16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham ixcham, lekin hozir u ancha kuchliroq.</p>
        </div>
        <div id="info-next" className="none">
          <p>Ekran: 13,3 "(2560x1600)</p>
          <p>Matritsa: IPS</p>
          <p>Protsessor: Apple M1 (8x3200 MGts)</p>
          <p>Video karta: Apple grafikasi 8 yadroli, Apple grafikasi 7 yadroli</p>
          <p>Ulagichlar: Mikrofon / naushniklar kombinatsiyasi, Thunderbolt / USB 4 x 2</p>
          <p>USB Type-C funktsiyasi: Quvvatni etkazib berish, Thunderbolt 3, Thunderbolt 4</p>
          <p>Simsiz interfeyslar: Wi-Fi 802.11ax, Bluetooth 5.0</p>
          <p>Batareya quvvati: 49,9 Wh</p>
          <p>Ish vaqti: 18 soat</p>
          <p>Operatsion tizim: macOS</p>
          <p>Hajmi: 304.1x212.4x16.1 mm</p>
          <p>Og'irligi: 1,29 kg</p></div>
      </div>
    </section>
    );
  }
}

// const infoLeft = document.getElementById("info-left");
// const infoRight = document.getElementById("info-right");
// const infoSlide = document.getElementById("info-slide");
// const infoTextOne = document.getElementById("info-text");
// const infoTextTwo = document.getElementById("info-next");

// infoRight.addEventListener("click", ()=> {
//   infoSlide.style.transform = `translateX(${590}px)`;
//   infoRight.classList.add("opasity");
//   infoLeft.classList.remove("opasity");
//   infoTextOne.style.display = "none";
//   infoTextTwo.style.display = "block";
// })
// infoLeft.addEventListener("click", ()=> {
//   infoSlide.style.transform = `translateX(${0}px)`;
//   infoRight.classList.remove("opasity");
//   infoLeft.classList.add("opasity");
//   infoTextOne.style.display = "block";
//   infoTextTwo.style.display = "none";
// })


// const helpBtn = document.getElementById("help-btn");
// const helpBox = document.getElementById("help-box");

// let sum = 0;

// helpBtn.addEventListener("click", ()=> {
//   helpBox.style.display = "flex";
//   sum++

//   if(sum % 2 == 0) {
//     helpBox.style.display = "none";
//   }
// })
export default Info;
