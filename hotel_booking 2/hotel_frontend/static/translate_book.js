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
   //book content
   const gname = document.querySelector('p.name-text');
   const rtype = document.querySelector('p.room-text');
   const cin = document.querySelector('p.cin-text');
   const cout = document.querySelector('p.cout-text');
   const cinfo = document.querySelector('p.cinfo-text');
   const bookbutton = document.querySelector('input.confirm-book-button');
   var data_language={
      'English':[
         'Room','Book now','Promotion','About',
         'Guess Name :','Select Room Type :','Check-In Date :','Check-Out Date :','Contact Information :','Confirm Book',
         'Book Confirmed','Back',
      ],
      'Chinese':[
         '房間',' 立即預訂','促銷','關於',
         '姓名 :', '選擇房型 :', '入住日期 :', '退房日期 :', '聯絡資訊 :', '確認預訂',
         '預訂已確認','返回',
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

         gname.innerHTML = data_language[att1][4];
         rtype.innerHTML = data_language[att1][5];
         cin.innerHTML = data_language[att1][6];
         cout.innerHTML = data_language[att1][7];
         cinfo.innerHTML = data_language[att1][8];
         bookbutton.value = data_language[att1][9];
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

         gname.innerHTML = data_language[att2][4];
         rtype.innerHTML = data_language[att2][5];
         cin.innerHTML = data_language[att2][6];
         cout.innerHTML = data_language[att2][7];
         cinfo.innerHTML = data_language[att2][8];
         bookbutton.value = data_language[att2][9];

         localStorage.setItem("currLang",att2);
      });
   });
}
language();