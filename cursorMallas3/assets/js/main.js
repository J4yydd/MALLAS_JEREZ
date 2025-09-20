// MALLAS JEREZ - JavaScript Modular y Accesible

// Dataset de productos actualizado
const PRODUCTS = [
  {
    id: 'ciclonica',
    nombre: 'Malla Ciclónica',
    descripcion: 'Malla de alta resistencia para delimitación perimetral y seguridad.',
    imagenes: [
      'assets/img/products/ciclonica-1.jpg',
      'assets/img/products/ciclonica-2.jpg',
      'assets/img/products/ciclonica-3.jpg'
    ],
    especificaciones: [
      ['Altura', '1.5 m, 2.0 m, 2.5 m'],
      ['Calibre', '11, 11.5, 12.5'],
      ['Revestimiento', 'Galvanizado / PVC'],
      ['Apertura', '2", 2.5", 3"']
    ]
  },
  {
    id: 'concertina',
    nombre: 'Concertina',
    descripcion: 'Alambre de seguridad de alto nivel para protección perimetral.',
    imagenes: [
      'assets/img/products/concertina-1.jpg',
      'assets/img/products/concertina-2.jpg',
      'assets/img/products/concertina-3.jpg'
    ],
    especificaciones: [
      ['Diámetro rollo', '450 / 730 / 980 mm'],
      ['Material', 'Acero galvanizado'],
      ['Cuchillas', 'BTO-22 / CBT-65']
    ]
  },
  {
    id: 'alambres',
    nombre: 'Alambres de Púas',
    descripcion: 'Alambre de púas de alta calidad para cercos de seguridad y delimitación de terrenos.',
    imagenes: [
      'assets/img/products/alambres-1.jpg',
      'assets/img/products/alambres-2.jpg',
      'assets/img/products/alambres-3.jpg'
    ],
    especificaciones: [
      ['Calibre', '12, 14, 16'],
      ['Material', 'Acero galvanizado'],
      ['Púas', '2, 4, 6 puntas'],
      ['Uso', 'Cercos, delimitación, seguridad']
    ]
  },
  {
    id: 'electricos',
    nombre: 'Cercos Eléctricos',
    descripcion: 'Sistemas de cercos eléctricos para protección perimetral y control de ganado.',
    imagenes: [
      'assets/img/products/electricos-1.jpg',
      'assets/img/products/electricos-2.jpg'
    ],
    especificaciones: [
      ['Voltaje', '6V, 12V, 24V'],
      ['Material', 'Alambre galvanizado'],
      ['Aplicación', 'Ganado, seguridad, delimitación'],
      ['Instalación', 'Profesional recomendada']
    ]
  },
  {
    id: 'privacidad',
    nombre: 'Cinta de Privacidad',
    descripcion: 'Cinta de privacidad para mallas ciclónicas, proporcionando intimidad y estética.',
    imagenes: [
      'assets/img/products/privacidad-1.jpg',
      'assets/img/products/privacidad-2.jpg',
      'assets/img/products/privacidad-3.jpg'
    ],
    especificaciones: [
      ['Ancho', '15 cm, 20 cm, 25 cm'],
      ['Material', 'PVC resistente'],
      ['Colores', 'Verde, marrón, negro'],
      ['Durabilidad', '5-8 años']
    ]
  },
  {
    id: 'borregueras',
    nombre: 'Mallas Borregueras',
    descripcion: 'Mallas especializadas para corrales de ganado y delimitación de áreas pecuarias.',
    imagenes: [
      'assets/img/products/borregueras-1.jpg',
      'assets/img/products/borregueras-2.jpg'
    ],
    especificaciones: [
      ['Altura', '1.0 m, 1.2 m, 1.5 m'],
      ['Calibre', '12, 14'],
      ['Apertura', '5 cm x 10 cm'],
      ['Uso', 'Corrales, ganado, ovejas']
    ]
  },
  {
    id: 'puertas',
    nombre: 'Puertas y Portones',
    descripcion: 'Puertas y portones de acero galvanizado para acceso vehicular y peatonal.',
    imagenes: [
      'assets/img/products/puertas-1.jpg',
      'assets/img/products/puertas-2.jpg',
      'assets/img/products/puertas-3.jpg'
    ],
    especificaciones: [
      ['Ancho', '2.5 m, 3.0 m, 4.0 m'],
      ['Altura', '1.8 m, 2.0 m, 2.5 m'],
      ['Material', 'Acero galvanizado'],
      ['Tipo', 'Deslizante, batiente, automática']
    ]
  },
  {
    id: 'rejas',
    nombre: 'Rejas de Acero',
    descripcion: 'Rejas de acero para ventanas, puertas y protección de propiedades residenciales.',
    imagenes: [
      'assets/img/products/rejas-1.jpg',
      'assets/img/products/rejas-2.jpg'
    ],
    especificaciones: [
      ['Material', 'Acero galvanizado'],
      ['Espesor', '3/16", 1/4"'],
      ['Diseño', 'Barrotes, ornamental, simple'],
      ['Acabado', 'Galvanizado, pintado']
    ]
  },
  {
    id: 'tuberias',
    nombre: 'Tuberías y Accesorios',
    descripcion: 'Tuberías galvanizadas y accesorios para instalaciones de cercos y estructuras metálicas.',
    imagenes: [
      'assets/img/products/tuberias-1.jpg',
      'assets/img/products/tuberias-2.jpg',
      'assets/img/products/tuberias-3.jpg'
    ],
    especificaciones: [
      ['Diámetro', '1", 1.5", 2", 2.5"'],
      ['Material', 'Acero galvanizado'],
      ['Longitud', '6 m, 12 m'],
      ['Accesorios', 'Codos, uniones, tapones']
    ]
  }
];

