document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    function loadContent(url) {
        console.log('Loading content for URL:', url);  // Debugging log

        // Fade out current content
        contentDiv.style.opacity = 0;

        setTimeout(() => {
            fetch(`${url}.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    contentDiv.innerHTML = data;
                    console.log('Loaded HTML content for:', url);  // Debugging log

                    // Fade in new content
                    setTimeout(() => {
                        contentDiv.style.opacity = 1;
                    }, 10);

                    // Set active tab
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === url) {
                            link.classList.add('active');
                        }
                    });

                    // Initialize specific content based on the active tab
                    if (url === '/bio') {
                        initializeBioContent();
                    } else if (url === '/3d') {
                        initialize3dContent();
                    } else if (url === '/photo') {
                        initializePhotoContent();
                        console.log('Photo content should be initialized now');  // Debugging log
                    }
                })
                .catch(error => {
                    contentDiv.innerHTML = `<h1>Page Not Found</h1>`;
                    contentDiv.style.opacity = 1;
                    console.error('Error loading content:', error);  // Debugging log
                });
        }, 500); // Match the transition duration
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = new URL(this.href);
            history.pushState({}, '', url.pathname);
            loadContent(url.pathname);
        });
    });

    window.addEventListener('popstate', function() {
        loadContent(window.location.pathname);
    });

    const initialPath = window.location.pathname === '/' ? '/bio' : window.location.pathname;
    loadContent(initialPath);
});




// Define the images structure directly in JavaScript
const images = [
    // Budapest images
    { name: "bud02.jpg", label: "Musée ethnographique", architect: "Napur Architect", details: "Budapest, HU", cover: "yes", folder: 1 },
    { name: "bud01.jpg", label: "Musée ethnographique", architect: "Napur Architect", details: "Budapest, HU", cover: "no", folder: 1 },
    { name: "bud03.jpg", label: "Musée ethnographique", architect: "Napur Architect", details: "Budapest, HU", cover: "no", folder: 1 },
    { name: "bud04.jpg", label: "Musée ethnographique", architect: "Napur Architect", details: "Budapest, HU", cover: "no", folder: 1 },
    { name: "bud05.jpg", label: "Musée ethnographique", architect: "Napur Architect", details: "Budapest, HU", cover: "no", folder: 1 },
    // Gropius House
    { name: "gro6.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA, USA", cover: "yes", folder: 2 },
    { name: "gro3.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA", cover: "no", folder: 2 },
    { name: "gro5.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA", cover: "no", folder: 2 },    
    { name: "gro2.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA", cover: "no", folder: 2 },
    { name: "gro4.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA", cover: "no", folder: 2 },
    { name: "gro1.jpg", label: "Gropius House", architect: "Walter Gropius", details: "Lincoln, MA", cover: "no", folder: 2 },
    // Stuttgart images
    { name: "stu6.jpg", label: "Bibliothèque de Stuttgart", architect: "Yi Architects", details: "Stuttgart, GE", cover: "yes", folder: 3 },
    { name: "stu1.jpg", label: "Bibliothèque de Stuttgart", architect: "Yi Architects", details: "Stuttgart, GE", cover: "no", folder: 3 },
    { name: "stu5.jpg", label: "Bibliothèque de Stuttgart", architect: "Yi Architects", details: "Stuttgart, GE", cover: "no", folder: 3 },
    { name: "stu4.jpg", label: "Bibliothèque de Stuttgart", architect: "Yi Architects", details: "Stuttgart, GE", cover: "no", folder: 3 },
    { name: "stu2.jpg", label: "Bibliothèque de Stuttgart", architect: "Yi Architects", details: "Stuttgart, GE", cover: "no", folder: 3 },
    // Montserrat images
    { name: "mont2-2.jpg", label: "Monastère de Montserrat", architect: "Francesc Folguera", details: "Montserrat, ES", cover: "yes", folder: 6 },
    { name: "mont1-2.jpg", label: "Monastère de Montserrat", architect: "Francesc Folguera", details: "Montserrat, ES", cover: "no", folder: 6 },
    // Erdely images
    { name: "erd2-2.jpg", label: "Csíkszereda House", architect: "Architecte confidentiel", details: "Miercurea Ciuc, RO", cover: "yes", folder: 5 },
    { name: "erd1-2.jpg", label: "Csíkszereda House", architect: "Architecte confidentiel", details: "Miercurea Ciuc, RO", cover: "no", folder: 5 },
    { name: "erd4-2.jpg", label: "Csíkszereda House", architect: "Architecte confidentiel", details: "Miercurea Ciuc, RO", cover: "no", folder: 5 },
];

const renders = [
    // BIOMES
    { name: "bio1.jpg", label: "Biomes", architect: "", details: "", cover: "yes", folder: 2 },
    { name: "bio1.2.jpg", label: "", architect: "", details: "Projet spéculatif supervisé par Jean Verville. Le projet imagine une cité verticale construite à base de fragments de plate-formes pétrolières, en chantier perpétuel.", cover: "no", folder: 2 },
    { name: "bio3.jpg", label: "", architect: "", details: "À l'intérieur des aires de vie de la ville, on retrouve un assemblage polyphonique de mobiliers de plateforme récupérés et des possessions que les habitants amènent avec eux depuis leurs pays natals.", cover: "no", folder: 2 },
    { name: "bio2.jpg", label: "", architect: "", details: "La circulation verticale dans la tour se fait à plusieurs échelles et degrés de vitesse. Le moyen plus lent et répandu est l'escalier, mais on retrouve également des ascenseurs pour les déplacements intermédiaires et l'hélicoptère pour des distances verticales exceptionnelles.", cover: "no", folder: 2 },
    { name: "bio4.jpg", label: "", architect: "", details: "L'autosuffisance de la tour est assurée par la récupération d'eaux de pluie, de l'humidité des nuages dépendamment de la hauteur. Au bas de la tour, l'océan sert de grande ressource pour l'alimentation. Chaque goutte d'eau est utilisée au mieux possible.", cover: "no", folder: 2 },
    // MUSIQUE POUR QUATRE RÈGNES
    { name: "mus1.2.jpg", label: "Musique pour quatre règnes", architect: "Essai-projet", details: "", cover: "yes", folder: 3 },
    { name: "mus1.jpg", label: "Musique pour quatre règnes", architect: "Essai-projet", details: "", cover: "no", folder: 3 },
    { name: "mus2.jpg", label: "Musique pour quatre règnes", architect: "Essai-projet", details: "", cover: "no", folder: 3 },
    { name: "mus3.jpg", label: "Musique pour quatre règnes", architect: "Essai-projet", details: "", cover: "no", folder: 3 },
    { name: "mus4.jpg", label: "Musique pour quatre règnes", architect: "Essai-projet", details: "", cover: "no", folder: 3 },
    // CABO
    { name: "cabo1.jpg", label: "Cabo", architect: "", details: "", cover: "yes", folder: 1 },
    { name: "cabo2.jpg", label: "Cabo", architect: "", details: "Image réalisée pour pratiquer le photoréalisme", cover: "no", folder: 1 },
    // REPLI
    { name: "repli.jpg", label: "Le repli", architect: "", details: "", cover: "yes", folder: 4 },
    { name: "repli2.jpg", label: "", architect: "", details: "Projet de conception d'un chalet de moins de 100m² au Parc national de la Jacques-Cartier", cover: "no", folder: 4 },
    
  ];



  function initializeBioContent() {
    console.log("Bio content initialized.");
    // Add your bio-specific JavaScript here
}

function initialize3dContent() {
    const contentDiv = document.getElementById('photo-content');
    if (!contentDiv) {
        console.error('No element with ID "photo-content" found. Make sure the element exists in your HTML.');
        return;
    }
    // Create a container for the cover images
    const coverContainer = document.createElement('div');
    coverContainer.className = 'cover-container';
    contentDiv.appendChild(coverContainer);

    // Create slideWrappers for cover images
    renders.filter(render => render.cover === "yes").forEach(render => {
        createSlideWrapper(render, coverContainer, renders);
    });
}

function initializePhotoContent() {
    const contentDiv = document.getElementById('photo-content');
    if (!contentDiv) {
        console.error('No element with ID "photo-content" found. Make sure the element exists in your HTML.');
        return;
    }

    // Create a container for the cover images
    const coverContainer = document.createElement('div');
    coverContainer.className = 'cover-container';
    contentDiv.appendChild(coverContainer);

    // Create slideWrappers for cover images
    images.filter(image => image.cover === "yes").forEach(image => {
        createSlideWrapper(image, coverContainer, images);
    });
}

let currentFolderImages = [];
let currentIndex = 0;

function createSlideWrapper(item, container, sourceArray) {
    const slideWrapper = document.createElement('div');
    slideWrapper.className = 'slide-wrapper';

    const img = document.createElement('img');
    img.src = `img/${item.name}`;
    img.alt = item.name;

    const labelDiv = document.createElement('span');
    labelDiv.className = 'labels';
    labelDiv.innerHTML = `
        <h2>${item.label}</h2>
        <p>${item.architect}</p>
        <p>${item.details}</p>
    `;

    slideWrapper.appendChild(img);
    slideWrapper.appendChild(labelDiv);
    container.appendChild(slideWrapper);

    img.addEventListener('load', () => {
        slideWrapper.style.width = `${img.clientWidth}px`;
    });

    img.addEventListener('resize', () => {
        slideWrapper.style.width = `${img.clientWidth}px`;
    });

    slideWrapper.addEventListener('click', () => {
        showGallery(item.folder, sourceArray);
    });
}

function showGallery(folder, sourceArray) {
    currentFolderImages = sourceArray.filter(item => item.folder === folder && item.cover === "no");
    if (currentFolderImages.length === 0) {
        return;
    }
    currentIndex = 0;
    updateCarousel();

    const galleryContent = document.getElementById('gallery-content');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (currentFolderImages.length === 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }

    galleryContent.style.display = 'flex';
    document.getElementById('photo-content').classList.add('blurred');

    setTimeout(() => {
        galleryContent.classList.add('show');
    }, 10); // Slight delay to ensure the transition occurs
}

function updateCarousel() {
    const image = currentFolderImages[currentIndex];
    const carouselImage = document.getElementById('carousel-image');
    const carouselLabels = document.getElementById('carousel-labels');

    carouselImage.style.opacity = 0; // Hide the image initially
    setTimeout(() => {
        carouselImage.src = `img/${image.name}`;
        carouselLabels.innerHTML = `
            <h2>${image.label}</h2>
            <p>${image.details}</p>
        `;
        carouselImage.style.opacity = 1; // Show the new image with transition
    }, 500); // Delay to match the transition duration
}

function closeGallery() {
    const galleryContent = document.getElementById('gallery-content');
    galleryContent.classList.remove('show');
    setTimeout(() => {
        galleryContent.style.display = 'none';
        document.getElementById('photo-content').classList.remove('blurred');
    }, 500); // Delay to match the transition duration
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentFolderImages.length) % currentFolderImages.length;
    updateCarousel();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentFolderImages.length;
    updateCarousel();
}

// Add event listeners for keyboard navigation and closing the gallery
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGallery();
    } else if (event.key === 'ArrowLeft') {
        if (currentFolderImages.length > 1) {
            prevImage();
        }
    } else if (event.key === 'ArrowRight') {
        if (currentFolderImages.length > 1) {
            nextImage();
        }
    }
});

// Ensure gallery is closed initially
document.getElementById('gallery-content').style.display = 'none';