// fetch word detail
let allWords = []
fetch('https://openapi.programming-hero.com/api/words/all').then(res=>res.json()).then(data=>{
  allWords=data.data

  for (const word of allWords) {
    
    const wordDetail= word.word
    const wordID=word.id

    console.log(wordDetail,wordID)
  }
})


// fetch level numbers
fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(data => {
    const levels = data.data;
    levels.map(level => {
      const levelNumber = level.level_no;
      displayLevel(levelNumber);
    });
  });

const selectedDisplay = document.getElementById('selected-display');

const displayLevel = (levelNumber) => {
  const levelContainer = document.getElementById('level-container');
  const levelDiv = document.createElement('div');
  levelDiv.innerHTML = `
    <button onclick='toggle(${levelNumber})' id='btn-${levelNumber}' class="btn btn-primary btn-outline xxx">
      <img class="w-4" src="assets/fa-book-open.png" alt="">Lesson-${levelNumber}
    </button>`;
  levelContainer.append(levelDiv);
}

function removeUnselectedItems() {
  selectedDisplay.innerHTML = '';
}

const toggle = (levelNumber) => {
  fetch(`https://openapi.programming-hero.com/api/level/${levelNumber}`)
    .then(res => res.json())
    .then(data => {
      removeUnselectedItems();
      const word = data.data;

      word.forEach(element => {
        const printedWord = element.word;
        const printedMeaning = element.meaning ? element.meaning : 'No Word Found';
        const printedPronunciation = element.pronunciation;

        
          
          
          
        
        

        selectedDisplay.classList.remove('hidden');

        const unselectedDisplay = document.getElementById('unselcted-display');
        unselectedDisplay.innerHTML = '';

        const selectedDisplayDiv = document.createElement('div');
        selectedDisplayDiv.innerHTML = `
          <div class="card bg-white text-black w-[full] rounded-md drop-shadow-md">
            <div class="card-body items-center text-center">
              <h2 class="card-title">${printedWord}</h2>
              <p class='text-gray-600 text-sm'>Meaning /Pronounciation</p>
              <h1 class="font-bold text-xl">${printedMeaning}</h1>
              <div class="card-actions justify-end"></div>
              <div class="flex w-full justify-between">
                <button class='btn'>
                  <img class="w-6" src="https://img.icons8.com/?size=100&id=11408&format=png&color=000000" alt="">
                </button>
                <button id='infoCard'  class='btn'>
                  <img class="w-6" src="https://img.icons8.com/?size=100&id=77&format=png&color=000000" alt="">
                  </button>




              </div>
            </div>
          </div>`;
        selectedDisplay.append(selectedDisplayDiv);
      });

      const allButtons = document.getElementsByClassName('xxx');
      for (const allButton of allButtons) {
        allButton.classList.add('btn-outline');

        const btnLevelNUmber = document.getElementById(`btn-${levelNumber}`);
        btnLevelNUmber.classList.remove('btn-outline');
      }
    });
}

