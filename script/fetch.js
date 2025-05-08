

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
  const wordId = element.id;

  fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
    .then(res => res.json())
    .then(data => {
      const printedWord = data.data.word;
      const printedMeaning = data.data.meaning || 'No Word Found';
      const printedPronunciation = data.data.pronunciation || '';
      const finalExample = data.data.sentence || 'No example available.';
     const synonyms = data.data.synonyms
    
      

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
              
              <button class="btn" onclick="my_modal_${wordId}.showModal()">
                <img class='w-4' src="https://img.icons8.com/?size=100&id=37303&format=png&color=000000" alt="">
              </button>

              <dialog id="my_modal_${wordId}" class="modal">
                <div class="modal-box">
                  <form method="dialog">
                    <button class="btn btn-sm btn-primary  absolute bottom-2 left-2">Close</button>
                  </form>
                  <div class='flex'>
                    <h3 class="text-lg font-bold">${printedWord}</h3>
                    <p class="flex w-fit items-center">
                      (<img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=U6inJDoPag0I&format=png&color=000000" alt=""> ${printedPronunciation})
                    </p>
                  </div>
                  <div class='flex flex-start mt-6'>
                    <div class='my-2'>
                      <h2 class='font-bold'>Example</h2>
                      <p>${finalExample}</p>
                    </div>
                  </div>

                  <div class='flex flex-start mt-6'>
                    <div class='my-2'>
                      <h2 class='font-bold'>সমার্থক শব্দ গুলো</h2>
                      <p class='my-4'>
                      <span class='bg-blue-400 px-2 py-1 rounded text-white'>${synonyms}</span>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </dialog>

            </div>
          </div>
        </div>
      `;
      selectedDisplay.append(selectedDisplayDiv);
    });
});

      const allButtons = document.getElementsByClassName('xxx');
      for (const allButton of allButtons) {
        allButton.classList.add('btn-outline');

        const btnLevelNUmber = document.getElementById(`btn-${levelNumber}`);
        btnLevelNUmber.classList.remove('btn-outline');
      }
    });
}