// Dataset de productos (compatible con la UI existente)
const PRODUCTS_DATASET = {
    'malla-ciclonica': {
        id: 'malla-ciclonica',
        nombre: 'Malla Ciclónica',
        descripcion: 'Malla de alta resistencia para delimitación perimetral y seguridad.',
        imagenes: [
            { src: 'assets/img/products/ciclonica-1.jpg', alt: 'Malla ciclónica instalada en cercado perimetral' },
            { src: 'assets/img/products/ciclonica-2.jpg', alt: 'Detalle de malla ciclónica galvanizada' },
            { src: 'assets/img/products/ciclonica-3.jpg', alt: 'Instalación de malla ciclónica en obra' }
        ],
        especificaciones: [
            { especificacion: 'Altura', valor: '1.5 m, 2.0 m, 2.5 m', unidad: '' },
            { especificacion: 'Calibre', valor: '11, 11.5, 12.5', unidad: 'AWG' },
            { especificacion: 'Revestimiento', valor: 'Galvanizado / PVC', unidad: '' },
            { especificacion: 'Apertura', valor: '2", 2.5", 3"', unidad: '' }
        ]
    },
    'concertina': {
        id: 'concertina',
        nombre: 'Concertina',
        descripcion: 'Alambre de seguridad de alto nivel para protección perimetral.',
        imagenes: [
            { src: 'assets/img/products/concertina-1.jpg', alt: 'Concertina instalada en perímetro de seguridad' },
            { src: 'assets/img/products/concertina-2.jpg', alt: 'Detalle de alambre de concertina' },
            { src: 'assets/img/products/concertina-3.jpg', alt: 'Instalación de concertina en muro' }
        ],
        especificaciones: [
            { especificacion: 'Diámetro rollo', valor: '450 / 730 / 980', unidad: 'mm' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Cuchillas', valor: 'BTO-22 / CBT-65', unidad: '' }
        ]
    },
    'alambres': {
        id: 'alambres',
        nombre: 'Alambres de Púas',
        descripcion: 'Alambre de púas de alta calidad para cercos de seguridad y delimitación de terrenos.',
        imagenes: [
            { src: 'assets/img/products/alambres-1.jpg', alt: 'Alambre de púas instalado en cerco' },
            { src: 'assets/img/products/alambres-2.jpg', alt: 'Detalle de alambre de púas galvanizado' },
            { src: 'assets/img/products/alambres-3.jpg', alt: 'Instalación de alambre de púas en terreno' }
        ],
        especificaciones: [
            { especificacion: 'Calibre', valor: '12, 14, 16', unidad: 'AWG' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Púas', valor: '2, 4, 6 puntas', unidad: '' },
            { especificacion: 'Uso', valor: 'Cercos, delimitación, seguridad', unidad: '' }
        ]
    },
    'electricos': {
        id: 'electricos',
        nombre: 'Cercos Eléctricos',
        descripcion: 'Sistemas de cercos eléctricos para protección perimetral y control de ganado.',
        imagenes: [
            { src: 'assets/img/products/electricos-1.jpg', alt: 'Cerca eléctrica instalada en perímetro' },
            { src: 'assets/img/products/electricos-2.jpg', alt: 'Detalle de alambre eléctrico y aisladores' }
        ],
        especificaciones: [
            { especificacion: 'Voltaje', valor: '6V, 12V, 24V', unidad: '' },
            { especificacion: 'Material', valor: 'Alambre galvanizado', unidad: '' },
            { especificacion: 'Aplicación', valor: 'Ganado, seguridad, delimitación', unidad: '' },
            { especificacion: 'Instalación', valor: 'Profesional recomendada', unidad: '' }
        ]
    },
    'privacidad': {
        id: 'privacidad',
        nombre: 'Cinta de Privacidad',
        descripcion: 'Cinta de privacidad para mallas ciclónicas, proporcionando intimidad y estética.',
        imagenes: [
            { src: 'assets/img/products/privacidad-1.jpg', alt: 'Cinta de privacidad en malla ciclónica' },
            { src: 'assets/img/products/privacidad-2.jpg', alt: 'Detalle de cinta de privacidad verde' },
            { src: 'assets/img/products/privacidad-3.jpg', alt: 'Instalación de cinta de privacidad' }
        ],
        especificaciones: [
            { especificacion: 'Ancho', valor: '15 cm, 20 cm, 25 cm', unidad: '' },
            { especificacion: 'Material', valor: 'PVC resistente', unidad: '' },
            { especificacion: 'Colores', valor: 'Verde, marrón, negro', unidad: '' },
            { especificacion: 'Durabilidad', valor: '5-8 años', unidad: '' }
        ]
    },
    'borregueras': {
        id: 'borregueras',
        nombre: 'Mallas Borregueras',
        descripcion: 'Mallas especializadas para corrales de ganado y delimitación de áreas pecuarias.',
        imagenes: [
            { src: 'assets/img/products/borregueras-1.jpg', alt: 'Malla borreguera en corral de ganado' },
            { src: 'assets/img/products/borregueras-2.jpg', alt: 'Detalle de malla borreguera galvanizada' }
        ],
        especificaciones: [
            { especificacion: 'Altura', valor: '1.0 m, 1.2 m, 1.5 m', unidad: '' },
            { especificacion: 'Calibre', valor: '12, 14', unidad: 'AWG' },
            { especificacion: 'Apertura', valor: '5 cm x 10 cm', unidad: '' },
            { especificacion: 'Uso', valor: 'Corrales, ganado, ovejas', unidad: '' }
        ]
    },
    'puertas': {
        id: 'puertas',
        nombre: 'Puertas y Portones',
        descripcion: 'Puertas y portones de acero galvanizado para acceso vehicular y peatonal.',
        imagenes: [
            { src: 'assets/img/products/puertas-1.jpg', alt: 'Portón deslizante de acero galvanizado' },
            { src: 'assets/img/products/puertas-2.jpg', alt: 'Puerta batiente para acceso peatonal' },
            { src: 'assets/img/products/puertas-3.jpg', alt: 'Portón automático con motor' }
        ],
        especificaciones: [
            { especificacion: 'Ancho', valor: '2.5 m, 3.0 m, 4.0 m', unidad: '' },
            { especificacion: 'Altura', valor: '1.8 m, 2.0 m, 2.5 m', unidad: '' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Tipo', valor: 'Deslizante, batiente, automática', unidad: '' }
        ]
    },
    'rejas': {
        id: 'rejas',
        nombre: 'Rejas de Acero',
        descripcion: 'Rejas de acero para ventanas, puertas y protección de propiedades residenciales.',
        imagenes: [
            { src: 'assets/img/products/rejas-1.jpg', alt: 'Rejas de acero en ventanas residenciales' },
            { src: 'assets/img/products/rejas-2.jpg', alt: 'Detalle de rejas ornamentales de acero' }
        ],
        especificaciones: [
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Espesor', valor: '3/16", 1/4"', unidad: '' },
            { especificacion: 'Diseño', valor: 'Barrotes, ornamental, simple', unidad: '' },
            { especificacion: 'Acabado', valor: 'Galvanizado, pintado', unidad: '' }
        ]
    },
    'tuberias': {
        id: 'tuberias',
        nombre: 'Tuberías y Accesorios',
        descripcion: 'Tuberías galvanizadas y accesorios para instalaciones de cercos y estructuras metálicas.',
        imagenes: [
            { src: 'assets/img/products/tuberias-1.jpg', alt: 'Tuberías galvanizadas de diferentes diámetros' },
            { src: 'assets/img/products/tuberias-2.jpg', alt: 'Accesorios para tuberías: codos y uniones' },
            { src: 'assets/img/products/tuberias-3.jpg', alt: 'Instalación de tuberías en estructura metálica' }
        ],
        especificaciones: [
            { especificacion: 'Diámetro', valor: '1", 1.5", 2", 2.5"', unidad: '' },
            { especificacion: 'Material', valor: 'Acero galvanizado', unidad: '' },
            { especificacion: 'Longitud', valor: '6 m, 12 m', unidad: '' },
            { especificacion: 'Accesorios', valor: 'Codos, uniones, tapones', unidad: '' }
        ]
    }
};

// Scroll Manager
const ScrollManager = {
    sections: [],
    navLinks: [],
    isScrolling: false,
    
    init() {
        this.sections = Array.from(document.querySelectorAll('section[id]'));
        this.navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
        this.setupSmoothScroll();
        this.setupActiveSection();
        this.setupScrollThrottle();
    },
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToSection(targetId);
            });
        });
    },
    
    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const headerHeight = document.querySelector('.header-fixed').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    
    setupActiveSection() {
        const observer = new IntersectionObserver((entries) => {
            if (this.isScrolling) return;
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0.1
        });
        
        this.sections.forEach(section => {
            observer.observe(section);
        });
    },
    
    updateActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            const linkId = link.getAttribute('href');
            if (linkId === '#' + activeId) {
                link.setAttribute('aria-current', 'page');
                link.classList.add('active');
            } else {
                link.removeAttribute('aria-current');
                link.classList.remove('active');
            }
        });
    },
    
    setupScrollThrottle() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.isScrolling = false;
                    ticking = false;
                });
                ticking = true;
                this.isScrolling = true;
            }
        });
    }
};

