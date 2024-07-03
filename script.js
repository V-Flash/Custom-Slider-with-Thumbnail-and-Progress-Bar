let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0; // Progress bar animation state
let postIndex = 0; // Index of the current slide
let currentPost = posts[postIndex]; // Current slide element
let currentMainPost = mainPosts[postIndex]; // Corresponding main post element

let progressInterval = setInterval(progress, 60); // Start progress interval

// Initialize click event listeners for each .post
posts.forEach((post, index) => {
  post.addEventListener("click", () => {
    // Stop progress interval
    clearInterval(progressInterval);
    i = 0; // Reset progress bar animation state

    // Update postIndex to the clicked post's index
    postIndex = index;

    // Reset progress bars and remove active classes from current slides
    posts.forEach((p) => {
      p.querySelector(".progress-bar__fill").style.width = 0;
      p.classList.remove("post--active");
    });
    mainPosts.forEach((mp) => mp.classList.remove("main-post--active"));

    // Update current slide and main post references
    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];

    // Activate the clicked slide
    currentPost.querySelector(".progress-bar__fill").style.width = "100%";
    currentPost.classList.add("post--active");
    currentMainPost.classList.add("main-post--active");

    // Restart progress interval
    progressInterval = setInterval(progress, 60);
  });
});

// Progress function
function progress() {
  if (i === 100) {
    i = -5; // Reset the progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

  if (postIndex === posts.length) {
      postIndex = 0;
    }
    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } 
  else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

// Navigation buttons
document.querySelector(".carousel__prev-btn").addEventListener("click", prevSlide);
document.querySelector(".carousel__next-btn").addEventListener("click", nextSlide);

// Previous slide function
function prevSlide() {
  clearInterval(progressInterval);
  i = 0;

  currentPost.querySelector(".progress-bar__fill").style.width = 0;
  currentPost.classList.remove("post--active");
  currentMainPost.classList.remove("main-post--active");

  postIndex--;
  if (postIndex < 0) {
    postIndex = posts.length - 1;
  }

  currentPost = posts[postIndex];
  currentMainPost = mainPosts[postIndex];

  currentPost.querySelector(".progress-bar__fill").style.width = "100%";
  currentPost.classList.add("post--active");
  currentMainPost.classList.add("main-post--active");

  progressInterval = setInterval(progress, 60);
}

// Next slide function
function nextSlide() {
  clearInterval(progressInterval);
  i = 0;

  currentPost.querySelector(".progress-bar__fill").style.width = 0;
  currentPost.classList.remove("post--active");
  currentMainPost.classList.remove("main-post--active");

  postIndex++;
  if (postIndex === posts.length) {
    postIndex = 0;
  }

  currentPost = posts[postIndex];
  currentMainPost = mainPosts[postIndex];

  currentPost.querySelector(".progress-bar__fill").style.width = "100%";
  currentPost.classList.add("post--active");
  currentMainPost.classList.add("main-post--active");

  progressInterval = setInterval(progress, 60);
}