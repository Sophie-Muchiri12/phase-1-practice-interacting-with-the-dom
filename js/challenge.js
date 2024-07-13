document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counter');
  let minusButton = document.getElementById('minus');
  let plusButton = document.getElementById('plus');
  let heartButton = document.getElementById('heart');
  let pauseButton = document.getElementById('pause');
  let likesList = document.querySelector('.likes');
  let commentForm = document.getElementById('comment-form');
  let commentList = document.getElementById('list');

  let count = 0;
  let isPaused = false;
  let likes = {};

  // increasing number ofcountss
  let counterInterval = setInterval(() => {
    if (!isPaused) {
      count++;
      counter.innerText = count;
    }
  }, 1000);

  // Plus button event listener
  plusButton.addEventListener('click', () => {
    count++;
    counter.innerText = count;
  });

  // Minus button event listener
  minusButton.addEventListener('click', () => {
    count--;
    counter.innerText = count;
  });

  // Heart button event listener
  heartButton.addEventListener('click', () => {
    if (likes[count]) {
      likes[count]++;
    } else {
      likes[count] = 1;
    }
    displayLikes();
  });

  // Pause button event listener
  pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseButton.innerText = isPaused ? 'resume' : 'pause';
    plusButton.disabled = isPaused;
    minusButton.disabled = isPaused;
    heartButton.disabled = isPaused;
  });

  // Display likes
  function displayLikes() {
    likesList.innerHTML = '';
    for (let key in likes) {
      let li = document.createElement('li');
      li.innerText = `${key} has been liked ${likes[key]} time${likes[key] > 1 ? 's' : ''}`;
      likesList.appendChild(li);
    }
  }

  // Comment button event listener
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentInput = document.getElementById('comment-input');
    let comment = commentInput.value;
    if (comment) {
      let p = document.createElement('p');
      p.innerText = comment;
      commentList.appendChild(p);
      commentInput.value = '';
    }
  });
});