// Tabs Manager
const TabsManager = {
    tabs: [],
    panels: [],
    currentActive: null,
    
    init() {
        this.tabs = Array.from(document.querySelectorAll('.product-tab'));
        this.panels = Array.from(document.querySelectorAll('.product-panel'));
        this.setupTabs();
        this.setupKeyboardNavigation();
        
        // Renderizar contenido inicial del primer tab
        if (this.tabs.length > 0) {
            const firstTab = this.tabs[0];
            const firstPanelId = firstTab.getAttribute('aria-controls');
            this.activateTab(firstTab, firstPanelId);
        }
    },
    
    setupTabs() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetPanel = tab.getAttribute('aria-controls');
                this.activateTab(tab, targetPanel);
            });
        });
    },
    
    activateTab(activeTab, targetPanelId) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
        });
        
        this.panels.forEach(panel => {
            panel.classList.remove('active');
        });
        
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
        
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
            this.renderProductContent(targetPanelId);
            targetPanel.classList.add('active');
            this.currentActive = targetPanelId;
        }
    },
    
    renderProductContent(productId) {
        const product = PRODUCTS_DATASET[productId];
        if (!product) return;
        
        const panel = document.getElementById(productId);
        if (!panel) return;
        
        this.renderDescription(panel, product);
        this.renderCarousel(panel, product);
        this.renderSpecifications(panel, product);
    },
    
    renderDescription(panel, product) {
        const header = panel.querySelector('.product-header');
        if (header) {
            header.innerHTML = '<h3>' + product.nombre + '</h3><p>' + product.descripcion + '</p>';
        }
    },
    
    renderCarousel(panel, product) {
        const carouselContainer = panel.querySelector('.carousel-container');
        if (!carouselContainer) return;
        
        let carouselHTML = '<div class="carousel-wrapper" role="region" aria-label="Galería de ' + product.nombre + '">';
        carouselHTML += '<div class="carousel-track" aria-live="polite">';
        
        product.imagenes.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselHTML += '<div class="carousel-slide ' + activeClass + '">';
            carouselHTML += '<img src="' + img.src + '" alt="' + img.alt + '" loading="lazy">';
            carouselHTML += '</div>';
        });
        
        carouselHTML += '</div>';
        carouselHTML += '<button class="carousel-btn prev" aria-label="Imagen anterior" data-product="' + product.id + '">';
        carouselHTML += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
        carouselHTML += '<polyline points="15,18 9,12 15,6"></polyline></svg></button>';
        carouselHTML += '<button class="carousel-btn next" aria-label="Siguiente imagen" data-product="' + product.id + '">';
        carouselHTML += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
        carouselHTML += '<polyline points="9,18 15,12 9,6"></polyline></svg></button></div>';
        
        carouselHTML += '<div class="carousel-indicators">';
        product.imagenes.forEach((_, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselHTML += '<button class="indicator ' + activeClass + '" aria-label="Mostrar imagen ' + (index + 1) + '" data-product="' + product.id + '" data-slide="' + index + '"></button>';
        });
        carouselHTML += '</div>';
        
        carouselContainer.innerHTML = carouselHTML;
        CarouselManager.initProductCarousel(product.id);
    },
    
    renderSpecifications(panel, product) {
        const specifications = panel.querySelector('.specifications');
        if (!specifications) return;
        
        let tableHTML = '<table class="specs-table" role="table">';
        tableHTML += '<caption>Especificaciones Técnicas - ' + product.nombre + '</caption>';
        tableHTML += '<thead><tr><th scope="col">Especificación</th><th scope="col">Valor</th><th scope="col">Unidad</th></tr></thead>';
        tableHTML += '<tbody>';
        
        product.especificaciones.forEach(spec => {
            tableHTML += '<tr><th scope="row">' + spec.especificacion + '</th>';
            tableHTML += '<td>' + spec.valor + '</td><td>' + spec.unidad + '</td></tr>';
        });
        
        tableHTML += '</tbody></table>';
        specifications.innerHTML = tableHTML;
    },
    
    setupKeyboardNavigation() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('keydown', (e) => {
                let targetIndex;
                
                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        targetIndex = (index + 1) % this.tabs.length;
                        this.tabs[targetIndex].focus();
                        this.tabs[targetIndex].click();
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        targetIndex = index === 0 ? this.tabs.length - 1 : index - 1;
                        this.tabs[targetIndex].focus();
                        this.tabs[targetIndex].click();
                        break;
                    case 'Home':
                        e.preventDefault();
                        this.tabs[0].focus();
                        this.tabs[0].click();
                        break;
                    case 'End':
                        e.preventDefault();
                        this.tabs[this.tabs.length - 1].focus();
                        this.tabs[this.tabs.length - 1].click();
                        break;
                }
            });
        });
    }
};

