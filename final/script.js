const protectedPage = document.querySelector(".protected");

if (protectedPage && sessionStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

const loginButton = document.querySelector("#loginButton");

if (loginButton) {
  loginButton.addEventListener("click", function () {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const loginMessage = document.querySelector("#loginMessage");

    if (username === "Kate" && password === "password") {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "desktop.html";
    } else {
      loginMessage.textContent = "Incorrect login. Try again!";
    }
  });
}

const logoutButton = document.querySelector("#logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
}

const clock = document.querySelector("#clock");

function updateClock() {
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
  }
}

setInterval(updateClock, 1000);
updateClock();

const menuButton = document.querySelector("#menuButton");
const startMenu = document.querySelector("#startMenu");

if (menuButton && startMenu) {
  menuButton.addEventListener("click", function () {
    startMenu.classList.toggle("open");
  });
}

const fontButton = document.querySelector("#fontButton");

const fonts = [
  '"WindowsFont", monospace',
  'Arial, sans-serif',
  'Georgia, serif',
  '"Courier New", monospace',
  'Verdana, sans-serif'
];

let fontIndex = 0;

const savedFont = localStorage.getItem("selectedFont");

if (savedFont) {
  document.body.style.fontFamily = savedFont;

  const existingIndex = fonts.indexOf(savedFont);

  if (existingIndex !== -1) {
    fontIndex = existingIndex;
  }
}

if (fontButton) {
  fontButton.addEventListener("click", function () {

    fontIndex++;

    if (fontIndex >= fonts.length) {
      fontIndex = 0;
    }

    const newFont = fonts[fontIndex];

    document.body.style.fontFamily = newFont;

    localStorage.setItem("selectedFont", newFont);
  });
}

const fontSlider = document.querySelector("#fontSlider");

const savedSize = localStorage.getItem("fontSize");

if (savedSize) {
  document.body.style.fontSize = savedSize;
}

if (savedSize) {
  document.body.style.fontSize = savedSize;
}

if (fontSlider) {
  if (savedSize) {
    fontSlider.value = parseInt(savedSize);
  }

  fontSlider.addEventListener("input", function () {
    const newSize = fontSlider.value + "px";
    document.body.style.fontSize = newSize;
    localStorage.setItem("fontSize", newSize);
  });
}

if (fontSlider) {
  if (savedSize) {
    fontSlider.value = parseInt(savedSize);
  }

  fontSlider.addEventListener("input", function () {
    const newSize = fontSlider.value + "px";

    document.body.style.fontSize = newSize;

    localStorage.setItem("fontSize", newSize);
  });
}
const closeButtons = document.querySelectorAll(".close-window");

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetId = button.dataset.target;
    const target = document.querySelector("#" + targetId);
    target.style.display = "none";
  });
});

const expandButtons = document.querySelectorAll(".expand-window");

expandButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const targetId = button.dataset.target;
    const target = document.querySelector("#" + targetId);
    target.classList.toggle("expanded");
  });
});

