document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
  
    // Toggle navigation menu
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  
    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
  
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      body.classList.add('dark-mode');
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px 200px 0px"
    };
  
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, lazyLoadOptions);
  
    lazyImages.forEach(img => lazyLoadObserver.observe(img));
  
    // Add spot cards
    const spotGrid = document.querySelector('.spot-grid');
    const spotCards = [
      {
        href: "darjeeling2.html",
        imgSrc: "/img/dargeling.jpg",
        imgAlt: "Darjeeling",
        title: "Darjeeling",
        description: "Famous hill station known for its tea plantations and scenic beauty.",
        location: "Location: Northern West Bengal"
      },
      {
        href: "sundarbans2.html",
        imgSrc: "/img/sundarban.jpg",
        imgAlt: "Sundarbans",
        title: "Sundarbans",
        description: "World's largest mangrove forest and home to the Royal Bengal Tiger.",
        location: "Location: Southern West Bengal"
      },
      {
        href: "victoria.html",
        imgSrc: "/img/victoria.jpg",
        imgAlt: "Victoria Memorial",
        title: "Victoria Memorial",
        description: "Iconic marble building in Kolkata dedicated to Queen Victoria.",
        location: "Location: Kolkata"
      },
      {
        href: "howrah.html",
        imgSrc: "/img/Howrah Bridge night.jpg",
        imgAlt: "Howrah Bridge",
        title: "Howrah Bridge",
        description: "Iconic cantilever bridge over the Hooghly River in Kolkata.",
        location: "Location: Kolkata"
      },
      {
        href: "digha2.html",
        imgSrc: "/img/digha.jpg",
        imgAlt: "Digha Beach",
        title: "Digha Beach",
        description: "Popular seaside resort town with beautiful beaches.",
        location: "Location: East Midnapore District"
      },
      {
        href: "shantiniketan.html",
        imgSrc: "/img/Shantiniketan.jpg",
        imgAlt: "Santiniketan",
        title: "Santiniketan",
        description: "University town founded by Rabindranath Tagore, known for its cultural heritage.",
        location: "Location: Birbhum District"
      },
      {
        href: "murshidabad.html",
        imgSrc: "/img/murshidabad.jpg",
        imgAlt: "Murshidabad",
        title: "Murshidabad",
        description: "Historical city famous for its Hazarduari Palace and Nawabi heritage.",
        location: "Location: Murshidabad District"
      },
      {
        href: "Mandarmani.html",
        imgSrc: "/img/mandarmani.jpg",
        imgAlt: "Mandarmani",
        title: "Mandarmani",
        description: "Seaside resort village known for its long driveable beach.",
        location: "Location: East Midnapore District"
      },
      {
        href: "bishnupur.html",
        imgSrc: "/img/bishnupur.jpg",
        imgAlt: "Bishnupur",
        title: "Bishnupur",
        description: "Ancient town famous for its terracotta temples and Baluchari sarees.",
        location: "Location: Bankura District"
      },
      {
        href: "kalimpong.html",
        imgSrc: "/img/kalimpong.jpg",
        imgAlt: "Kalimpong",
        title: "Kalimpong",
        description: "Hill station known for its panoramic views and Buddhist monasteries.",
        location: "Location: Kalimpong District"
      },
      {
        href: "bhakkali.html",
        imgSrc: "/img/bhakkali.jpg",
        imgAlt: "Bakkhali",
        title: "Bakkhali",
        description: "Serene beach town with a unique crescent-shaped beach.",
        location: "Location: South 24 Parganas District"
      },
      {
        href: "kurseong.html",
        imgSrc: "/img/kurseong.jpg",
        imgAlt: "Kurseong",
        title: "Kurseong",
        description: "Hill station known as the \"Land of White Orchids\" with tea gardens.",
        location: "Location: Darjeeling District"
      },
      {
        href: "mirik.html",
        imgSrc: "/img/mirik.jpg",
        imgAlt: "Mirik",
        title: "Mirik",
        description: "Picturesque hill station with a beautiful lake and tea gardens.",
        location: "Location: Darjeeling District"
      },
      {
        href: "dooars.html",
        imgSrc: "/img/dooars.jpg",
        imgAlt: "Dooars",
        title: "Dooars",
        description: "Region known for its wildlife sanctuaries and tea gardens.",
        location: "Location: Jalpaiguri and Alipurduar Districts"
      },
      {
        href: "gangasagar.html",
        imgSrc: "/img/gangasagar.jpg",
        imgAlt: "Gangasagar",
        title: "Gangasagar",
        description: "Sacred island where the Ganges meets the Bay of Bengal.",
        location: "Location: South 24 Parganas District"
      },
      {
        href: "ecopark.html",
        imgSrc: "/img/ecopark.jpg",
        imgAlt: "New Town Eco Park",
        title: "New Town Eco Park",
        description: "Large urban park in Kolkata with various attractions and activities.",
        location: "Location: New Town, Kolkata"
      }
    ];
  
    spotCards.forEach(card => {
      const spotCard = document.createElement('div');
      spotCard.className = 'spot-card';
      spotCard.innerHTML = `
        <a href="${card.href}">
          <img src="${card.imgSrc}" alt="${card.imgAlt}" />
        </a>
        <div class="spot-card-content">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <div class="location">${card.location}</div>
        </div>
      `;
      spotGrid.appendChild(spotCard);
    });
  });