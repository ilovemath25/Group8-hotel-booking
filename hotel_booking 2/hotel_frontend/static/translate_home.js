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
   //title-body
   const about3 = document.querySelector("div.about-title-body");
   const room3 = document.querySelector("div.room-title-body");
   const promo3 = document.querySelector("div.promo-title-body");
   //welcome
   const welcome = document.querySelector("div.welcome-text");
   const w1 = welcome.querySelector("p.w1");
   const w2 = welcome.querySelector("h1.w2");
   const w3 = welcome.querySelector("p.w3");
   //book button
   const book3 = document.querySelectorAll("a.book-now-button");
   //about content
   const a1 = document.querySelector('div.about-hotel-content-body1');
   const a2 = document.querySelector('div.about-hotel-content-body2');
   //promo content
   const p1 = document.querySelector('div.promotion-1');
   const p1s = p1.querySelector('strong');const p1p = p1.querySelector('p');
   const p2 = document.querySelector('div.promotion-2');
   const p2s = p2.querySelector('strong');const p2p = p2.querySelector('p');
   const p3 = document.querySelector('div.promotion-3');
   const p3s = p3.querySelector('strong');const p3p = p3.querySelector('p');
   const p4 = document.querySelector('div.promotion-4');
   const p4s = p4.querySelector('strong');const p4p = p4.querySelector('p');
   const p5 = document.querySelector('div.promotion-5');
   const p5s = p5.querySelector('strong');const p5p = p5.querySelector('p');
   //room type
   const r1 = document.querySelector('div.room-index').innerHTML;
   const r2 = document.querySelector('div.room-type');
   const r3 = document.querySelector('div.description-room');
   var data_language={
      'English':[
         'Room','Book now','Promotion','About', //0 1 2 3
         //4
         'WELCOME TO Hotel Group VIII, A LUXURY COMFORT HOTEL, TAIPEI', 
         //5
         'Discover our 8 star historic hotel in the center of TAIPEI', 
         //6
         'Our exquisite accommodations redefine hospitality, offering a perfect blend of elegance and modern convenience. Immerse yourself in a world of unparalleled service, stylish design, and personalized experiences. At Hotel Group VIII, each stay is a journey into refined living, ensuring a memorable and indulgent escape for every guest.',
         //7
         "Luxe Simplicity at Group VIII Residences Immerse in opulent living at Group VIII Residences, where our user-friendly website, designed for ages 18-45, ensures a seamless booking experience. Whether you're a frequent traveler, business pro, or vacation enthusiast, simplicity meets sophistication in every detail.",
         //8
         "Panoramic Views and Rooftop Splendor Step into your room adorned with Eastern and Western touches, inspired by Sung Dynasty art. Gazing from the 43rd floor, the Taipei 101 tower graces the skyline, offering an enthralling city panorama. Unique to the hotel, the spectacular rooftop enhances your opulent stay at Group VIII Residences, promising a blend of luxury and breathtaking views.",
         //9 10
         'Exclusive Solo Retreat Special',
         'Book a Single Room and enjoy a 15% discount on your stay! Experience the perfect blend of tranquility and comfort in our cozy single rooms.',
         //11 12
         'Twin Delight Package',
         'Book a Twin Room for you and a companion and receive a complimentary room upgrade! Revel in the spacious and stylish surroundings of our double rooms at no extra cost.',
         //13 14
         "Queen's Retreat Experience",
         'Indulge in luxury with a stay in our Queen Room and receive a complimentary spa voucher for a truly regal experience. Pamper yourself in style and comfort during your royal retreat.',
         //15 16
         "King's Grand Getaway",
         'Book our King Room and enjoy a complimentary gourmet dinner for two at our exquisite onsite restaurant. Experience the grandeur of our spacious rooms and savor a delightful culinary journey.',
         //17 18
         'Extended Royalty Stay',
         'Extend your royal stay! Book any room type for three nights and get the fourth night free. Experience an extended period of luxury and comfort in our thoughtfully designed accommodations.',
         //19 20
         "King Room",
         "Indulge in the epitome of luxury with our king room, a spacious and grand accommodation option designed for the most discerning guests. The room features a majestic king-sized bed, offering unparalleled comfort and a truly regal sleeping experience. The expansive layout provides ample room to unwind, and the upscale furnishings and decor add an air of sophistication. Ideal for couples seeking a romantic escape or individuals desiring the utmost in comfort, the king room sets the standard for a lavish and memorable stay. Immerse yourself in the grandeur of this opulent retreat.",
         //21 22
         "Queen Room",
         "Step into luxury with our queen room, a tastefully designed space that exudes elegance and comfort. The room boasts a plush queen-sized bed, offering a regal sleeping experience for guests. The sophisticated decor, coupled with premium furnishings, adds a touch of opulence to the ambiance. Whether you're a couple on a romantic getaway or an individual seeking a bit more space, the queen room is tailored to meet your expectations. Revel in the lavish surroundings and enjoy the perfect blend of style and relaxation during your stay.",
         //23 24
         "Twin Room",
         "Our twin room is a versatile and spacious accommodation option, perfect for couples or friends traveling together. Featuring a well-appointed layout with two twin beds or a double bed, this room is designed to provide both comfort and convenience. The modern furnishings and thoughtful touches create a harmonious ambiance, making it an excellent choice for those who appreciate a balance of style and functionality. With ample space and thoughtful amenities, the double room ensures a delightful stay for guests seeking a shared experience.",
         //25 26
         'Single Room',
         "The single room is a cozy and intimate space designed for solo travelers or those seeking a peaceful retreat. Furnished with a comfortable single bed, the room offers a perfect blend of functionality and comfort. A compact work desk provides a dedicated space for business travelers, while the tasteful decor creates a welcoming atmosphere. The single room is an ideal choice for individuals looking for a quiet and private haven during their stay, offering all the essential amenities for a comfortable experience.",
      ],
      'Chinese':[
         '房間',' 立即預訂','促銷','關於', //0 1 2 3
         //4
         '歡迎來到第八集飯店集團，位於台北的豪華舒適飯店', 
         //5
         '探索我們位於台北市中心的八星級歷史悠久的飯店', 
         //6
         '我們精緻的住宿重新定義了款待，提供了優雅和現代便利的完美結合。 沉浸於無與倫比的服務、時尚設計和個人化體驗之中。 在第八集酒店，每一次入住都是對精緻生活的探索，為每位客人提供一個令人難忘且奢華的度假體驗。',
         //7
         "全景美景和屋頂輝煌: 步入您的房間, 裝飾著東方和西方的元素, 靈感來自宋代藝術。從第43層眺望, 台北101塔點綴天際線, 呈現令人著迷的城市全景。酒店獨有的壯麗屋頂提升了您在八號團體住所的奢華住宿體驗，承諾豪華與令人屏息的景觀融合。",
         //8
         "八號團體住所的奢華簡約風格：在八號團體住所，沉浸於奢華生活, 我們針對18至45歲設計的用戶友好型網站, 確保無縫的預訂體驗。無論您是頻繁旅行者、商務精英還是度假愛好者，每個細節都融合了簡約與精致，帶來極致的舒適體驗。",
         //9 10
         '獨家獨行度假特惠',
         '預訂單人房, 即享受住宿85折優惠! 在我們溫馨的單人房中體驗寧靜與舒適的完美結合。',
         //11 12
         '雙人愉悅套餐',
         '預訂雙人房，您和同伴可獲得免費房型升級！在我們寬敞且時尚的雙人房中盡情享受，無需額外費用。',
         //13 14
         '皇后度假體驗',
         '入住中床房，即可獲得免費的水療禮券，享受真正尊貴的體驗。在您的皇家度假中以時尚和舒適的方式撫慰自己。',
         //15 16
         '大床豪華假期',
         '預訂大床房，即可獲得兩人免費的精緻晚餐，品味我們豪華房間的宏偉感，品味一場愉悅的美食之旅。',
         //17 18
         '延長皇室之旅',
         '延長您的皇室住宿體驗！預訂任何房型三晚，第四晚免費。在我們精心設計的住宿中，享受更長時間的奢華和舒適。',
         
         //19 20
         "大床房",
         "盡情沉浸在我們的大床房中，這是一個為最具鑑賞力的客人設計的寬敞而宏偉的住宿選擇。房間配有壯觀的大床，提供無與倫比的舒適和真正尊貴的睡眠體驗。寬敞的布局提供了足夠的空間供您放鬆，高檔的家具和裝飾增添了一種精緻感。無論是尋找浪漫度假的夫妻還是渴望最大程度舒適的個人，大床房為奢華而難忘的入住體驗設定了標準。沉浸在這個華麗的休息胜地中。",
         //21 22
         "中床房",
         "走進我們的中床房，這是一個設計優雅、充滿舒適感的空間。房間擁有一張豪華的皇后大小床，為客人提供尊貴的睡眠體驗。精致的裝飾，再加上高級的家具，為環境增添了一抹奢華。無論您是一對正在度假的夫妻還是尋求更多空間的個人，中床房都是為滿足您期望而量身打造的。沉浸在豪華的環境中，享受風格和放鬆的完美融合。",
         //23 24
         "雙人房",
         "我們的雙人房是一個多功能而寬敞的住宿選擇，非常適合一起旅行的情侶或朋友。擁有兩張單人床或一張雙人床的房間，旨在提供舒適和便利的完美結合。現代家具和周到的裝飾營造出和諧的氛圍，使其成為那些欣賞風格和功能平衡的人的絕佳選擇。雙人房具有足夠的空間和周到的設施，確保旅客共享美好體驗。",
         //25 26
         "單人房",
         "單人房是一個舒適而私密的空間，專為獨自旅行者或尋求寧靜撤退的人而設計。配有舒適的單人床，房間提供了功能和舒適的完美結合。一個簡潔的工作桌為商務旅行者提供了專用的空間，而雅致的裝飾創造了一個溫馨的氛圍。單人房是那些尋找安靜和私密庇護所的人的理想之選，提供了所有必要的便利設施，以確保舒適的入住體驗。",
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

         room3.innerHTML = data_language[att1][0];
         promo3.innerHTML = data_language[att1][2];
         about3.innerHTML = data_language[att1][3];

         w1.innerHTML = data_language[att1][4];
         w2.innerHTML = data_language[att1][5];
         w3.innerHTML = data_language[att1][6];

         a1.innerHTML = data_language[att1][7];
         a2.innerHTML = data_language[att1][8];
         book3[0].innerHTML = data_language[att1][1];
         book3[1].innerHTML = data_language[att1][1];

         p1s.innerHTML = data_language[att1][9];
         p1p.innerHTML = data_language[att1][10];
         p2s.innerHTML = data_language[att1][11];
         p2p.innerHTML = data_language[att1][12];
         p3s.innerHTML = data_language[att1][13];
         p3p.innerHTML = data_language[att1][14];
         p4s.innerHTML = data_language[att1][15];
         p4p.innerHTML = data_language[att1][16];
         p5s.innerHTML = data_language[att1][17];
         p5p.innerHTML = data_language[att1][18];

         if(r1==1){
            r2.innerHTML = data_language[att1][19];
            r3.innerHTML = data_language[att1][20];
         }
         else if(r1==2){
            r2.innerHTML = data_language[att1][21];
            r3.innerHTML = data_language[att1][22];
         }
         else if(r1==3){
            r2.innerHTML = data_language[att1][23];
            r3.innerHTML = data_language[att1][24];
         }
         else if(r1==4){
            r2.innerHTML = data_language[att1][25];
            r3.innerHTML = data_language[att1][26];
         }
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

         room3.innerHTML = data_language[att2][0];
         promo3.innerHTML = data_language[att2][2];
         about3.innerHTML = data_language[att2][3];

         w1.innerHTML = data_language[att2][4];
         w2.innerHTML = data_language[att2][5];
         w3.innerHTML = data_language[att2][6];

         a1.innerHTML = data_language[att2][7];
         a2.innerHTML = data_language[att2][8];
         book3[0].innerHTML = data_language[att2][1];
         book3[1].innerHTML = data_language[att2][1];

         p1s.innerHTML = data_language[att2][9];
         p1p.innerHTML = data_language[att2][10];
         p2s.innerHTML = data_language[att2][11];
         p2p.innerHTML = data_language[att2][12];
         p3s.innerHTML = data_language[att2][13];
         p3p.innerHTML = data_language[att2][14];
         p4s.innerHTML = data_language[att2][15];
         p4p.innerHTML = data_language[att2][16];
         p5s.innerHTML = data_language[att2][17];
         p5p.innerHTML = data_language[att2][18];

         if(r1==1){
            r2.innerHTML = data_language[att2][19];
            r3.innerHTML = data_language[att2][20];
         }
         else if(r1==2){
            r2.innerHTML = data_language[att2][21];
            r3.innerHTML = data_language[att2][22];
         }
         else if(r1==3){
            r2.innerHTML = data_language[att2][23];
            r3.innerHTML = data_language[att2][24];
         }
         else if(r1==4){
            r2.innerHTML = data_language[att2][25];
            r3.innerHTML = data_language[att2][26];
         }
         localStorage.setItem("currLang",att2);
      });
   });
}
language();