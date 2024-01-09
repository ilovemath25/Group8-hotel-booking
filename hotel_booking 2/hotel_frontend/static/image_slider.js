const imageContainer = document.querySelector('.image-container');
const imageControlsContainer = document.querySelector('.image-controls');
const imageControls = ['prev','next'];
const imageItems = document.querySelectorAll('.image-item');
const imageIndex = [1,2,3,4];
const currLang = localStorage.getItem("currLang");
class Carousel {
   constructor(container, items, controls, index){
      this.carouselContainer = container;
      this.carouselControls = controls;
      this.carouselArray = [...items];
      this.carouselIndex = index;
   }
   change_description(){
      const currentIndex = this.carouselIndex[0];
      if(currentIndex==1){
         document.querySelector('div.room-index').innerHTML = currentIndex;
         if(currLang=='English'){
            document.querySelector('div.room-type').innerHTML = 'King Room';
            document.querySelector('div.description-room').innerHTML = "Indulge in the epitome of luxury with our king room, a spacious and grand accommodation option designed for the most discerning guests. The room features a majestic king-sized bed, offering unparalleled comfort and a truly regal sleeping experience. The expansive layout provides ample room to unwind, and the upscale furnishings and decor add an air of sophistication. Ideal for couples seeking a romantic escape or individuals desiring the utmost in comfort, the king room sets the standard for a lavish and memorable stay. Immerse yourself in the grandeur of this opulent retreat.";
         }
         else{
            document.querySelector('div.room-type').innerHTML = '大床房';
            document.querySelector('div.description-room').innerHTML = "盡情沉浸在我們的大床房中，這是一個為最具鑑賞力的客人設計的寬敞而宏偉的住宿選擇。房間配有壯觀的大床，提供無與倫比的舒適和真正尊貴的睡眠體驗。寬敞的布局提供了足夠的空間供您放鬆，高檔的家具和裝飾增添了一種精緻感。無論是尋找浪漫度假的夫妻還是渴望最大程度舒適的個人，大床房為奢華而難忘的入住體驗設定了標準。沉浸在這個華麗的休息胜地中。";
         }
      }
      else if(currentIndex==2){
         document.querySelector('div.room-index').innerHTML = currentIndex;
         if(currLang=='English'){
            document.querySelector('div.room-type').innerHTML = 'Queen Room';
            document.querySelector('div.description-room').innerHTML = "Step into luxury with our queen room, a tastefully designed space that exudes elegance and comfort. The room boasts a plush queen-sized bed, offering a regal sleeping experience for guests. The sophisticated decor, coupled with premium furnishings, adds a touch of opulence to the ambiance. Whether you're a couple on a romantic getaway or an individual seeking a bit more space, the queen room is tailored to meet your expectations. Revel in the lavish surroundings and enjoy the perfect blend of style and relaxation during your stay.";
         }
         else{
            document.querySelector('div.room-type').innerHTML = '中床房';
            document.querySelector('div.description-room').innerHTML = "走進我們的中床房，這是一個設計優雅、充滿舒適感的空間。房間擁有一張豪華的皇后大小床，為客人提供尊貴的睡眠體驗。精致的裝飾，再加上高級的家具，為環境增添了一抹奢華。無論您是一對正在度假的夫妻還是尋求更多空間的個人，中床房都是為滿足您期望而量身打造的。沉浸在豪華的環境中，享受風格和放鬆的完美融合。";
         }
      }
      else if(currentIndex==3){
         document.querySelector('div.room-index').innerHTML = currentIndex;
         if(currLang=='English'){
            document.querySelector('div.room-type').innerHTML = 'Twin Room';
            document.querySelector('div.description-room').innerHTML = "Our twin room is a versatile and spacious accommodation option, perfect for couples or friends traveling together. Featuring a well-appointed layout with two twin beds or a double bed, this room is designed to provide both comfort and convenience. The modern furnishings and thoughtful touches create a harmonious ambiance, making it an excellent choice for those who appreciate a balance of style and functionality. With ample space and thoughtful amenities, the double room ensures a delightful stay for guests seeking a shared experience.";
         }
         else{
            document.querySelector('div.room-type').innerHTML = '雙人房';
            document.querySelector('div.description-room').innerHTML = "我們的雙人房是一個多功能而寬敞的住宿選擇，非常適合一起旅行的情侶或朋友。擁有兩張單人床或一張雙人床的房間，旨在提供舒適和便利的完美結合。現代家具和周到的裝飾營造出和諧的氛圍，使其成為那些欣賞風格和功能平衡的人的絕佳選擇。雙人房具有足夠的空間和周到的設施，確保旅客共享美好體驗。";
         }
      }
      else if(currentIndex==4){
         document.querySelector('div.room-index').innerHTML = currentIndex;
         if(currLang=='English'){
            document.querySelector('div.room-type').innerHTML = 'Single Room';
            document.querySelector('div.description-room').innerHTML = "The single room is a cozy and intimate space designed for solo travelers or those seeking a peaceful retreat. Furnished with a comfortable single bed, the room offers a perfect blend of functionality and comfort. A compact work desk provides a dedicated space for business travelers, while the tasteful decor creates a welcoming atmosphere. The single room is an ideal choice for individuals looking for a quiet and private haven during their stay, offering all the essential amenities for a comfortable experience.";
         }
         else{
            document.querySelector('div.room-type').innerHTML = '單人房';
            document.querySelector('div.description-room').innerHTML = "單人房是一個舒適而私密的空間，專為獨自旅行者或尋求寧靜撤退的人而設計。配有舒適的單人床，房間提供了功能和舒適的完美結合。一個簡潔的工作桌為商務旅行者提供了專用的空間，而雅致的裝飾創造了一個溫馨的氛圍。單人房是那些尋找安靜和私密庇護所的人的理想之選，提供了所有必要的便利設施，以確保舒適的入住體驗。";
         }
      }
   }
   updateImage(){
      this.carouselArray.forEach(el => {
         el.classList.remove('image-item-1');
         el.classList.remove('image-item-2');
         el.classList.remove('image-item-3');
         el.classList.remove('image-item-4');
      });
      this.carouselArray.slice(0,4).forEach((el,i) => {
         el.classList.add(`image-item-${i+1}`);
      });
   }
   setCurrentState(direction){
      if(direction.className == 'image-controls-prev'){
         this.carouselArray.unshift(this.carouselArray.pop());
         imageIndex.unshift(imageIndex.pop());
      }else{
         this.carouselArray.push(this.carouselArray.shift());
         imageIndex.push(imageIndex.shift());
      }
      this.updateImage();
      this.change_description();
   }
   useControls(){
      const triggers = [...imageControlsContainer.childNodes];
      triggers.forEach(control => {
         control.addEventListener('click', e => {
            e.preventDefault();
            this.setCurrentState(control);
         });
      });
   }
}
const exampleCarousel = new Carousel(imageContainer,imageItems,imageControls,imageIndex);
exampleCarousel.useControls();