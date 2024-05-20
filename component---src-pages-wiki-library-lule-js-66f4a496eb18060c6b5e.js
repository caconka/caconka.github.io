"use strict";(self.webpackChunkdigital_garden=self.webpackChunkdigital_garden||[]).push([[498],{3532:function(e,a,t){t.d(a,{Z:function(){return f}});var i=t(7294),r=t(9260),s=t(4e3),n=t(8183),o=t(574);var l=e=>{let{book:a}=e;const t=a.readings.length>0;return i.createElement("li",{key:a.title,className:"book-item"},i.createElement("section",{className:"image"},i.createElement(o.Link,{to:a.link,itemProp:"url"},i.createElement("img",{src:a.image,alt:a.title}))),i.createElement("section",null,i.createElement("h4",null,a.title),i.createElement("span",null,"De"," ",i.createElement(o.Link,{to:a.author.link,itemProp:"url"},a.author.name)),t&&i.createElement("div",null,i.createElement("span",null,"Lecturas:"),i.createElement("ul",null,a.readings.map((e=>e.end_date&&""!==e.end_date?i.createElement("li",{key:e.start_date},i.createElement("span",null,"Del ",i.createElement("time",null,e.start_date)," al"," ",i.createElement("time",null,e.end_date))):i.createElement("li",{key:e.start_date},i.createElement("span",null,"Empezado el ",i.createElement("time",null,e.start_date)," ",e.not_ended&&i.createElement("span",null,"~"," ",i.createElement("em",{style:{color:"var(--color-hover)"}},"abandonado"))))))))))};var d=e=>{let{readed:a,reading:t,wantToRead:r,isFiltering:s}=e;const n="book-list-container",{0:o,1:d}=(0,i.useState)(!1),{0:m,1:c}=(0,i.useState)(!0),{0:g,1:p}=(0,i.useState)(!0);return i.createElement("div",{key:n,className:n},(null==r?void 0:r.length)>0&&!s&&i.createElement(i.Fragment,null,i.createElement("button",{onClick:()=>d(!o)},i.createElement("h2",null,i.createElement("span",{className:o?"text-shadow":"text-shadow-disabled"},"Quiero leer"))),o&&i.createElement("ol",{className:"book-list"},r.map((e=>i.createElement(l,{key:e.title,book:e}))))),t.length>0&&!s&&i.createElement(i.Fragment,null,i.createElement("button",{onClick:()=>c(!m)},i.createElement("h2",null,i.createElement("span",{className:m?"text-shadow":"text-shadow-disabled"},"Leyendo"))),m&&i.createElement("ol",{className:"book-list"},t.map((e=>i.createElement(l,{key:e.title,book:e}))))),i.createElement("button",{onClick:()=>p(!g)},i.createElement("h2",null,i.createElement("span",{className:g?"text-shadow":"text-shadow-disabled"},"Lecturas"))),g&&i.createElement("ol",{className:"book-list"},a.map((e=>i.createElement(l,{key:e.title,book:e})))))},m=t(4381);const c="year",g="title",p="author",u="genre",A=e=>({...e,borderRadius:"var(--radius-1)",colors:{...e.colors,primary25:"var(--color-folders)",primary:"var(--color-text-light)"}}),k=e=>{const a=[],t=[],i=[],r=[],s={};return e.books.forEach((e=>{let n=!1;for(let a of e.readings)(a.not_ended||a.end_date)&&(n=!0);n?(t.push(e),i.push({value:e.author.name,label:e.author.name}),r.push({value:e.title,label:e.title}),e.genre&&!s[e.genre]&&(s[e.genre]=e.genre)):a.push(e)})),{readingBooks:a,readedBooks:t,authorSelect:i,titleSelect:r,genreSelect:_(s)}},_=e=>{const a=[];for(let t in e){const e=h(t);a.push({value:t,label:e})}return a.sort(((e,a)=>a.value<e.value))},h=e=>{switch(e){case"fiction":return"Novela";case"thriller":return"Novela negra";case"historical-fiction":return"Novela historica";case"science-fiction":return"Ciencia ficción";case"fantasy":return"Fantasía";case"epistle":return"Epistolar";case"mithology":return"Mitología";case"classic":return"Clásica";case"philosophy":return"Filosofía";case"essay":return"Ensayo";case"biography":return"Biografía";case"historical":return"Historia";default:return e}},w=e=>{let{books:a,filters:t}=e;const i=t.year,r=i?new Date(t.year.value+"").getFullYear():null,s=a.filter((e=>{if(i){for(let a of e.readings)if(new Date(a.start_date).getFullYear()===r||new Date(a.end_date).getFullYear()===r)return!0;return!1}if(t.title)return t.title.value===e.title;for(let i in t){var a;if(i===p){if(t.author.value!==(null===(a=e[i])||void 0===a?void 0:a.name))return!1}else if(t[i].value!==e[i])return!1}return!0}));return i?C(s,r):s},C=(e,a)=>e.sort(((e,t)=>{for(let i of e.readings)if(new Date(i.start_date).getFullYear()===a||new Date(i.end_date).getFullYear()===a)for(let e of t.readings)if(new Date(e.start_date).getFullYear()===a||new Date(e.end_date).getFullYear()===a)return new Date(e.end_date)-new Date(i.end_date);return!1}));var f=e=>{let{location:a,library:t}=e;const o=t.name,{readingBooks:l,readedBooks:_,authorSelect:h,titleSelect:C,genreSelect:f}=k(t),b=_.sort(((e,a)=>{const t=e.readings[0].not_ended?new Date(e.readings[0].start_date):new Date(e.readings[0].end_date);return(a.readings[0].not_ended?new Date(a.readings[0].start_date):new Date(a.readings[0].end_date))-t})),S=b[b.length-1].readings[0],y=S.end_date?new Date(S.end_date).getFullYear():new Date(S.start_date).getFullYear(),E=new Date,z=Array.from({length:E.getFullYear()-y+1},((e,a)=>{const t=E.getFullYear()-a;return{value:t,label:t}})),{0:L,1:q}=(0,i.useState)({year:z[0]}),{0:I,1:B}=(0,i.useState)(b.filter((e=>{const a=e.readings[0];return(a.end_date?new Date(a.end_date).getFullYear():new Date(a.start_date).getFullYear())===E.getFullYear()}))),j=i.createElement("div",{className:"select-year"},z.length>1&&i.createElement(r.ZP,{value:L.year,onChange:e=>{const a={...L,year:e};q(a),B(w({books:_,filters:a}))},options:z,theme:A}));return i.createElement(s.Z,{location:a,title:o},i.createElement(n.Z,{title:o}),i.createElement("h1",null,o),i.createElement(m.Z,{location:a,title:"Librerías",path:"/wiki/library",select:j,triggerFiltersExpanded:e=>{if(!e){const e={year:z[0]};q(e),B(w({books:_,filters:e}))}}},i.createElement("div",{className:"select select-title"},L.title&&i.createElement("span",{className:"filter-name"},"Título:"),i.createElement(r.ZP,{isClearable:!0,placeholder:"Título",options:C,onChange:(e,a)=>{let{action:t}=a,i={...L};"select-option"===t?(delete i[c],i.title=e):(delete i[g],0===Object.keys(i).length&&(i.year=z[0])),q(i),B(w({books:_,filters:i}))},theme:A})),i.createElement("div",{className:"select select-author"},L.author&&i.createElement("span",{className:"filter-name"},"Autor:"),i.createElement(r.ZP,{isClearable:!0,placeholder:"Autor",isDisabled:L.title,options:h,onChange:(e,a)=>{let{action:t}=a;const i={...L};"select-option"===t?(delete i[c],i.author=e):(delete i[p],0===Object.keys(i).length&&(i.year=z[0])),q(i),B(w({books:_,filters:i}))},theme:A})),i.createElement("div",{className:"select select-genre"},L.genre&&i.createElement("span",{className:"filter-name"},"Género:"),i.createElement(r.ZP,{isClearable:!0,placeholder:"Género",isDisabled:L.title,options:f,onChange:(e,a)=>{let{action:t}=a;const i={...L};"select-option"===t?(delete i[c],i.genre=e):(delete i[u],0===Object.keys(i).length&&(i.year=z[0])),q(i),B(w({books:_,filters:i}))},theme:A}))),i.createElement(d,{readed:I,reading:l,wantToRead:t.want_to_read,isFiltering:L.title||L.author||L.genre}))}},219:function(e,a,t){t.r(a),t.d(a,{default:function(){return n}});var i=t(7294),r=t(3532),s=JSON.parse('{"name":"Librería Lule","want_to_read":[],"books":[{"title":"Los de bilbao nacen donde quieren","author":{"name":"María Larrea","link":"https://es.wikipedia.org/wiki/Mar%C3%ADa_Larrea"},"genre":"fiction","link":"https://www.amazon.es/Bilbao-nacen-quieren-Alianza-Literaturas/dp/8411484467/ref=sr_1_1?crid=3UV2E3SXCCR59&dib=eyJ2IjoiMSJ9._z32vOqWrZuztCgqgaSEVnO39QLrcr0iOmTDAi9FsEop_fbmoIpgIEBAunAOowGV-o9C8o6Dse1i7nDBTWbBpOh0lmJHg9rXmBkqPZNKOkBvQ37oTeI_QefawBFO7au6bRbAGWnQZXlVyYh367DQa3STm4XaUwQWWq6tgcfa9nk.kvNa84OPB4UK2kc57d-1TX1u97oh9CT6hDKUxanQsGI&dib_tag=se&keywords=los+de+bilbao+nacen+donde+quieren&qid=1716203464&sprefix=los+de+bilbao+%2Caps%2C110&sr=8-1","image":"https://m.media-amazon.com/images/I/61r-X+w1kjL._SL1500_.jpg","readings":[{"start_date":"2024-05-13"}]},{"title":"Los aerostatos","author":{"name":"Amélie Nothomb","link":"https://es.wikipedia.org/wiki/Am%C3%A9lie_Nothomb"},"genre":"fiction","link":"https://www.amazon.es/aerostatos-Panorama-narrativas-Am%C3%A9lie-Nothomb/dp/8433922319/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=38V6SS1C804XI&dib=eyJ2IjoiMSJ9.4n4wOoGJRL6Fqm-eNofxQMX09cqG9LDDtpR2dNvszSsX6aGdb4I5N7Faph1e_xd5n2_u7dCW3sMLLLudIhewJvT0LCuV1WlVaSa6fy-0ffZ2ug1bbLGdDlyq3ZIKYUcII0PFQY22HS3QQBjOHvzOXCfn3OGmdwYucp_cI_AJIll-C07VCF26QuYPAyMcwdKuMretiuJcsJs9-lHLJfJTSV4yW-RAswxyvnkiZhZnBOdHUB11UpOI7lDc9Wy1M6q73YpYKY36WmdEYRA-_mNwOdioGG5ZJl9bkKrckZVChZw.sPH4aDxUYCQEZYunBAettK7mrTXwNGdsOjS3HiWrsOU&dib_tag=se&keywords=los+aerostatos&qid=1716203329&sprefix=los+aerostatos%2Caps%2C109&sr=8-1","image":"https://m.media-amazon.com/images/I/71jbt-Os19L._SL1500_.jpg","readings":[{"start_date":"2024-04-25","end_date":"2024-05-03"}]},{"title":"Donde el corazón te lleve","author":{"name":"Susanna Tamaro","link":"https://es.wikipedia.org/wiki/Susanna_Tamaro"},"genre":"fiction","link":"https://www.amazon.es/Donde-coraz%C3%B3n-lleve-Novela-Relatos/dp/8432217549/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2E7IFQP7GW40U&dib=eyJ2IjoiMSJ9.tcCnTP_eQzqLZ5iSEBPELESITNdS6xwZHXYNs2m0sAbxRhOpUR8O2gmZcCcTWDYLqUPrZTr1zgzUicz8BV6EeX8TPWfUdLLgCW3wNOJC15xTi6LoHX-4DXb7Yd5LudCdH4Dglc6fIyyyAVo-UXpHwf9axBDS1zsL8paZY9gXMAz791-PMsnZr8TwUiOgJzGGgJbHdGBegbjl_pnVZ_4XCkPei_ysfIbeyctUly0YbRUwTxHymb3A7KDGv12um9B0joa9iKRsRw6WVCcdcZMigatZSTZLMOGzRpU42zWOUE8.dcqcYI3eZuUc9VZiB7x59IvZnfVFsmeMR0-_WcdXyWA&dib_tag=se&keywords=donde+el+corazon+te+lleve&qid=1716203126&sprefix=donde+el+corazon+te+lleve%2Caps%2C104&sr=8-1","image":"https://m.media-amazon.com/images/I/61AQqqrBhsL._SL1500_.jpg","readings":[{"start_date":"2024-04-05","end_date":"2024-04-22"}]},{"title":"Aquí no hay reglas: Netflix y la cultura de la reinvención","author":{"name":"Reed Hastings & Erin Meyer","link":"https://es.wikipedia.org/wiki/Reed_Hastings"},"genre":"essay","link":"https://www.amazon.es/Aqu%C3%AD-hay-reglas-Netflix-reinvenci%C3%B3n/dp/8416883807","image":"https://m.media-amazon.com/images/I/81mR1XuH7OL._SY466_.jpg","readings":[{"start_date":"2023-11-27"}]},{"title":"Abejas y truenos lejanos","author":{"name":"Riku Onda","link":"https://en.wikipedia.org/wiki/Riku_Onda"},"genre":"fiction","link":"https://www.amazon.es/Abejas-truenos-lejanos-Riku-Onda-ebook/dp/B0C5JYL2Z1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=abejas+y+truenos+lejanos&sr=8-1","image":"https://m.media-amazon.com/images/I/81D1Eo4rM+L._SL1500_.jpg","readings":[{"start_date":"2023-10-14"}]},{"title":"Inferior","author":{"name":"Ángela Saini","link":"https://es.wikipedia.org/wiki/Angela_Saini"},"genre":"essay","link":"https://www.amazon.es/Inferior-%C3%81ngela-Saini/dp/8494770721/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=inferior&sr=8-1","image":"https://m.media-amazon.com/images/I/51IAN0QOwiL._SL1024_.jpg","readings":[{"start_date":"2023-10-12"}]},{"title":"Final feliz","author":{"name":"Isaac Rosa","link":"https://es.wikipedia.org/wiki/Isaac_Rosa"},"genre":"fiction","link":"https://www.amazon.es/Feliz-final-Volumen-independiente-Isaac-ebook/dp/B07G68QPC1/ref=sr_1_1?keywords=final+feliz&sr=8-1","image":"https://m.media-amazon.com/images/I/712NgFut2NL._SL1500_.jpg","readings":[{"start_date":"2023-09-20","end_date":"2023-10-11"}]},{"title":"Los misterios de la taberna Kamogawa","author":{"name":"Hisashi Kashiwai","link":"https://www.lecturalia.com/autor/24681/hisashi-kashiwai"},"genre":"fiction","link":"https://www.amazon.com/misterios-taberna-Kamogawa-Detectives-KAMOGAWA/dp/8419346020","image":"https://m.media-amazon.com/images/I/71vJgIXEsJL._SL1500_.jpg","readings":[{"start_date":"2023-08-19","end_date":"2023-09-15"}]},{"title":"Canción de hielo y fuego: Juego de tronos","author":{"name":"George R.R. Martin","link":"https://es.wikipedia.org/wiki/George_R._R._Martin"},"genre":"fantasy","link":"https://www.amazon.es/Canci%C3%B3n-hielo-fuego-Tronos-Gigamesh/dp/8496208923/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33TVYU3IKXKO9&keywords=juego+de+tronos+cancion+de+hielo+y+fuego+1&qid=1685260674&sprefix=juego+de+tronos+cancion+de+hielo+y+fuego+1%2Caps%2C147&sr=8-4","image":"https://m.media-amazon.com/images/I/91UI9vWXP0L.jpg","readings":[{"start_date":"2023-05-28","not_ended":true}]},{"title":"El maestro de almas","author":{"name":"Irène Némirovsky","link":"https://es.wikipedia.org/wiki/Ir%C3%A8ne_N%C3%A9mirovsky"},"genre":"fiction","link":"https://www.amazon.es/El-maestro-almas-Ir%C3%A8ne-N%C3%A9mirovsky-ebook/dp/B081NWG7QS/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=4A40RXBXA3J0&keywords=el+maestro+de+almas&qid=1683706411&sprefix=el+maestro+de+almas%2Caps%2C107&sr=8-1","image":"https://m.media-amazon.com/images/I/41cJwgWYGuL.jpg","readings":[{"start_date":"2023-04-11","end_date":"2023-05-09"}]},{"title":"Los que se van y los que se quedan","author":{"name":"Parinoush Saniee","link":"https://es.wikipedia.org/wiki/Parinoush_Saniee"},"genre":"fiction","link":"https://www.amazon.es/Los-que-van-los-quedan/dp/8411480275","image":"https://m.media-amazon.com/images/I/7120ywAXxDL.jpg","readings":[{"start_date":"2023-03-15","end_date":"2023-04-10"}]},{"title":"Ética para Celia","author":{"name":"Ana de Miguel","link":"https://en.wikipedia.org/wiki/Ana_de_Miguel"},"genre":"philosophy","link":"https://www.amazon.es/%C3%89tica-para-Celia-No-ficci%C3%B3n/dp/8466665536/ref=sr_1_1?keywords=etica+para+celia&qid=1676540647&sprefix=etica+para+celi%2Caps%2C113&sr=8-1","image":"https://m.media-amazon.com/images/I/81sBQSeLDIS.jpg","readings":[{"start_date":"2023-02-15","end_date":"2023-03-11"}]},{"title":"Salvo mi corazón, todo está bien","author":{"name":"Héctor Abad Faciolince","link":"https://en.wikipedia.org/wiki/H%C3%A9ctor_Abad_Faciolince"},"genre":"fiction","link":"https://www.amazon.es/Salvo-coraz%C3%B3n-todo-est%C3%A1-bien/dp/8420461857","image":"https://m.media-amazon.com/images/I/911lmbqgE3L.jpg","readings":[{"start_date":"2023-01-10","not_ended":true}]},{"title":"La familia","author":{"name":"Sara Mesa","link":"https://es.wikipedia.org/wiki/Sara_Mesa"},"genre":"fiction","link":"https://www.amazon.es/familia-700-Narrativas-hisp%C3%A1nicas/dp/8433999540/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2OKSX0LWAPFUJ&keywords=la+familia+sara+mesa&qid=1672744893&sprefix=la+familia+sara+mesa%2Caps%2C123&sr=8-1","image":"https://m.media-amazon.com/images/I/31u5FRFfpNL.jpg","readings":[{"start_date":"2022-12-31","end_date":"2023-01-09"}]},{"title":"Todo va a mejorar","author":{"name":"Almudena Grandes","link":"https://es.wikipedia.org/wiki/Almudena_Grandes"},"genre":"fiction","link":"https://www.amazon.es/Todo-mejorar-Andanzas-Almudena-Grandes/dp/8411071731/ref=sr_1_1?crid=3TPZZV8I4CMZF&keywords=todo+va+a+mejorar+almudena+grandes&qid=1669472726&qu=eyJxc2MiOiIxLjg1IiwicXNhIjoiMS41NSIsInFzcCI6IjEuNjAifQ%3D%3D&sprefix=todo+va+a+mejorar%2Caps%2C151&sr=8-1","image":"https://m.media-amazon.com/images/I/610Dih-tPgL.jpg","readings":[{"start_date":"2022-11-25","end_date":"2022-12-16"}]},{"title":"La mirada inquieta: Cómo disfrutar del arte con tus propios ojos","author":{"name":"Eugenia Tenenbaum","link":"https://www.planetadelibros.com/autor/eugenia-tenenbaum/000057069"},"genre":"essay","link":"https://www.amazon.es/mirada-inquieta-disfrutar-propios-temas/dp/8499989187/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3S5N3PTM9XLO8&keywords=la+mirada+inquieta&qid=1669472459&qu=eyJxc2MiOiIxLjAxIiwicXNhIjoiMS4wNyIsInFzcCI6IjAuOTkifQ%3D%3D&sprefix=la+mirada+inquieta%2Caps%2C135&sr=8-1","image":"https://m.media-amazon.com/images/I/715M-aVnQ1L.jpg","readings":[{"start_date":"2022-10-15","end_date":"2022-11-23"}]},{"title":"Ni amo ni dios ni marido ni partido de futbol","author":{"name":"Cristina Morales","link":"https://es.wikipedia.org/wiki/Cristina_Morales"},"genre":"fiction","link":"https://www.amazon.es/Lectura-Narrativas-Hispanicas-Cristin-Morales/dp/8433998641/ref=sr_1_1?crid=1AXGZ1C7GIP9U&keywords=ni+amo+ni+dios+ni+marido+ni+partido+de+futbol&qid=1658668453&sprefix=ni+amo+ni+dios%2Caps%2C91&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/81OH4gWfaVL.jpg","readings":[{"start_date":"2022-07-24","end_date":"2022-10-09"}]},{"title":"Vestido de novia","author":{"name":"Pierre Lamaitre","link":"https://es.wikipedia.org/wiki/Pierre_Lemaitre"},"genre":"thriller","link":"https://www.amazon.es/Vestido-Novia-BEST-SELLER-debolsillo/dp/8466338373/ref=sr_1_1?keywords=vestido+de+novia+pierre+lemaitre&qid=1657819376&sprefix=vestido+de+novia+pierre%2Caps%2C89&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/71aIP7LFiML.jpg","readings":[{"start_date":"2022-07-03","end_date":"2022-07-18"}]},{"title":"Reunión","author":{"name":"Natasha Brown","link":"https://npbrown.com/about/"},"genre":"fiction","link":"https://www.amazon.es/Reuni%C3%B3n-Panorama-narrativas-Natasha-Brown-ebook/dp/B09S25YSZJ/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3SZRM0NTTBQMP&keywords=reuni%C3%B3n&qid=1657819642&sprefix=reuni%C3%B3n%2Caps%2C114&sr=8-4","image":"https://m.media-amazon.com/images/I/41DYAr5cDkL.jpg","readings":[{"start_date":"2022-06-15","end_date":"2022-07-03"}]},{"title":"Una habitación propia","author":{"name":"Virginia Wolf","link":"https://es.m.wikipedia.org/wiki/Virginia_Woolf"},"genre":"essay","link":"https://www.amazon.es/Una-habitaci%C3%B3n-propia-Austral-Singular/dp/8432222828/ref=mp_s_a_1_2?crid=2TDPZNPHPWJG2&keywords=wolf+una+habitacion&qid=1647762015&sprefix=wolf+una+habitacion%2Caps%2C86&sr=8-2","image":"https://m.media-amazon.com/images/I/51A9rCbPoeL._AC_SY580_.jpg","readings":[{"start_date":"2022-03-07","end_date":"2022-03-28"}]},{"title":"Greenlights","author":{"name":"Matthew McConaughey","link":"https://es.wikipedia.org/wiki/Matthew_McConaughey"},"genre":"biography","link":"https://www.amazon.es/Greenlights-Cine-Matthew-McConaughey/dp/8448028473/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HODP7FB391SD&keywords=greenlights&qid=1642493396&sprefix=greenlights%2Caps%2C83&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51kKnVX6xNL._SX326_BO1,204,203,200_.jpg","readings":[{"start_date":"2022-01-11","end_date":"2022-01-26"}]},{"title":"Lo que fuimos","author":{"name":"Golnaz Hashemzadeh Bonde","link":"http://www.duomoediciones.com/es/autores/acerca-del-autor-1535.htm"},"genre":"fiction","link":"https://www.amazon.es/que-fuimos-Golnaz-Hashemzadeh-Bonde-ebook/dp/B07G4KRR9T/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1DSH9E1C51DKW&keywords=lo+que+fuimos&qid=1641500438&sprefix=lo+que+fuimos%2Caps%2C110&sr=8-4","image":"https://m.media-amazon.com/images/I/41L-3qTn43L.jpg","readings":[{"start_date":"2022-01-05","end_date":"2022-01-10"}]},{"title":"Malaherba","author":{"name":"Manuel Jabois","link":"https://es.wikipedia.org/wiki/Manuel_Jabois"},"genre":"fiction","link":"https://www.amazon.es/Malaherba-HISPANICA-Manuel-Jabois/dp/8420438367/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=282ZS7KHKULUS&keywords=malaherba&qid=1641374647&sprefix=mala+hebra%2Caps%2C170&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/417P5cz6fgL._SX315_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-11-05","end_date":"2022-01-04"}]},{"title":"El árbol del jengibre","author":{"name":"Oswald Wynd","link":"https://en.wikipedia.org/wiki/Oswald_Wynd"},"genre":"historical-fiction","link":"https://www.amazon.es/%C3%A1rbol-del-jengibre-LOS-IMPERDIBLES/dp/8418128313/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=el+%C3%A1rbol+de+jengibre&qid=1627312162&sr=8-5","image":"https://images-na.ssl-images-amazon.com/images/I/41Y4p2thKqS._SX328_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-07-26","end_date":"2021-08-26"}]},{"title":"Hamnet","author":{"name":"Maggie O\'Farrel","link":"https://en.wikipedia.org/wiki/Maggie_O%27Farrell"},"genre":"historical-fiction","link":"https://www.amazon.es/Hamnet-250-Libros-del-Asteroide/dp/8417977589/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hamnet&qid=1614668303&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/31u8cTka9gL._SX323_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-04-19","end_date":"2021-07-25"}]},{"title":"Prohibido nacer: Memorias de racismo, rabia y risa","author":{"name":"Trevor Noah","link":"https://es.wikipedia.org/wiki/Trevor_Noah"},"genre":"biography","link":"https://www.amazon.es/Prohibido-nacer-Trevor-Noah/dp/8417059121/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=prohibido+nacer&qid=1614867392&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51j-mEm9lxL._SX328_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-03-16","end_date":"2021-04-18"}]},{"title":"Feria","author":{"name":"Ana Iris Simón","link":""},"genre":"fiction","link":"https://www.amazon.es/Feria-Ana-Iris-Sim%C3%B3n/dp/8412226720/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=feria&qid=1614578539&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41rBaueHubL._SX314_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-28","not_ended":true}]},{"title":"La insólita pasión del vendedor de lencería","author":{"name":"Asako Hiruta","link":"https://es.wikipedia.org/wiki/Asako_Hiruta"},"genre":"fiction","link":"https://www.amazon.es/ins%C3%B3lita-pasi%C3%B3n-del-vendedor-lencer%C3%ADa/dp/8416195870/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1JIK8D6ZL8Y9Y&dchild=1&keywords=la+insolita+pasion+del+vendedor+de+lenceria&qid=1614197380&sprefix=la+insolita+pas%2Caps%2C170&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51LdzN6e8iL._SX345_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-24","end_date":"2021-02-27"}]},{"title":"Marx y la muñeca","author":{"name":"Maryam Madjidi","link":"https://en.wikipedia.org/wiki/Maryam_Madjidi"},"genre":"biography","link":"https://www.amazon.es/Marx-y-mu%C3%B1eca-Tour-force/dp/8494836609/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=marx+y+la+mu%C3%B1eca&qid=1613298364&s=books&sr=1-1","image":"https://images-na.ssl-images-amazon.com/images/I/51mQjsg9S6L._SX332_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-14","end_date":"2021-02-21"}]},{"title":"Hôzuki, la librería de Mitsuko","author":{"name":"Aki Shimazaki","link":"https://es.wikipedia.org/wiki/Aki_Shimazaki"},"genre":"fiction","link":"https://www.amazon.es/H%C3%B4zuki-librer%C3%ADa-Mitsuko-Otras-Latitudes/dp/8416830738/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hozuki+la+librer%C3%ADa+de+mitsuko&qid=1611916753&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/515MN+e7KlL._SX326_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-03","end_date":"2021-02-12"}]},{"title":"La uruguaya","author":{"name":"Pedro Mairal","link":"https://es.wikipedia.org/wiki/Pedro_Mairal"},"genre":"non_fiction","link":"https://www.amazon.es/uruguaya-Libros-del-Asteroide/dp/8416213992/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26DUK9VR4KI2I&dchild=1&keywords=la+uruguaya+pedro+mairal&qid=1612610231&sprefix=la+urug%2Caps%2C181&sr=8-1","image":"data:image/jpeg;base64,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","readings":[{"start_date":"2021-01-27","end_date":"2021-01-30"}]},{"title":"La danza de los tulipanes","author":{"name":"Ibon Martín","link":"http://www.lecturalia.com/autor/19990/ibon-martin"},"genre":"thriller","link":"https://www.amazon.es/danza-los-tulipanes-Ibon-Mart%C3%ADn/dp/8401022711/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OHXOWLRWF13F&dchild=1&keywords=la+danza+de+los+tulipanes+libro&qid=1613298497&sprefix=la+danza+de+los+tu%2Caps%2C173&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41heWwhv4iL._SX324_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-12-21","end_date":"2021-01-20"}]}]}');var n=e=>{let{location:a}=e;return i.createElement(r.Z,{location:a,library:s})}}}]);
//# sourceMappingURL=component---src-pages-wiki-library-lule-js-66f4a496eb18060c6b5e.js.map