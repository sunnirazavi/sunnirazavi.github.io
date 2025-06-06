// Audio Data Configuration with updated URLs and lazy-loading attributes
const audioData = [
  {
    id: "Kya Hi Zoq Afza",
    title: "Kya Hi Zoq Afza Shafaat Hai Tumhari Wah Wah",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Kya%20Hi%20Zoq%20Afza%20Shafaat%20-%20Owais%20Raza%20Qadri%20-%202021.mp3?v=1.0",
    thumb: "Thumbnail/Kya%20Hi%20Zoq%20Afza%20Shafaat.jpeg?v=1.0",
    featured: true,
  },
  {
    id: "qaseeda burda shareef",
    title: "Qaseeda Burda Shareef With Kalam E Raza",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/qaseeda-burda-shareef.mp3?v=1.0",
    thumb: "Thumbnail/qaseeda-burda-shareef.png?v=1.0",
  },
  {
    id: "wo soye lalazar new tarz",
    title: "Wo Soye Lalazar Phirte Hain - New Tarz",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/wo-soye-lalazar-new-tarz.mp3?v=1.0",
    thumb: "Thumbnail/wo-soye-lalazar-new-tarz.png?v=1.0",
  },
  {
    id: "wo soye lalazar",
    title: "Wo Soye Lalazar Phirte Hain",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/wo-soye-lalazar.mp3?v=1.0",
    thumb: "Thumbnail/wo-soye-lalazar.png?v=1.0",
  },
  {
    id: "utha do parda",
    title: "Utha Do Parda Dikha do Chehra",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/utha-do-parda.mp3?v=1.0",
    thumb: "Thumbnail/utha-do-parda.png?v=1.0",
  },
  {
    id: "pul se utaro",
    title: "Pul Se Utaro Rah Guzar Ko Khabar Na HO",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/pul-se-utaro.mp3?v=1.0",
    thumb: "Thumbnail/pul-se-utaro.png?v=1.0",
  },
  {
    id: "kuch aisa kar de",
    title: "Kuch Aisa Kar De Mere Kirdgar Aankhon Mein",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/kuch-aisa-kar-de.mp3?v=1.0",
    thumb: "Thumbnail/kuch-aisa-kar-de.png?v=1.0",
  },
  {
    id: "wo kamal",
    title: "Wo Kamal E Husn E Huzoor Hain",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/wo-kamal.mp3?v=1.0",
    thumb: "Thumbnail/wo-kamal.png?v=1.0",
  },
  {
    id: "jo ishq e nabi",
    title: "Jo Ishq E Nabi Ke Jalwon Ko Seeno Mein Basaya Karte Hain",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/jo-ishq-e-nabi.mp3?v=1.0",
    thumb: "Thumbnail/jo-ishq-e-nabi.png?v=1.0",
  },
  {
    id: "hum par saya",
    title: "Khuda Ke Fazal Se Hum Par Hai Saya Ghous E Aazam Ka",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/hum-par-saya.mp3?v=1.0",
    thumb: "Thumbnail/hum-par-saya.png?v=1.0",
  },
  {
    id: "Zameen O Zaman",
    title: "Zameen O Zaman Tumhare Liye",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Zameen%20O%20Zaman%20Tumhare%20Liye%20-%20Owais%20Raza%20Qadri.mp3?v=1.0",
    thumb: "Thumbnail/Zameen%20O%20Zaman%20Tumhare%20Liye.jpeg?v=1.0",
  },
  {
    id: "Sir Taba Qadam",
    title: "Sir Taba Qadam Hai Tane Sultan E Zaman Phool",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Sir%20Taba%20Qadam%20Hai%20Tane%20Sultan%20E%20Zaman%20Phool%20-%20Owais%20Raza%20Qadri.mp3?v=1.0",
    thumb: "Thumbnail/Sir%20Taba%20Qadam.jpeg?v=1.0",
  },
  {
    id: "Chaman E Taiba Mein Sumbul",
    title: "Chaman E Taiba Mein Sumbul Jo Saware Gesu",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Chaman%20E%20Taiba%20Mein%20Sumbul%20-%20Owais%20Raza%20Qadri.mp3?v=1.0",
    thumb: "Thumbnail/Chaman%20E%20Taiba%20Mein%20Sumbul.jpeg?v=1.0",
  },
  {
    id: "Dekhni Hai Hashr Mein",
    title: "Dekhni Hai Hashr Mein Izzat Rasoolullah Ki",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Dekhni%20Hai%20Hashr%20Mein%20Izzat%20Rasoolullah%20Ki%20-%20Owais%20Raza%20Qadri.mp3?v=1.0",
    thumb: "Thumbnail/Dekhni%20Hai%20Hashr%20Mein.jpeg?v=1.0",
  },
  {
    id: "Sachi Baat Sikhatey Ye Hain",
    title: "Sachi Baat Sikhatey Ye Hain",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Sachi%20Baat%20Sikhatey%20Ye%20Hain%20-%20Owais%20Raza%20Qadri.mp3?v=1.0",
    thumb: "Thumbnail/Sachi%20Baat%20Sikhatey%20Ye%20Hain.jpeg?v=1.0",
  },
  {
    id: "Hajiyon Aao",
    title: "Hajiyon Aao Shehenshah Ka Roza Dekho",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Hajiyon%20Aao%20Shehenshah%20Ka%20Roza%20Dekho%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Hajiyon%20Aao.jpeg",
  },
  {
    id: "Lutf Unka",
    title: "Lutf Unka Aam Ho Hi Jayega",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Lutf%20Unka%20Aam%20Ho%20Hi%20Jayega%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Lutf%20Unka%20Aam.jpeg",
  },
  {
    id: "Bakhte Khufta Ne",
    title: "Bakhte Khufta Ne Mujhe Roze Pe Jane Na Diya",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Bakhte%20Khufta%20Ne%20Mujhe%20Roze%20Pe%20Jane%20Na%20Diya%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Bakhte%20Khufta%20Ne.jpeg",
  },
  {
    id: "Bakhte Khufta Ne 2",
    title: "Bakhte Khufta Ne Mujhe Roze Pe Jane Na Diya 2",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Bakhte%20Khufta%20Ne%20Mujhe%20Roze%20Pe%20Jane%20Na%20Diya%202%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Bakhte%20Khufta%20Ne%20-%202.jpeg",
  },
  {
    id: "Har Waqt Tasawwar",
    title: "Har Waqt Tasawwar Mein Madine Ki Gali Ho",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Har%20Waqt%20Tasawwar%20Mein%20Madine%20Ki%20Gali%20Ho%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Har%20Waqt%20Tasawwar.jpeg",
  },
  {
    id: "Zameen O Zaman 2",
    title: "Zameen O Zaman Tumhare Liye 2",
    Reciter: "Owais Raza Qadri",
    file: "Naat-Collection/Zameen%20O%20Zaman%20Tumhare%20Liye%202%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Zameen%20O%20Zaman%20Tumhare%20Liye%20-%202.jpeg",
  },
  {
    id: "Sir Taba Qadam 2",
    title: "Sir Taba Qadam Hai Tane Sultan E Zaman Phool 2",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Sir%20Taba%20Qadam%20Hai%20Tane%20Sultan%20E%20Zaman%20Phool%202%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Sir%20Taba%20Qadam%20-%202.jpeg",
  },
  {
    id: "Bakhte Khufta Ne 3",
    title: "Bakhte Khufta Ne Mujhe Roze Pe Jane Na Diya 3",
    Reciter: "Owais Raza Qadri",
    file: "https://cdn.jsdelivr.net/gh/sunnirazavi/Naat-Collection@main/Bakhte%20Khufta%20Ne%20Mujhe%20Roze%20Pe%20Jane%20Na%20Diya%203%20-%20Owais%20Raza%20Qadri.mp3",
    thumb: "Thumbnail/Bakhte%20Khufta%20Ne%20-%203.jpeg",
  },
];