// Carousel Manager
const CarouselManager = {
    carousels: new Map(),
    
    init() {
        // Los carousels se inicializan dinámicamente
    },
    
    initProductCarousel(productId) {
        const carouselContainer = document.querySelector('#' + productId + ' .carousel-container');
        if (!carouselContainer) return;
        
        const carousel = {
            id: productId,
            track: carouselContainer.querySelector('.carousel-track'),
            slides: carouselContainer.querySelectorAll('.carousel-slide'),
            indicators: carouselContainer.querySelectorAll('.indicator'),
            prevBtn: carouselContainer.querySelector('.carousel-btn.prev'),
            nextBtn: carouselContainer.querySelector('.carousel-btn.next'),
            currentSlide: 0,
            totalSlides: 0,
            autoPlayInterval: null
        };
        
        carousel.totalSlides = carousel.slides.length;
        this.carousels.set(productId, carousel);
        
        this.setupCarouselEvents(carousel);
        this.setupTouchEvents(carousel);
        this.startAutoPlay(carousel);
    },
    
    setupCarouselEvents(carousel) {
        if (carousel.prevBtn) {
            carousel.prevBtn.addEventListener('click', () => {
                this.changeSlide(carousel, -1);
            });
        }
        
        if (carousel.nextBtn) {
            carousel.nextBtn.addEventListener('click', () => {
                this.changeSlide(carousel, 1);
            });
        }
        
        carousel.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(carousel, index);
            });
        });
        
        carousel.track.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.changeSlide(carousel, -1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.changeSlide(carousel, 1);
                    break;
            }
        });
        
        carousel.track.addEventListener('mouseenter', () => {
            this.stopAutoPlay(carousel);
        });
        
        carousel.track.addEventListener('mouseleave', () => {
            this.startAutoPlay(carousel);
        });
    },
    
    setupTouchEvents(carousel) {
        let startX = 0;
        let endX = 0;
        
        carousel.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.changeSlide(carousel, 1);
                } else {
                    this.changeSlide(carousel, -1);
                }
            }
        });
    },
    
    changeSlide(carousel, direction) {
        carousel.currentSlide = (carousel.currentSlide + direction + carousel.totalSlides) % carousel.totalSlides;
        this.updateCarousel(carousel);
    },
    
    goToSlide(carousel, slideIndex) {
        carousel.currentSlide = slideIndex;
        this.updateCarousel(carousel);
    },
    
    updateCarousel(carousel) {
        carousel.track.style.transform = 'translateX(-' + (carousel.currentSlide * 100) + '%)';
        
        carousel.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === carousel.currentSlide);
        });
        
        carousel.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === carousel.currentSlide);
        });
        
        const activeSlide = carousel.slides[carousel.currentSlide];
        const img = activeSlide.querySelector('img');
        if (img) {
            carousel.track.setAttribute('aria-label', 'Mostrando imagen ' + (carousel.currentSlide + 1) + ' de ' + carousel.totalSlides + ': ' + img.alt);
        }
    },
    
    startAutoPlay(carousel) {
        this.stopAutoPlay(carousel);
        carousel.autoPlayInterval = setInterval(() => {
            this.changeSlide(carousel, 1);
        }, 5000);
    },
    
    stopAutoPlay(carousel) {
        if (carousel.autoPlayInterval) {
            clearInterval(carousel.autoPlayInterval);
            carousel.autoPlayInterval = null;
        }
    }
};