const projects = {
  despite: {
    title: "Despite Everything",
    logline: "After an angel has their wings ripped off, they can no longer see themselves as an angel, and now they try to rediscover their identity by helping a woman named Sydney with her ailing father.",
    stills: ["images/despite-1.jpg", "images/despite-2.jpg", "images/despite-3.jpg"]
  },

  counselors: {
    title: "Counselors",
    logline: "First time camp counselor Jack butts heads with veteran camp counselor Jessica, who he believes is not prioritizing the campers’ safety.",
    stills: ["images/counselors-1.jpg", "images/counselors-2.jpg", "images/counselors-3.jpg"]
  },

  input: {
    title: "Input:Offput",
    logline: "In order to make some more cash, broke college student Leo decides to take part in an experimental study where they put a chip in her brain...what could go wrong?",
    stills: ["images/input-1.jpg", "images/input-2.jpg", "images/input-3.jpg"]
  },

  mother: {
    title: "Like Your Mother",
    logline: "A timid young girl must keep a haunting secret from her parents about one of her family members at her own birthday party.",
    stills: ["images/mother-1.jpg", "images/mother-2.jpg", "images/mother-3.jpg"]
  },

  evanescent: {
    title: "Evanescent",
    logline: "As Jo manages the first few days of raising her sister after their father unexpectedly passes away, she struggles to deal with them in their own unique ways.",
    stills: ["images/evanescent-1.jpg", "images/evanescent-2.jpg", "images/evanescent-3.jpg"]
  },

  sweeteners: {
    title: "Artificial Sweeteners",
    logline: "Murder is legal, but nobody cares, and two corpse cleaning janitors bicker and banter from job to job until their disagreement on how the job should be handled boils over and shakes up their status quo.",
    stills: ["images/sweeteners-1.jpg", "images/sweeteners-2.jpg", "images/sweeteners-3.jpg"]
  },

  november: {
    title: "November",
    logline: "On the last day of the month, a girl relives the past Novembers spent with her best friend, until their last.",
    stills: ["images/november-1.jpg", "images/november-2.jpg", "images/november-3.jpg"]
  },

  hear: {
    title: "Hear Me Out",
    logline: "A young woman introduces her undead boyfriend to her queer roommates, to mixed reactions.",
    stills: ["images/hear-1.jpg", "images/hear-2.jpg", "images/hear-3.jpg"]
  },

  ali: {
    title: "Ali's World Famous Halal Cart",
    logline: "After inheriting her estranged father’s halal cart, a 23-year-old girl stumbles into New York’s street-vendor black market to learn the truth about who he was.",
    stills: ["images/ali-1.jpg", "images/ali-2.jpg", "images/ali-3.jpg"]
  },

  creekside: {
    title: "Surviving Creekside",
    logline: "After a hate virus breaks out three outcast students must find a way to save the world and their school.",
    stills: ["images/creekside-1.jpg", "images/creekside-2.jpg", "images/creekside-3.jpg"]
  },

  mortality: {
    title: "On the Subject of Mortality",
    logline: "In a pseudo-documentary, an interviewer attempts to reckon with the concept of mortality by interviewing a mortician, a Rabbi, and an elderly woman, growing increasingly frustrated when none of them have the answers she’s looking for before taking matters into her own hands.",
    stills: ["images/mortality-1.jpg", "images/mortality-2.jpg", "images/mortality-3.jpg"]
  }
};

const popupArea = document.querySelector("#popupArea");

function openProject(projectKey) {
  const project = projects[projectKey];

  const popup = document.createElement("section");
  popup.className = "window project-popup";
  popup.style.left = "20%";
  popup.style.top = "20%";

  popup.innerHTML = `
    <div class="window-bar draggable-bar">
      <h2>${project.title}</h2>
      <button class="popup-close">X</button>
    </div>

    <div class="window-content">
      <p>${project.logline}</p>
      <img class="popup-still" src="${project.stills[0]}" width="800" height="450" alt="${project.title} still">

      <div class="popup-buttons">
        <button class="previous-still">Previous</button>
        <button class="next-still">Next</button>
      </div>
    </div>
  `;

  popupArea.appendChild(popup);

  let stillIndex = 0;
  const popupImage = popup.querySelector(".popup-still");

  popup.querySelector(".next-still").addEventListener("click", function () {
    stillIndex++;
    if (stillIndex >= project.stills.length) {
      stillIndex = 0;
    }
    popupImage.src = project.stills[stillIndex];
  });

  popup.querySelector(".previous-still").addEventListener("click", function () {
    stillIndex--;
    if (stillIndex < 0) {
      stillIndex = project.stills.length - 1;
    }
    popupImage.src = project.stills[stillIndex];
  });

  popup.querySelector(".popup-close").addEventListener("click", function () {
    popup.remove();
  });

  makeWindowDraggable(popup);
}

