(() => {
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");
  const loader = document.querySelector("#loader");

  function showLoader() {
    loader.classList.remove("hidden");
  }

  function hideLoader() {
    loader.classList.add("hidden");
  }

  function fetchMaterials() {
    showLoader();

    fetch("https://swiftpixel.com/earbud/api/materials")
      .then(handleFetchResponse)
      .then(renderMaterials)
      .catch(handleFetchError);
  }

  function handleFetchResponse(response) {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); 
  }

  function renderMaterials(materials) {
    materialList.innerHTML = "";

    materials.forEach(material => {
      const clone = materialTemplate.content.cloneNode(true);
      clone.querySelector(".material-heading").textContent = material.heading;
      clone.querySelector(".material-description").textContent = material.description;
      materialList.appendChild(clone);
    });

    hideLoader();
  }

  function handleFetchError(error) {
    hideLoader();

    const errorItem = document.createElement("li");
    errorItem.textContent = "Failed to load. Try again later because it might be a problem on our end.";
    materialList.appendChild(errorItem);

    console.error("Fetch error:", error);
  }

  function loadHotspotInfo() {
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then(handleFetchResponse)
      .then(renderHotspotInfo)
      .catch(error => {
        console.error("Hotspot fetch error:", error);
      });
  }

  function renderHotspotInfo(infoBoxes) {
    infoBoxes.forEach((infoBox, index) => {
      const selected = document.querySelector(`#hotspot-${index + 1}`);
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.heading;
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.description;
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }

  function showInfo() {
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  fetchMaterials();
  loadHotspotInfo();
})();

(() => {
    const menu = document.querySelector('#menu');
    const hamburger = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close');
    const menuLinks = document.querySelectorAll('#menu nav ul li a');


    function toggleMenu() {
        menu.classList.toggle('open');
        document.body.classList.toggle("no-scroll");
    }


    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
})();

(() => {
    console.log("IIFE Called");

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 218;

    const images = [];
    const buds = {
        frame: 0
    }

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `images/scrolling-earbuds${(i+1).toString().padStart(3, '0')}.webp`;
        images.push(img);
    }

    console.log(images);
    gsap.to(buds, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
            markers: false
        },
        onUpdate: render
    });

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

})();

(() => {

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor() {
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);
})();