// Map Manager
const MapManager = {
    init() {
        this.setupMap();
    },
    
    setupMap() {
        const mapContainer = document.querySelector('.map-wrapper');
        if (!mapContainer) return;
        
        const lat = 22.6438731;
        const lng = -102.9767069;
        
        const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.123456789!2d' + lng + '!3d' + lat + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzM3LjkiTiAxMDLCsDU4JzM2LjEiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx&q=MALLAS+JEREZ';
        
        const iframe = document.createElement('iframe');
        iframe.src = mapUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = '0';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.title = 'Ubicación de Mallas Jerez en Google Maps';
        iframe.setAttribute('aria-label', 'Mapa interactivo mostrando la ubicación de Mallas Jerez');
        
        mapContainer.appendChild(iframe);
    }
};

// Contact Manager
const ContactManager = {
    init() {
        this.setupContactLinks();
    },
    
    setupContactLinks() {
        const whatsappLink = document.querySelector('.contact-btn.whatsapp');
        const emailLink = document.querySelector('.contact-btn.email');
        
        if (whatsappLink) {
            whatsappLink.setAttribute('target', '_blank');
            whatsappLink.setAttribute('rel', 'noopener noreferrer');
        }
        
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                const href = emailLink.getAttribute('href');
                if (!href.startsWith('mailto:')) {
                    e.preventDefault();
                    console.warn('Enlace de email inválido');
                }
            });
        }
    }
};