// Pagination configuration for lazy/infinite loading
let itemsPerPage = 3;
let currentPage = 0;
let currentFilteredData = null;

// Get featured track from URL (or default to track id 1)
const urlParams = new URLSearchParams(window.location.search);
const featuredId = urlParams.get("featured") || "Kya Hi Zoq Afza";
const featuredTrack =
  audioData.find((track) => track.id === featuredId) || audioData[0];

// Initialize Fuse.js for fuzzy searching.
const fuseOptions = {
  keys: ["title", "Reciter"],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
};
const fuse = new Fuse(audioData, fuseOptions);
const default_thumb = "default_thumb.png";
// Function to generate HTML for the featured audio track
function createFeaturedAudio(track) {
  return `
      <div class="featured-audio">
        <img src="${track.thumb}" alt="Featured Track" class="featured-thumbnail" loading="lazy" onerror="this.onerror=null; this.src='default_thumb.png';">
        <div class="featured-info">
          <h2 class="featured-title">Featured: ${track.title}</h2>
          <audio controls preload="none">
            <source src="${track.file}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          <a href="${track.file}" download class="download-btn">Download Featured Naat</a>
        </div>
      </div>
    `;
}

// Function to generate HTML for a single audio item
function createAudioItem(track) {
  return `
      <div class="audio-item">
        <img src="${
          track.thumb || default_thumb
        }" alt="Track Cover" class="thumbnail" loading="lazy" onerror="this.onerror=null; this.src='default_thumb.png';">
        <div class="track-info">
          <h3 class="track-title">${track.title}</h3>
          <p class="track-Reciter">${track.Reciter}</p>
        </div>
        <audio controls preload="none">
          <source src="${track.file}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <a href="${track.file}" download class="download-btn">Download</a>
      </div>
    `;
}
function handleAudioControls() {
  const audios = document.querySelectorAll("audio");
  let currentAudio = null;

  audios.forEach((audio) => {
    if (audio.previousElementSibling?.classList.contains("loading-text"))
      return;

    const loadingText = document.createElement("div");
    loadingText.textContent = "🔄 Audio Loading...";
    loadingText.classList.add("loading-text");
    loadingText.style.marginBottom = "8px";
    loadingText.style.fontSize = "14px";
    loadingText.style.color = "#ccc";
    loadingText.style.display = "none";
    audio.parentNode.insertBefore(loadingText, audio);

    let timeoutId;

    audio.addEventListener("play", () => {
      if (currentAudio && currentAudio !== audio) currentAudio.pause();
      currentAudio = audio;

      loadingText.style.display = "block";
      loadingText.textContent = "🔄 Audio Loading...";

      // ⏱ Timeout after 10 seconds
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!audio.readyState || audio.readyState < 3) {
          loadingText.textContent = "❌ Failed to load (Timeout)";
          loadingText.style.color = "red";
        }
      }, 10000);
    });

    const hideLoading = () => {
      loadingText.style.display = "none";
      clearTimeout(timeoutId);
    };

    audio.addEventListener("canplaythrough", hideLoading);
    audio.addEventListener("playing", hideLoading);
    audio.addEventListener("pause", hideLoading);

    audio.addEventListener("error", () => {
      loadingText.textContent = "❌ Failed to load (Error)";
      loadingText.style.color = "red";
      clearTimeout(timeoutId);
    });
  });
}

