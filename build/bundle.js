(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var t=e.g.document;if(!a&&t&&(t.currentScript&&(a=t.currentScript.src),!a)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!a;)a=n[r--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=function(e){const a=document.createElement(`${e.tagName}`);return e.className&&a.classList.add(`${e.className}`),e.text&&(a.innerHTML=`${e.text}`),a},t=class{constructor(e,a){this._container=document.createElement(e),a&&(this._container.className=a)}render(){return this._container}};class n extends t{constructor(){super("header"),n.textObject={headline:"Brooklyn Public Library",nLink:["About","Favorites","Coffee shop","Contacts","Library Card"]}}_createHeader(){const e=a({tagName:"section",className:"header_container"}),t=a({tagName:"h1",text:n.textObject.headline}),r=a({tagName:"div",className:"nav_wrapper"}),s=a({tagName:"nav"}),i=a({tagName:"ul"}),o=a({tagName:"button",className:"profile-btn"}),c=a({tagName:"button",className:"burger-btn"}),p=a({tagName:"div",className:"burger"});n.textObject.nLink.forEach((e=>{const t=a({tagName:"li"}),n=a({tagName:"a",text:e});n.href=`#${e.toLocaleLowerCase()}`,t.append(n),i.append(t),p.append(t.cloneNode(!0))})),o.append(A.profileIcon),e.append(t),e.append(r),s.append(i),r.append(s),r.append(o),r.append(c),r.append(p),c.onclick=()=>{p.classList.toggle("burger-active"),c.classList.toggle("burger-btn-active"),document.body.onclick=null,setTimeout((()=>{document.body.onclick=()=>{p.classList.contains("burger-active")&&(p.classList.toggle("burger-active"),c.classList.toggle("burger-btn-active")),document.body.onclick=null}}))},this._container.append(e)}render(){return this._createHeader(),this._container}}const r=n,s=e.p+"./assets/img/icon_profile.svg",i=class extends t{constructor(e){super("div","headline-wrapper");const t=a({tagName:"h2",text:e}),n=a({tagName:"div",className:"line"});this._container.append(t),this._container.append(n)}},o=e.p+"./assets/img/image_1.png",c=e.p+"./assets/img/image_2.png",p=e.p+"./assets/img/image_3.png",d=e.p+"./assets/img/image_4.png",l=e.p+"./assets/img/image_5.png",m=(e,a,t)=>{const n=t.parentElement,r=a.children[e].offsetWidth,s=parseInt(window.getComputedStyle(a.children[e]).marginRight,10),i=window.innerWidth>1024?e-1:e;a.style.cssText=`\n      transform: translateX(-${(s+r)*i}px);\n    `,Array.from(n.children).forEach((e=>e.classList.remove("active"))),t.classList.add("active"),g.currentSlideNum=e};class h extends t{constructor(){super("section","about"),this._container.id="about",h.currentSlideNum=window.innerWidth>1024?1:0}imgs=[o,c,p,d,l].map((e=>{const a=new Image;return a.src=e,a.alt="img",a}));_elem={text:a({tagName:"p",text:"The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside"}),imageWrapper:a({tagName:"div",className:"img-wrapper"}),leftBtn:a({tagName:"button",className:"leftBtn"}),rightBtn:a({tagName:"button",className:"rightBtn"}),carouselContainer:a({tagName:"div",className:"carousel-container"}),carouselContainerWrap:a({tagName:"div",className:"carousel-container-wrapper"}),carouselPaginationWrap:a({tagName:"div",className:"carousel-pagination-wrapper"}),rangesBtn:this.imgs.map(((e,t)=>{const n=a({tagName:"div",className:"range"});return n.onclick=()=>{m(t,this._elem.imageWrapper,n)},n}))};_createSection(){this.imgs.forEach(((e,a,t)=>{this._elem.imageWrapper.append(e),window.innerWidth>1024&&0!==a&&a!==t.length-1&&(this._elem.rangesBtn[h.currentSlideNum].classList.toggle("active"),this._elem.carouselPaginationWrap.append(this._elem.rangesBtn[a])),window.innerWidth<=1024&&(this._elem.rangesBtn[h.currentSlideNum].classList.toggle("active"),this._elem.carouselPaginationWrap.append(this._elem.rangesBtn[a]))})),this._elem.leftBtn.onclick=()=>{const e=h.currentSlideNum-1;(e>=0&&window.innerWidth<1024||e>0)&&m(e,this._elem.imageWrapper,this._elem.rangesBtn[e])},this._elem.rightBtn.onclick=()=>{const e=h.currentSlideNum+1;(e<=this.imgs.length-1&&window.innerWidth<1024||e<this.imgs.length-1)&&m(e,this._elem.imageWrapper,this._elem.rangesBtn[e])},this._container.append(new i("About").render()),this._container.append(this._elem.text),this._elem.carouselContainer.append(this._elem.imageWrapper),this._elem.carouselContainerWrap.append(this._elem.leftBtn),this._elem.carouselContainerWrap.append(this._elem.carouselContainer),this._elem.carouselContainerWrap.append(this._elem.rightBtn),this._container.append(this._elem.carouselContainerWrap),this._container.append(this._elem.carouselPaginationWrap)}render(){return this._createSection(),this._container}}const g=h,u=class extends t{constructor(){super("section","welcome")}_createSection(){const e=a({tagName:"div",className:"text-wrapper"});e.insertAdjacentHTML("beforeend","\n      <p>Welcome</p>\n      <br>\n      <p>to the Brooklyn</p>\n      <br>\n      <p>Library</p>\n    "),this._container.append(e)}render(){return this._createSection(),this._container}},_=class extends t{constructor(e){super("div","book"),this._book=e}_createBook(){const e=a({tagName:"h3",className:"headline_book",text:"Staff Picks"}),t=a({tagName:"h3",className:"book-name_book",text:this._book.name}),n=a({tagName:"h3",className:"book-author_book",text:`By ${this._book.author}`}),r=a({tagName:"p",className:"description_book",text:this._book.description}),s=b.bookId.includes(this._book.id)?"Own":"Buy",i=a({tagName:"button",className:"btn",text:s});b.bookId.includes(this._book.id)&&(i.disabled=!0,i.classList.add("active-btn"));const o=new Image;o.classList.add("cover"),o.src=this._book.src,o.alt="cover",this._container.append(e),this._container.append(t),this._container.append(n),this._container.append(r),this._container.append(i),this._container.append(o)}render(){return this._createBook(),this._container}},f=[{id:1,name:"The Book Eaters",author:"Sunyi Dean",description:"An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       ",src:e.p+"./assets/img/TheBookEatersBySunyiDean.png"},{id:2,name:"Cackle",author:"Rachel Harrison",description:"Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.",src:e.p+"./assets/img/CackleByRachelHarrison.png"},{id:3,name:"Dante: Poet of the Secular World",author:"Erich Auerbach",description:"Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",src:e.p+"./assets/img/Dante-PoetoftheSecularWorldByErichAuerbach.png"},{id:4,name:"The Last Queen",author:"Clive Irving",description:"A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.",src:e.p+"./assets/img/TheLastQueenByCliveIrving.png"}];class N extends t{constructor(){super("section","favorites"),N.bookId=[4],this._container.id="favorites"}_createSection(){const e=a({tagName:"form",className:"weather-filter"}),t=a({tagName:"div",className:"books-wrapper"});["Winter","Spring","Summer","Autumn"].forEach(((t,n)=>{const r=a({tagName:"input"}),s=a({tagName:"label",text:t}),i=a({tagName:"div",className:"weather-input-wrapper"});s.setAttribute("for",t.toLocaleLowerCase()),n||(r.checked=!0),r.setAttribute("type","radio"),r.setAttribute("name","weather"),r.setAttribute("value",t.toLocaleLowerCase()),r.setAttribute("id",t.toLocaleLowerCase()),i.append(r),i.append(s),e.append(i)})),this._container.append(new i("Favorites").render()),this._container.append(a({tagName:"h3",text:"Pick favorites of season"})),this._container.append(e),f.forEach((e=>t.append(new _(e).render()))),this._container.append(t)}render(){return this._createSection(),this._container}}const b=N,w=class extends t{constructor({menu:e,headline:a,side:t}){super("div","cafe-menu"),this.textObj={menu:e,headline:a,side:t},"right"===t?this._container.classList.add("right-side"):this._container.classList.add("left-side")}_createHTML(){this._container.append(a({tagName:"h2",text:this.textObj.headline})),this.textObj.menu.forEach((e=>{const[t,n]=e,r=a({tagName:"div",className:"offer-wrapper"}),s=a({tagName:"h3",text:t}),i=a({tagName:"p",text:`$${n}`}),o=a({tagName:"div",className:"line"});r.append(s),r.append(o),r.append(i),this._container.append(r)}))}render(){return this._createHTML(),this._container}},v=class extends t{constructor(){super("section","coffee-shop"),this._container.id="coffee shop"}_createSection(){const e=a({tagName:"p",className:"info_coffee-shop",text:"In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation.\n    you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery."});this._container.append(new i("Coffee Shop").render()),this._container.append(e);const t=a({tagName:"div",className:"menu-wrapper"});t.append(new w({headline:"Coffee & Tea",menu:[["Cold Brew Coffee",3],["French Press Pot",5],["Espresso",2],["Cappuccino",4],["Hot Tea",2],["Cold Tea",2]],side:"left"}).render()),t.append(new w({headline:"Desserts & Cakes",menu:[["Forest Gateau",16],["Blue Moon",16],["Truffle Cake",15],["Chocolate Cake",18],["Poet’s Dream Cake",16],["Pineapple Cake",14]],side:"right"}).render()),this._container.append(t)}render(){return this._createSection(),this._container}},y=class extends t{constructor(){super("section","contacts"),this._container.id="contacts"}_createSection(){const e=a({tagName:"div",className:"contacts-wrapper"}),t=a({tagName:"div",className:"contacts-block"}),n=a({tagName:"div",className:"map-block"}),r=new i("Our Contacts").render();r.id="contacts",t.insertAdjacentHTML("beforeend",'\n      <h4>For All Library Inquiries:</h4>\n      <p>\n        <a href="tel:+6177302370">Please Call (617) 730-2370</a>\n      </p>\n      <p>\n        <a href="tel:+6177302370">For TTY Service, Please Call (617) 730-2370</a>\n      </p>\n      <p>\n        <a href="tel:+6177302385">Putterham Library: (617) 730-2385</a>\n      </p>\n      <h4>Senior Staff</h4>\n      <p><a href="mailto:AmandaHirst@gmail.com">Library Director: <b>Amanda Hirst</b></a></p>\n    '),e.append(t),e.append(n),this._container.append(r),this._container.append(e)}render(){return this._createSection(),this._container}},k=class extends t{constructor(){super("div","login-wrapper")}_createComponent(){const e=a({tagName:"h3",text:"Brooklyn Public Library"}),t=a({tagName:"div",className:"login-container"}),n=a({tagName:"button",text:"Check the card",className:"btn"}),r=a({tagName:"input",className:"login-name"});r.type="text",r.placeholder="Reader's name";const s=a({tagName:"input",className:"login-num"});s.type="number",s.placeholder="Card number",t.append(e),t.append(r),t.append(s),this._container.append(t),this._container.append(n)}render(){return this._createComponent(),this._container}},x=class extends t{constructor(){super("section","library-cards"),this._container.id="library card"}_createLogin(){const e=a({tagName:"div",className:"login-container_library-cards"}),t=a({tagName:"h3",text:"Find your Library card",className:"library-card-text"});return e.append(t),e.append((new k).render()),this._container.append(new i("Digital Library Cards").render()),e}_createInfo(){const e=a({tagName:"div",className:"info-container_library-cards"}),t=a({tagName:"h3",text:"Get a reader card",className:"headline-text_info-container"}),n=a({tagName:"p",text:"You will be able to see a reader card after logging into account or you can register a new account"}),r=a({tagName:"div",className:"btn-container_info"}),s=a({tagName:"button",className:"btn",text:"Sign Up"}),i=a({tagName:"button",className:"btn",text:"Log in"});return r.append(s),r.append(i),e.append(t),e.append(n),e.append(r),this._container.append(e),e}render(){const e=a({tagName:"div",className:"library-cards_container"});return e.append(this._createLogin()),e.append(this._createInfo()),this._container.append(e),this._container}},L=class extends t{constructor(){super("main","homePage")}render(){return this._container.append((new u).render()),this._container.append((new g).render()),this._container.append((new b).render()),this._container.append((new v).render()),this._container.append((new y).render()),this._container.append((new x).render()),this._container}},C=e.p+"./assets/img/instagram.svg",S=e.p+"./assets/img/facebook.svg",B=e.p+"./assets/img/twitter.svg",W=class extends t{constructor(){super("footer")}_createFooter(){const e=a({tagName:"div",className:"footer-container"}),t=a({tagName:"div",className:"socialLink-container_footer"}),n=a({tagName:"div",className:"info-container_footer"}),r=a({tagName:"div",className:"contact-container_footer"}),s=a({tagName:"p",text:"286 Cadman Plaza, New York,<br> NY 11238, United States"}),i=a({tagName:"a"});i.append(s),i.href="https://goo.gl/maps/URNfE9LFHjwYspUSA";const o=a({tagName:"div",className:"work-time-container_footer"});o.insertAdjacentHTML("beforeend","\n      <p>\n        Mon - Fri\n        <br>\n        08:00 am - 07:00 pm\n      </p>\n      <p>\n        Sat - Sun\n        <br>\n        10:00 am - 06:00 pm\n      </p>\n    "),[[B,"twitter"],[C,"instagram"],[S,"facebook"]].forEach((e=>{const[n,r]=e,s=a({tagName:"a"});s.href=`https://www.${r}.com`;const i=new Image;i.src=n,i.alt="social img",s.append(i),t.append(s)})),r.append(i),r.append(t),n.append(r),n.append(o);const c=a({tagName:"div",className:"footer-line"}),p=a({tagName:"div",className:"username-container"});p.insertAdjacentHTML("beforeend",'\n      <p>2023</p>\n      <a href="https://rs.school/js-stage0/ ">\n        <p>The Rolling Scopes School</p>\n      </a>\n      <a href="https://github.com/yauhenibelski">\n        <p>Yauheni Belski</p>\n      </a>\n    '),e.append(n),e.append(c),e.append(p),this._container.append(e)}render(){return this._createFooter(),this._container}};class T{constructor(){this._container=document.body,T.profileIcon=new Image,T.profileIcon.src=s,T.profileIcon.alt="Profile icon",T.userName="Username",this._elements={header:(new r).render(),homePage:(new L).render(),footer:(new W).render()}}render(){this._container.append(this._elements.header),this._container.append(this._elements.homePage),this._container.append(this._elements.footer)}}const A=T;(new A).render()})();