// Mobile Menu Manager
const MobileMenuManager = {
    init() {
        this.setupMobileMenu();
    },
    
    setupMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!menuToggle || !navMenu) return;
        
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            const label = isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación';
            menuToggle.setAttribute('aria-label', label);
            
            this.animateHamburger(menuToggle, !isExpanded);
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                this.animateHamburger(menuToggle, false);
            });
        });
    },
    
    animateHamburger(menuToggle, isOpen) {
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isOpen) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = '';
                span.style.opacity = '';
            }
        });
    }
};

// Lazy Loading Manager
const LazyLoadingManager = {
    init() {
        this.setupLazyLoading();
    },
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
};

// Accessibility Manager
const AccessibilityManager = {
    init() {
        this.setupSkipLink();
        this.setupReducedMotion();
        this.setupFocusManagement();
    },
    
    setupSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Saltar al contenido principal';
        skipLink.className = 'skip-link';
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    },
    
    setupReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const style = document.createElement('style');
            style.textContent = '*, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }';
            document.head.appendChild(style);
        }
    },
    
    setupFocusManagement() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
};

// Utils
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Inicialización principal
document.addEventListener('DOMContentLoaded', function() {
    ScrollManager.init();
    TabsManager.init();
    CarouselManager.init();
    MapManager.init();
    ContactManager.init();
    MobileMenuManager.init();
    LazyLoadingManager.init();
    AccessibilityManager.init();
    
    window.addEventListener('resize', Utils.debounce(() => {
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (navMenu && menuToggle) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            }
        }
    }, 250));
    
    window.scrollToSection = (sectionId) => {
        ScrollManager.scrollToSection('#' + sectionId);
    };
});

// Exportar funciones para testing
window.MallasJerez = {
    ScrollManager,
    TabsManager,
    CarouselManager,
    MapManager,
    ContactManager,
    MobileMenuManager,
    LazyLoadingManager,
    AccessibilityManager,
    Utils,
    PRODUCTS,
    PRODUCTS_DATASET,
    scrollToSection: (sectionId) => ScrollManager.scrollToSection('#' + sectionId)
};
