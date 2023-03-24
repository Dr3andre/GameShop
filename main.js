fetch('./accessori.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  
  // Catturo il contenitore dei prodotti Accessori
  let rowCard = document.querySelector('#rowCard')
  
  // Catturo il campo cerca Parola/Word
  let searchWord = document.querySelector('#searchWord')
  
  //   Creazione Card Accessori
  function setCards(array) {
    // Ripulire sezione Card
    rowCard.innerHTML = ''

    array.sort( (a, b) => Number(a.price) - Number(b.price) )
    
    array.forEach(element => {
      let div = document.createElement('div')
      div.classList.add('col-sm-6', 'col-md-3', 'mb-3', 'mb-md-0', 'h-100')
      div.innerHTML = `
      <div class="card card-span h-100 text-white"><img class="img-fluid imageborder" src="${element.img}" alt="..." />
      <div class="card-img-overlay ps-0"> </div>
      <div class="card-body ps-0 bg-white">
      <h5 class="fw-bold text-1000 text-truncate">${element.name}</h5>
      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through"></span><span class="text-primary">${element.price}&#8364</span></div>
      </div><a class="stretched-link" target="_blank" href="${element.url}"></a>
      </div>
      `;
      rowCard.appendChild(div)
    });
  }
  
  // Filtro per Parola su accessori
  function filterByWord(){
    searchWord.addEventListener('input', () => {
      let filtered = data.filter(element => element.name.toLowerCase().includes(searchWord.value.toLowerCase()))
      setCards(filtered);
    })
  }
  
  
  setCards(data);
  filterByWord();
  
});






fetch('./videogiochi.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  
  // Catturo il contenitore dei prodotti Videogiochi
  let rowCard1 = document.querySelector('#rowCard1')
  // Catturo il campo cerca Parola/Word
  let searchWord1 = document.querySelector('#searchWord1')
  
  //   Creazione Card Videogiochi
  function setCards1(array1) {
    // Ripulire sezione Card
    rowCard1.innerHTML = ''

    array1.sort( (a, b) => Number(a.price) - Number(b.price) )
    
    array1.forEach(element => {
      let div = document.createElement('div')
      div.classList.add('col-sm-6', 'col-md-3', 'mb-3', 'mb-md-0', 'h-100')
      div.innerHTML = `
      <div class="card card-span h-100 text-white"><img class="img-fluid imageborder" src="${element.img}" alt="..." />
      <div class="card-img-overlay ps-0"> </div>
      <div class="card-body ps-0">
      <h5 class="fw-bold text-1000 text-truncate">${element.name}</h5>
      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through"></span><span class="text-primary">${element.price}&#8364</span></div>
      </div><a class="stretched-link" target="_blank" href="${element.url}"></a>
      </div>
      `;
      rowCard1.appendChild(div)
    });
  }
  
  // Filtro per Parola su videogiochi
  function filterByWord1(){
    searchWord1.addEventListener('input', () => {
      let filtered = data.filter(element => element.name.toLowerCase().includes(searchWord1.value.toLowerCase()))
      setCards1(filtered);
    })
  }
  
  setCards1(data);
  filterByWord1();
  
});



fetch('./libri.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  
  // Catturo il contenitore dei prodotti
  let rowCard2 = document.querySelector('#rowCard2')
  // Catturo il campo cerca Parola/Word
  let searchWord2 = document.querySelector('#searchWord2')
  
  //   Creazione Card Accessori
  function setCards2(array2) {
    // Ripulire sezione Card
    rowCard2.innerHTML = ''
    array2.sort( (a, b) => Number(a.price) - Number(b.price) )

    array2.forEach(element => {
      let div = document.createElement('div')
      div.classList.add('col-sm-6', 'col-md-3', 'mb-3', 'mb-md-0', 'h-100')
      div.innerHTML = `
      <div class="card card-span h-100 text-white"><img class="img-fluid imageborder" src="${element.img}" alt="..." />
      <div class="card-img-overlay ps-0"> </div>
      <div class="card-body ps-0 ">
      <h5 class="fw-bold text-1000 text-truncate">${element.name}</h5>
      <div class="fw-bold"><span class="text-600 me-2 text-decoration-line-through"></span><span class="text-primary">${element.price}&#8364</span></div>
      </div><a class="stretched-link" target="_blank" href="${element.url}"></a>
      </div>
      `;
      rowCard2.appendChild(div)
    });
  }
  // Filtro per Parola su accessori
  function filterByWord2(){
    searchWord2.addEventListener('input', () => {
      let filtered = data.filter(element => element.name.toLowerCase().includes(searchWord2.value.toLowerCase()))
      setCards2(filtered);
    })
  }
  
  setCards2(data);
  filterByWord2();
  
});



let btnDark = document.querySelector('#btnDark');

let isToggle = false;
//Dark Mode//
btnDark.addEventListener('click', () => {
    if(isToggle) {
        document.documentElement.style.setProperty('--light', '#ffffff');
        document.documentElement.style.setProperty('--dark', '#05164e');
        document.documentElement.style.setProperty('--secondary', '#f49817');
        document.documentElement.style.setProperty('--black', '#000000');
        btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>`
        isToggle = false
    } else {
        document.documentElement.style.setProperty('--light', '#05164e');
        document.documentElement.style.setProperty('--dark', '#ffffff');
        document.documentElement.style.setProperty('--secondary', '#ffff00');
        document.documentElement.style.setProperty('--black', '#ffffff');
        btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>`
        isToggle = true
    }
});