function makeWindowDraggable(windowElement) {
  const bar = windowElement.querySelector(".draggable-bar");

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  bar.addEventListener("mousedown", function (event) {
    isDragging = true;
    offsetX = event.clientX - windowElement.offsetLeft;
    offsetY = event.clientY - windowElement.offsetTop;
    windowElement.style.zIndex = Date.now();
  });

  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      windowElement.style.left = event.clientX - offsetX + "px";
      windowElement.style.top = event.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

const projectButtons = document.querySelectorAll(".project-icon");

projectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    openProject(button.dataset.project);
  });
});
const savedWallpaper = localStorage.getItem("wallpaper");

if (savedWallpaper && document.body.classList.contains("desktop-page")) {
  document.body.classList.add(savedWallpaper);
}

const wallpaperButtons = document.querySelectorAll(".wallpaper-choice");

wallpaperButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    document.body.classList.remove("wallpaper-1", "wallpaper-2", "wallpaper-3", "wallpaper-4");

    const wallpaper = button.dataset.wallpaper;
    document.body.classList.add(wallpaper);

    localStorage.setItem("wallpaper", wallpaper);
  });
});

const gearIcon = document.querySelector("#gearIcon");
const accessibilityWindow = document.querySelector("#accessibilityWindow");

if (gearIcon && accessibilityWindow) {
  gearIcon.addEventListener("click", function() {
    accessibilityWindow.style.display = "block";
  });
}
const cameraIcon = document.querySelector("#cameraIcon");
const trashIcon = document.querySelector("#trashIcon");
const filmIcon = document.querySelector("#filmIcon");
const desktopPopupArea = document.querySelector("#desktopPopupArea");

function createDesktopPopup(title, content) {
  const popup = document.createElement("section");
  popup.className = "window project-popup";
  popup.style.left = "25%";
  popup.style.top = "20%";

  popup.innerHTML = `
    <div class="window-bar draggable-bar">
      <h2>${title}</h2>
      <button class="popup-close">X</button>
    </div>
    <div class="window-content">
      ${content}
    </div>
  `;

  desktopPopupArea.appendChild(popup);

  popup.querySelector(".popup-close").addEventListener("click", function () {
    popup.remove();
  });

  makeWindowDraggable(popup);
}

if (cameraIcon) {
  cameraIcon.addEventListener("click", function () {
    createDesktopPopup(
      "Headshot",
      `<img src="images/headshot-800.jpg" width="800" height="1000" alt="Kate Fugitt headshot" class="popup-photo">`
    );
  });
}
if (document.title.includes("Desktop") && desktopPopupArea && cameraIcon) {
  createDesktopPopup(
    "Welcome!",
    `<p>Hi! My name is Kate. I'm a senior at NYU studying Film & Television. This is my portfolio website &lt;3</p>`
  );

  createDesktopPopup(
    "Headshot",
    `<img src="images/headshot-800.jpg" width="800" height="1000" alt="Kate Fugitt headshot" class="popup-photo">`
  );
}

const quotes = [
  "Sunday: With great power comes great responsibility",
  "Monday: Life moves pretty fast. If you don't stop and look around once in a while, you can miss it",
  "Tuesday: I gotta keep breathing. Because the sun will rise. Who knows what the tide can bring?",
  "Wednesday: Why do we fall, sir? So that we can learn to pick ourselves up",
  "Thursday: There's a difference between knowing the path and walking the path",
  "Friday: Other animals live in the present. Humans cannot, so they invented hope",
  "Saturday: It ain't about how hard you hit, it's about how you can get hit and keep moving forward, how much you can take and keep moving forward. That's how winning is done!"
];

if (trashIcon) {
  trashIcon.addEventListener("click", function () {
    const day = new Date().getDay();
    createDesktopPopup("Trash Wisdom", `<p>${quotes[day]}</p>`);
  });
}

const randomVideos = [
  "https://www.youtube.com/watch?v=p4DHbZCuQAc",
  "https://www.youtube.com/watch?v=NTEkeT4j6H8&t=2s",
  "https://www.youtube.com/watch?v=bwqgasP27Ww&t=47s",
  "https://www.youtube.com/watch?v=MRawObT6dMk",
  "https://www.youtube.com/watch?v=ctCsajNw52w",
  "https://www.youtube.com/watch?v=Vjht-tXpDwQ",
  "https://www.youtube.com/watch?v=ziEMj5WEAI8&t=299s"
];