// Render a page of audio items (for lazy loading)
function renderAudioPage(filteredData) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToRender = filteredData.slice(startIndex, endIndex);
  const audioList = document.getElementById("audio-list");
  audioList.insertAdjacentHTML(
    "beforeend",
    itemsToRender.map(createAudioItem).join("")
  );
  handleAudioControls();
  currentPage++;
}

// Function to reset and render the audio list from the beginning
function renderAudioList(filteredData = null) {
  currentPage = 0;
  currentFilteredData =
    filteredData || audioData.filter((track) => track.id != featuredTrack.id);
  document.getElementById("audio-list").innerHTML = "";
  renderAudioPage(currentFilteredData);
}

// Initial Render: Display featured track and first page of audio list
document.getElementById("featured").innerHTML =
  createFeaturedAudio(featuredTrack);
renderAudioList();

// Infinite scroll: load next page when near bottom of the page
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (currentPage * itemsPerPage < currentFilteredData.length) {
      renderAudioPage(currentFilteredData);
    }
  }
});

// Improved Search using Fuse.js on the navigation search bar
document.getElementById("nav-search").addEventListener("input", function () {
  let query = this.value.trim();
  if (query === "") {
    document.getElementById("featured").innerHTML =
      createFeaturedAudio(featuredTrack);
    renderAudioList();
  } else {
    document.getElementById("featured").innerHTML = "";
    let results = fuse.search(query);
    let filteredData = results.map((result) => result.item);
    renderAudioList(filteredData);
  }
});

// Alert Banner Dismissal Logic
const alertBanner = document.getElementById("alert-banner");
const closeAlertBtn = document.getElementById("close-alert");
closeAlertBtn.addEventListener("click", () => {
  alertBanner.style.display = "none";
});

// Feedback Modal Logic
const feedbackBtn = document.getElementById("feedback-btn");
const feedbackModal = document.getElementById("feedback-modal");
const closeBtn = document.querySelector(".modal .close");
feedbackBtn.addEventListener("click", () => {
  feedbackModal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  feedbackModal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target == feedbackModal) {
    feedbackModal.style.display = "none";
  }
});

// Register the Service Worker for caching assets
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) =>
      console.log("Service Worker registered:", registration)
    )
    .catch((err) => console.error("Service Worker registration failed:", err));
}
