function language(){
   if(!localStorage.getItem('currLang')) {
      localStorage.setItem('currLang', 'English');
   };
   const currLang = localStorage.getItem("currLang");
   const langEl = document.querySelector("ul.lang-menu");
   const link = langEl.querySelectorAll("a");
   //menu
   const menu1 = document.querySelector("div.menu-nav-bar");
   const room1 = menu1.querySelector("a.room");
   const booknow1 = menu1.querySelector("a.book-now");
   const promo1 = menu1.querySelector("a.promotion");
   const about1 = menu1.querySelector("a.about");
   //menu-left
   const menu2 = document.querySelector("div.menu-nav-bar-left");
   const room2 = menu2.querySelector("a.room");
   const booknow2 = menu2.querySelector("a.book-now");
   const promo2 = menu2.querySelector("a.promotion");
   const about2 = menu2.querySelector("a.about");
   const button = document.querySelector("div.lang-button");
   //success
   const successtext = document.querySelector('div.confirm-text-success');
   const successbutton = document.querySelector('a.confirm-book-button-success');
   var data_language={
      'English':[
         'Room','Book now','Promotion','About','Book Confirmed','Back',
      ],
      'Chinese':[
         '房間',' 立即預訂','促銷','關於','預訂已確認','返回',
      ]
   };
   link.forEach(el => {
      const att1 = el.getAttribute('language');
      console.log(data_language);
      if (att1===currLang){
         el.classList.add('active');
         button.innerHTML = att1;

         room1.innerHTML = data_language[att1][0];
         booknow1.innerHTML = data_language[att1][1];
         promo1.innerHTML = data_language[att1][2];
         about1.innerHTML = data_language[att1][3];

         room2.innerHTML = data_language[att1][0];
         booknow2.innerHTML = data_language[att1][1];
         promo2.innerHTML = data_language[att1][2];
         about2.innerHTML = data_language[att1][3];
         
         successtext.innerHTML = data_language[att1][4];
         successbutton.innerHTML = data_language[att1][5];
      }
   });
   link.forEach(el => {
      el.addEventListener('click',() => {
         langEl.querySelector('.active').classList.remove('active');
         el.classList.add('active');
         const att2 = el.getAttribute('language');
         button.innerHTML = att2;

         room1.innerHTML = data_language[att2][0];
         booknow1.innerHTML = data_language[att2][1];
         promo1.innerHTML = data_language[att2][2];
         about1.innerHTML = data_language[att2][3];

         room2.innerHTML = data_language[att2][0];
         booknow2.innerHTML = data_language[att2][1];
         promo2.innerHTML = data_language[att2][2];
         about2.innerHTML = data_language[att2][3];
         
         successtext.innerHTML = data_language[att2][10];
         successbutton.innerHTML = data_language[att2][11];
         localStorage.setItem("currLang",att2);
      });
   });
}
language();