if (filmIcon) {
  filmIcon.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * randomVideos.length);
    window.open(randomVideos[randomIndex], "_blank");
  });
}
const resumeButton = document.querySelector("#resumeButton");
const resumePopupArea = document.querySelector("#resumePopupArea");

if (resumeButton && resumePopupArea) {
  resumeButton.addEventListener("click", function () {
    const popup = document.createElement("section");
    popup.className = "window resume-popup";
    popup.style.left = "10%";
    popup.style.top = "8%";

    popup.innerHTML = `
      <div class="window-bar draggable-bar">
        <h2>Resume</h2>
        <div>
          <button class="resume-expand">□</button>
          <button class="popup-close">X</button>
        </div>
      </div>

      <div class="window-content resume-content">
        <iframe src="Kate-Resume-2026-Summer.pdf" title="Kate Fugitt Resume"></iframe>
      </div>
    `;

    resumePopupArea.appendChild(popup);

    popup.querySelector(".popup-close").addEventListener("click", function () {
      popup.remove();
    });

    popup.querySelector(".resume-expand").addEventListener("click", function () {
      popup.classList.toggle("resume-expanded");
    });

    makeWindowDraggable(popup);
  });
}
const aboutWindow = document.querySelector("#aboutWindow");
const aboutIcon = document.querySelector("#aboutIcon");

if (aboutIcon && aboutWindow) {
  aboutIcon.addEventListener("click", function () {
    aboutWindow.style.display = "block";
  });
}
const projectsIcon = document.querySelector("#projectsIcon");
const projectsWindow = document.querySelector("#projectsWindow");

if (projectsIcon && projectsWindow) {
  projectsIcon.addEventListener("click", function () {
    projectsWindow.style.display = "block";
  });
}
const accentButtons = document.querySelectorAll(".accent-choice");
const cursorButtons = document.querySelectorAll(".cursor-choice");
const resetSettingsButton = document.querySelector("#resetSettingsButton");

const accentThemes = ["accent-grey", "accent-black", "accent-white"];
const cursorThemes = ["cursor-crosshair", "cursor-help", "cursor-grab"];

const savedAccent = localStorage.getItem("accentTheme");

if (savedAccent) {
  document.body.classList.add(savedAccent);
} else {
  document.body.classList.add("accent-grey");
}

accentButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    document.body.classList.remove(...accentThemes);

    const accent = button.dataset.accent;
    document.body.classList.add(accent);

    localStorage.setItem("accentTheme", accent);
  });
});

const savedCursor = localStorage.getItem("cursorTheme");

if (savedCursor) {
  document.body.classList.add(savedCursor);
}
cursorButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    document.body.classList.remove(...cursorThemes);

    const cursor = button.dataset.cursor;

    if (cursor !== "") {
      document.body.classList.add(cursor);
    }

    localStorage.setItem("cursorTheme", cursor);
  });
});

if (resetSettingsButton) {
  resetSettingsButton.addEventListener("click", function () {
    localStorage.removeItem("selectedFont");
    localStorage.removeItem("fontSize");
    localStorage.removeItem("wallpaper");
    localStorage.setItem("accentTheme", "accent-grey");
    localStorage.removeItem("cursorTheme");

    document.body.style.fontFamily = "";
    document.body.style.fontSize = "";

    document.body.classList.remove(
      "wallpaper-1",
      "wallpaper-2",
      "wallpaper-3",
      "wallpaper-4",
      ...accentThemes,
      ...cursorThemes
    );

    document.body.classList.add("accent-grey");
  });
}
const allIcons = document.querySelectorAll(".desktop-icon, .project-icon");

allIcons.forEach(function(icon) {
  icon.addEventListener("click", function() {
    icon.classList.toggle("clicked");
  });
});