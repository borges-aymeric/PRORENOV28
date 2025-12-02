// Supprimer les warnings de Tracking Prevention (non bloquants)
if (window.console && console.warn) {
    const originalWarn = console.warn;
    console.warn = function(...args) {
        if (args[0] && typeof args[0] === 'string' && args[0].includes('Tracking Prevention')) {
            return; // Ignorer silencieusement les warnings de Tracking Prevention
        }
        originalWarn.apply(console, args);
    };
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si GSAP est chargé
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Enregistrer ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // =========================================
        // HERO SECTION ANIMATIONS PROFESSIONNELLES
        // =========================================
        const heroSection = document.getElementById('accueil');
        if (heroSection) {
            // Parallax pour l'image de fond
            const heroBg = document.getElementById('hero-bg');
            if (heroBg) {
                gsap.to(heroBg, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroSection,
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
            
            // Animation d'entrée séquentielle des éléments
            const heroTimeline = gsap.timeline({ delay: 0.3 });
            
            // Lignes géométriques
            const heroLine1 = heroSection.querySelector('.hero-line-1');
            const heroLine2 = heroSection.querySelector('.hero-line-2');
            if (heroLine1) {
                gsap.set(heroLine1, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
                heroTimeline.to(heroLine1, {
                    scaleY: 1,
                    opacity: 0.6,
                    duration: 1.2,
                    ease: "power2.out"
                }, 0.4);
            }
            if (heroLine2) {
                gsap.set(heroLine2, { scaleX: 0, opacity: 0, transformOrigin: "left center" });
                heroTimeline.to(heroLine2, {
                    scaleX: 1,
                    opacity: 0.6,
                    duration: 1.2,
                    ease: "power2.out"
                }, 0.6);
            }
            
            // Titre ligne 1
            const heroTitleLine1 = heroSection.querySelector('.hero-title-line-1');
            if (heroTitleLine1) {
                gsap.set(heroTitleLine1, { y: 60, opacity: 0, scale: 0.9 });
                heroTimeline.to(heroTitleLine1, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.0,
                    ease: "power3.out"
                }, 0.5);
            }
            
            // Titre ligne 2
            const heroTitleLine2 = heroSection.querySelector('.hero-title-line-2');
            if (heroTitleLine2) {
                gsap.set(heroTitleLine2, { y: 60, opacity: 0, scale: 0.9 });
                heroTimeline.to(heroTitleLine2, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.0,
                    ease: "power3.out"
                }, 0.7);
            }
            
            // Subtitle
            const heroSubtitle = heroSection.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                gsap.set(heroSubtitle, { y: 30, opacity: 0 });
                heroTimeline.to(heroSubtitle, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, 1.0);
            }
            
            // Tagline
            const heroTagline = heroSection.querySelector('.hero-tagline');
            if (heroTagline) {
                gsap.set(heroTagline, { y: 20, opacity: 0 });
                heroTimeline.to(heroTagline, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }, 1.2);
            }
            
            // CTA Button
            const heroCta = heroSection.querySelector('.hero-cta');
            if (heroCta) {
                gsap.set(heroCta, { y: 30, opacity: 0, scale: 0.95 });
                heroTimeline.to(heroCta, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.4)"
                }, 1.4);
            }
        }
        
        // Animation de défilement infini pour le texte - Boucle fluide sans coupure
        const scrollingWrapper = document.getElementById('scrolling-text-wrapper');
        if (scrollingWrapper) {
            // Attendre que le DOM soit complètement rendu
            setTimeout(() => {
                const firstText = scrollingWrapper.querySelector('.scrolling-text');
                if (firstText) {
                    // Calculer la largeur totale d'un élément (texte + margin)
                    const computedStyle = window.getComputedStyle(firstText);
                    const marginRight = parseFloat(computedStyle.marginRight) || 0;
                    const textWidth = firstText.offsetWidth + marginRight;
                    
                    // Réinitialiser la position
                    gsap.set(scrollingWrapper, { x: 0 });
                    
                    // Animation du défilement infini - boucle fluide sans coupure
                    // Utiliser une timeline avec repeat: -1 pour une boucle infinie fluide
                    // GSAP gère automatiquement la transition entre les répétitions sans coupure
                    const tl = gsap.timeline({ 
                        repeat: -1, 
                        ease: "none",
                        immediateRender: false
                    });
                    
                    // Animer jusqu'à la position où le premier élément est complètement sorti
                    // Quand il se répète, le prochain élément est déjà en place pour une transition fluide
                    tl.to(scrollingWrapper, {
                        x: -textWidth,
                        duration: 10,
                        ease: "none"
                    });
                }
            }, 100);
        }
        
        // Animation rideau de bas en haut pour le bandeau de la navbar
        const navBackground = document.getElementById('nav-background');
        if (navBackground) {
            gsap.set(navBackground, { 
                clipPath: "inset(0 0 100% 0)" // Caché en bas
            });
            
            ScrollTrigger.create({
                trigger: "body",
                start: "50px top",
                end: "max",
                onEnter: () => {
                    gsap.to(navBackground, {
                        clipPath: "inset(0 0 0% 0)", // Révélé complètement
                        duration: 0.6,
                        ease: "power2.out"
                    });
                },
                onLeaveBack: () => {
                    gsap.to(navBackground, {
                        clipPath: "inset(0 0 100% 0)", // Caché en bas
                        duration: 0.4,
                        ease: "power2.in"
                    });
                }
            });
        }
        
        // Animation du bouton back to top avec GSAP
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            gsap.set(backToTopBtn, { 
                opacity: 0, 
                x: 100,
                scale: 0.8
            });
            
            ScrollTrigger.create({
                trigger: "body",
                start: "300px top",
                end: "max",
                onEnter: () => {
                    gsap.to(backToTopBtn, {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)"
                    });
                },
                onLeaveBack: () => {
                    gsap.to(backToTopBtn, {
                        opacity: 0,
                        x: 100,
                        scale: 0.8,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                }
            });
        }

        // Initialiser les éléments avec opacity 0 pour l'animation (sauf le Hero)
        gsap.utils.toArray(".fade-in-up").forEach((element) => {
            // Ne pas initialiser le Hero en opacity 0 car il a ses propres animations
            if (!element.closest('#accueil')) {
                gsap.set(element, { opacity: 0, y: 50 });
            }
        });

        // Animations d'entrée pour les éléments avec fade-in-up
        gsap.utils.toArray(".fade-in-up").forEach((element) => {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Animations fade-in
        gsap.utils.toArray(".fade-in").forEach((element) => {
            gsap.set(element, { opacity: 0 });
            gsap.to(element, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Effet rideau pour les images de projets - Dévoilement de bas en haut avec clip-path
        const projectImages = gsap.utils.toArray(".curtain-reveal");
        
        projectImages.forEach((img) => {
            // Commencer avec l'image masquée depuis le bas (clip-path: inset(100% 0 0 0))
            gsap.set(img, { 
                clipPath: "inset(100% 0 0 0)"
            });
            
            // Animer le clip-path pour révéler l'image de bas en haut
            // L'animation se joue automatiquement et complètement quand on descend
            // Elle peut se rejouer quand on remonte
            gsap.to(img, {
                clipPath: "inset(0% 0 0 0)",
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            // Effet parallaxe sur les images de projets
            gsap.to(img, {
                yPercent: 30, // L'image se déplace vers le bas lors du scroll
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true // Suit le scroll en temps réel
                }
            });
        });

        // Animation typographie cinétique pour "NOS RÉALISATIONS"
        const realisationsTitle = document.getElementById('realisations-title');
        if (realisationsTitle) {
            const kineticLetters = realisationsTitle.querySelectorAll('.kinetic-letter');
            
            if (kineticLetters.length > 0) {
                // Animation avec rebond élastique pour chaque lettre
                gsap.to(kineticLetters, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)", // Effet de rebond élastique avec overshoot
                    stagger: 0.04, // Délai entre chaque lettre pour effet séquentiel
                    scrollTrigger: {
                        trigger: realisationsTitle,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        }

        // Animation typographie cinétique pour "NOS PRESTATIONS"
        const servicesTitle = document.getElementById('services-title');
        if (servicesTitle) {
            const kineticLetters = servicesTitle.querySelectorAll('.kinetic-letter');
            
            if (kineticLetters.length > 0) {
                // Animation avec rebond élastique pour chaque lettre
                gsap.to(kineticLetters, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)", // Effet de rebond élastique avec overshoot
                    stagger: 0.04, // Délai entre chaque lettre pour effet séquentiel
                    scrollTrigger: {
                        trigger: servicesTitle,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        }

        // Animation typographie cinétique pour "CONTACTEZ-NOUS"
        const contactTitle = document.getElementById('contact-title');
        if (contactTitle) {
            const kineticLetters = contactTitle.querySelectorAll('.kinetic-letter');
            
            if (kineticLetters.length > 0) {
                // Animation avec rebond élastique pour chaque lettre
                gsap.to(kineticLetters, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)", // Effet de rebond élastique avec overshoot
                    stagger: 0.04, // Délai entre chaque lettre pour effet séquentiel
                    scrollTrigger: {
                        trigger: contactTitle,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        }

        // Accordéon vertical pour la section Services
        const servicePanels = gsap.utils.toArray(".service-panel");
        if (servicePanels.length > 0) {
            // Stocker les timelines actives pour pouvoir les tuer
            const activeTimelines = new Map();
            let currentActivePanel = null;
            
            // État initial : premier panneau actif sur desktop uniquement
            if (window.innerWidth >= 768) {
                gsap.set(servicePanels, { flex: 1 });
                gsap.set(servicePanels[0], { flex: 3 });
                const firstContent = servicePanels[0].querySelector('.panel-content');
                const firstLabel = servicePanels[0].querySelector('.panel-label span');
                const firstLabelContainer = servicePanels[0].querySelector('.panel-label');
                if (firstContent && firstLabel && firstLabelContainer) {
                    gsap.set(firstContent, { opacity: 1, y: 0 });
                    gsap.set(firstLabel, { opacity: 1, rotation: 0, scale: 1.2 });
                    gsap.set(firstLabelContainer, { y: "-200%" }); // En haut par défaut
                    // Initialiser les mots du premier panneau comme visibles
                    const firstWords = firstContent.querySelectorAll('h3 span, p span');
                    gsap.set(firstWords, { opacity: 1, y: 0 });
                    currentActivePanel = servicePanels[0];
                }
            } else {
                // Sur mobile, tous les panneaux sont visibles
                gsap.set(servicePanels, { flex: 1 });
                servicePanels.forEach((p) => {
                    const content = p.querySelector('.panel-content');
                    const labelSpan = p.querySelector('.panel-label span');
                    const labelContainer = p.querySelector('.panel-label');
                    const words = content ? content.querySelectorAll('h3 span, p span') : [];
                    if (content) {
                        gsap.set(content, { opacity: 1, y: 0 });
                    }
                    if (labelSpan) {
                        gsap.set(labelSpan, { opacity: 1, rotation: 0, scale: 1 });
                    }
                    if (labelContainer) {
                        gsap.set(labelContainer, { y: 0, x: 0 });
                    }
                    if (words.length > 0) {
                        gsap.set(words, { opacity: 1, y: 0 });
                    }
                });
            }

            const activatePanel = (panel) => {
                if (!panel || window.innerWidth < 768) return;
                
                // Si c'est le même panneau, ne rien faire
                if (panel === currentActivePanel) return;
                
                // Tuer toutes les animations en cours
                activeTimelines.forEach((tl) => {
                    if (tl && tl.isActive) {
                        tl.kill();
                    }
                });
                activeTimelines.clear();
                
                // Tuer toutes les animations GSAP en cours sur les panneaux
                servicePanels.forEach((p) => {
                    gsap.killTweensOf(p);
                    const content = p.querySelector('.panel-content');
                    const labelSpan = p.querySelector('.panel-label span');
                    const labelContainer = p.querySelector('.panel-label');
                    const words = content ? content.querySelectorAll('h3 span, p span') : [];
                    
                    if (content) gsap.killTweensOf(content);
                    if (labelSpan) gsap.killTweensOf(labelSpan);
                    if (labelContainer) gsap.killTweensOf(labelContainer);
                    if (words.length > 0) gsap.killTweensOf(words);
                });
                
                currentActivePanel = panel;

                const contents = servicePanels.map(p => p.querySelector('.panel-content'));
                const labelSpans = servicePanels.map(p => p.querySelector('.panel-label span'));
                const labelContainers = servicePanels.map(p => p.querySelector('.panel-label'));

                // Animation des flex
                const flexTl = gsap.timeline();
                flexTl.to(servicePanels, {
                    flex: 1,
                    duration: 0.6,
                    ease: "power2.out"
                })
                .to(panel, {
                    flex: 3,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.6");
                activeTimelines.set('flex', flexTl);

                servicePanels.forEach((p, index) => {
                    const content = contents[index];
                    const labelSpan = labelSpans[index];
                    const labelContainer = labelContainers[index];
                    if (!content || !labelSpan || !labelContainer) return;

                    if (p === panel) {
                        // Timeline pour séquencer les animations
                        const tl = gsap.timeline();
                        
                        // 1. Le label monte en haut, rotate et s'agrandit
                        tl.to(labelContainer, {
                            y: "-200%", // Plus haut
                            duration: 0.5,
                            ease: "power2.out"
                        })
                        .to(labelSpan, {
                            opacity: 1, // Garde le jaune vif
                            rotation: 0,
                            scale: 1.2, // Plus gros
                            duration: 0.5,
                            ease: "power2.out"
                        }, "-=0.5") // Démarre en même temps que le mouvement vers le haut
                        
                        // 2. Le contenu apparaît en fade in
                        .to(content, {
                            opacity: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        }, "-=0.1")
                        
                        // 3. Animation des mots un par un avec bounce
                        .to(content.querySelectorAll('h3 span, p span'), {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            ease: "back.out(1.7)",
                            stagger: 0.05 // Chaque mot arrive avec un léger délai
                        }, "-=0.2");
                        
                        activeTimelines.set(panel, tl);
                        
                        gsap.to(p.querySelector("::before"), { opacity: 0.45, duration: 0.4 });
                    } else {
                        // Fermer les autres panneaux immédiatement
                        const closeTl = gsap.timeline();
                        closeTl.to(content, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" })
                        .to(content.querySelectorAll('h3 span, p span'), {
                            opacity: 0,
                            y: 20,
                            duration: 0.2
                        }, "-=0.2")
                        .to(labelContainer, {
                            y: "0%", // Retour au centre
                            duration: 0.5,
                            ease: "power2.out"
                        }, "-=0.1")
                        .to(labelSpan, {
                            opacity: 1,
                            rotation: -90,
                            scale: 1, // Retour à  la taille normale
                            duration: 0.5,
                            ease: "power2.out"
                        }, "-=0.5");
                        
                        activeTimelines.set(p, closeTl);
                    }
                });
            };

            servicePanels.forEach((panel) => {
                // Désactiver les interactions sur mobile
                if (window.innerWidth >= 768) {
                    panel.addEventListener('mouseenter', () => activatePanel(panel));
                    panel.addEventListener('mouseleave', () => {
                        // Ne rien faire si on passe à  un autre panneau - mouseenter le gérera
                        // On laisse juste le système gérer naturellement les transitions
                    });
                    panel.addEventListener('click', (e) => {
                        // Ne pas activer l'accordéon si on clique sur le bouton
                        if (!e.target.classList.contains('btn-more')) {
                            activatePanel(panel);
                        }
                    });
                }
            });

            // Réinitialiser sur mobile (accordéon désactivé, panneaux pleine largeur)
            const initMobileView = () => {
                if (window.innerWidth < 768) {
                    gsap.to(servicePanels, { flex: 1, duration: 0.3 });
                    servicePanels.forEach((p) => {
                        const content = p.querySelector('.panel-content');
                        const labelSpan = p.querySelector('.panel-label span');
                        const labelContainer = p.querySelector('.panel-label');
                        const words = content ? content.querySelectorAll('h3 span, p span') : [];
                        if (content) {
                            gsap.set(content, { opacity: 1, y: 0 });
                        }
                        if (labelSpan) {
                            gsap.set(labelSpan, { opacity: 1, rotation: 0, scale: 1 });
                        }
                        if (labelContainer) {
                            gsap.set(labelContainer, { y: 0, x: 0 });
                        }
                        if (words.length > 0) {
                            gsap.set(words, { opacity: 1, y: 0 });
                        }
                    });
                }
            };
            
            // Initialiser la vue mobile au chargement
            initMobileView();
            
            window.addEventListener('resize', () => {
                initMobileView();
            });
        }

        // Animation spécifique du formulaire de contact :
        // les champs sont d'abord décalés à gauche/droite puis
        // viennent se placer pour "construire" le formulaire au scroll
        // L'animation suit le scroll : se construit en descendant, se défait en remontant
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const formWrapper = contactSection.querySelector('.form-wrapper');
            const animatedFields = contactSection.querySelectorAll('.form-animated-field');

            if (animatedFields.length > 0 && formWrapper) {
                // Position initiale : complètement hors champ pour effet "défait"
                // Utilisation de la largeur de la fenêtre pour garantir qu'ils sortent vraiment
                const screenWidth = window.innerWidth || 1920;
                const screenHeight = window.innerHeight || 1080;
                
                animatedFields.forEach((field, index) => {
                    const side = field.getAttribute('data-side') || 'left';
                    // Décalages X énormes pour sortir complètement hors champ (150% de la largeur d'écran)
                    const fromX = side === 'right' ? screenWidth * 1.5 : -screenWidth * 1.5;
                    // Rotations plus prononcées
                    const fromRot = side === 'right' ? 25 : -25;
                    // Décalages Y variables et importants pour sortir aussi verticalement
                    const fromY = (index % 2 === 0) ? screenHeight * 0.5 : -screenHeight * 0.4;
                    // Scale plus réduit pour certains champs
                    const fromScale = (index % 3 === 0) ? 0.7 : 0.85;

                    gsap.set(field, {
                        opacity: 0.5,
                        x: fromX,
                        y: fromY,
                        rotation: fromRot,
                        scale: fromScale
                    });
                });

                // Timeline qui reconstruit le formulaire champ par champ avec scrub pour suivre le scroll
                // Utiliser formWrapper comme trigger pour que l'animation se déclenche quand le formulaire arrive
                const formTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: formWrapper,
                        start: "top 70%", // Commence quand le formulaire arrive dans la zone visible
                        end: "top 20%", // Se termine un peu plus bas pour plus de temps d'animation
                        scrub: 1.2, // Suit le scroll avec un léger délai pour fluidité
                        toggleActions: "play none none reverse"
                    }
                });

                animatedFields.forEach((field, index) => {
                    formTl.to(field, {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    }, index * 0.15); // léger décalage pour l'effet de construction séquentielle
                });

                // Animation du cadre noir avec pattern qui apparaît une fois le formulaire construit
                const formFrame = contactSection.querySelector('.form-frame');
                if (formFrame) {
                    // Calculer le délai pour que le cadre commence après que tous les champs soient en place
                    const delayAfterFields = animatedFields.length * 0.15 + 0.4;
                    
                    // Animation simple en opacité
                    formTl.to(formFrame, {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    }, delayAfterFields);
                }
            }
        }
    }
});

// Fallback pour le bouton back to top si GSAP ne charge pas
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop && typeof gsap === 'undefined') {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// Fonction pour remonter en haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animation du soulignement qui se déplace dans la bulle de navigation
const navBubble = document.querySelector('.nav-bubble');
const navUnderline = document.getElementById('nav-underline');
const navLinks = document.querySelectorAll('.nav-link');

if (navBubble && navUnderline && navLinks.length > 0) {
    let currentLink = null;
    
    // Fonction pour positionner le soulignement
    function positionUnderline(link) {
        if (!link) return;
        
        const bubbleRect = navBubble.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();
        
        const left = linkRect.left - bubbleRect.left;
        const width = linkRect.width;
        
        if (typeof gsap !== 'undefined') {
            gsap.to(navUnderline, {
                left: left,
                width: width,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        } else {
            navUnderline.style.left = left + 'px';
            navUnderline.style.width = width + 'px';
            navUnderline.style.opacity = '1';
        }
        
        currentLink = link;
    }
    
    // Gérer le survol de chaque lien
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            positionUnderline(link);
        });
    });
    
    // Afficher le soulignement sur le premier lien au chargement si on est sur desktop
    if (window.innerWidth >= 768) {
        setTimeout(() => {
            positionUnderline(navLinks[0]);
        }, 100);
    }
    
    // Cacher le soulignement quand on quitte la bulle
    navBubble.addEventListener('mouseleave', () => {
        if (typeof gsap !== 'undefined') {
            gsap.to(navUnderline, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        } else {
            navUnderline.style.opacity = '0';
        }
    });
}

// Gestion de la modal des services
const serviceModal = document.getElementById('service-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const btnMoreButtons = document.querySelectorAll('.btn-more');

// Contenu des modals pour chaque service
const serviceContent = {
    renovation: {
        title: "Rénovation Intérieure & Extérieure",
        description: "Modernisation complète des appartements, maisons et façades, avec une attention particulière portée aux finitions et à la durabilité.",
        details: [
            "Rénovation complète d'appartements et maisons",
            "Restauration et modernisation de façades",
            "Aménagement de combles et sous-sols",
            "Rénovation de salles de bains et cuisines",
            "Travaux de ravalement et isolation par l'extérieur",
            "Mise aux normes électriques et plomberie"
        ]
    },
    amenagement: {
        title: "Aménagement & Agencement d'Intérieur",
        description: "Conception et agencement sur-mesure de cuisines, salles de bains, bureaux et espaces professionnels.",
        details: [
            "Conception de cuisines équipées sur mesure",
            "Aménagement de salles de bains modernes",
            "Agencement de bureaux et espaces professionnels",
            "Optimisation des espaces de vie",
            "Création de rangements intégrés",
            "Design et décoration d'intérieur"
        ]
    },
    isolation: {
        title: "Isolation & Performance Énergétique",
        description: "Solutions d'isolation thermique et acoustique pour améliorer votre confort et réduire vos factures d'énergie.",
        details: [
            "Isolation thermique par l'intérieur et l'extérieur",
            "Isolation acoustique des murs et plafonds",
            "Pose de double vitrage et fenêtres performantes",
            "Installation de VMC double flux",
            "Rénovation énergétique complète",
            "Conseil en économies d'énergie"
        ]
    },
    plomberie: {
        title: "Plomberie & Réseaux",
        description: "Installation, rénovation et mise aux normes de vos réseaux d'eau, chauffage et sanitaires.",
        details: [
            "Installation complète de réseaux d'eau",
            "Rénovation de salles de bains",
            "Installation de systèmes de chauffage",
            "Dépannage et réparation d'urgence",
            "Mise aux normes des installations",
            "Installation de sanitaires et robinetterie"
        ]
    },
    revetements: {
        title: "Revêtements & Finitions",
        description: "Pose de carrelage, parquet, peinture et enduits décoratifs pour sublimer vos intérieurs et extérieurs.",
        details: [
            "Pose de carrelage intérieur et extérieur",
            "Installation de parquet massif et stratifié",
            "Peinture intérieure et extérieure",
            "Enduits décoratifs et crépis",
            "Pose de papier peint et revêtements muraux",
            "Finitions et rénovation de sols"
        ]
    }
};

function openModal(serviceId) {
    const content = serviceContent[serviceId];
    if (!content) return;
    
    modalBody.innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <h3>Nos prestations</h3>
        <ul>
            ${content.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <div style="margin-top: 2rem; text-align: center;">
            <a href="#contact" class="btn-more" onclick="closeModal()">Demander un devis</a>
        </div>
    `;
    
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animation d'ouverture avec GSAP si disponible
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.service-modal-content', 
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );
    }
}

function closeModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Animation de fermeture avec GSAP si disponible
    if (typeof gsap !== 'undefined') {
        gsap.to('.service-modal-content', {
            opacity: 0,
            scale: 0.9,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                modalBody.innerHTML = '';
            }
        });
    } else {
        modalBody.innerHTML = '';
    }
}

// Ouvrir la modal au clic sur les boutons
btnMoreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const serviceId = btn.getAttribute('data-service');
        if (serviceId) {
            openModal(serviceId);
        }
    });
});

// Fermer la modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Fermer en cliquant en dehors de la modal
serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        closeModal();
    }
});

// Gestion de la modal Mentions Légales
const mentionsModal = document.getElementById('mentions-modal');
const mentionsModalClose = document.getElementById('mentions-modal-close');
const mentionsLegalesBtn = document.getElementById('mentions-legales-btn');

function openMentionsModal() {
    if (mentionsModal) {
        mentionsModal.classList.add('active');
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.service-modal-content', 
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
        }
    }
}

function closeMentionsModal() {
    if (mentionsModal) {
        mentionsModal.classList.remove('active');
        if (typeof gsap !== 'undefined') {
            gsap.to('.service-modal-content', {
                scale: 0.9,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }
}

if (mentionsLegalesBtn) {
    mentionsLegalesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMentionsModal();
    });
}

if (mentionsModalClose) {
    mentionsModalClose.addEventListener('click', closeMentionsModal);
}

if (mentionsModal) {
    mentionsModal.addEventListener('click', (e) => {
        if (e.target === mentionsModal) {
            closeMentionsModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mentionsModal && mentionsModal.classList.contains('active')) {
        closeMentionsModal();
    }
});


// Fermer avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion du formulaire
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous contacterons sous peu.');
        e.target.reset();
    });
}






document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');
    const body = document.body;

    // Fonction pour basculer le menu
    function toggleMenu() {
        burgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        body.classList.toggle('no-scroll');
    }

    // Événement clic sur le burger
    if (burgerBtn) {
        burgerBtn.addEventListener('click', toggleMenu);
    }

    // Fermer le menu quand on clique sur un lien
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // On attend un tout petit peu pour laisser l'utilisateur voir le clic
            setTimeout(() => {
                toggleMenu();
            }, 100);
        });
    });

    // Optionnel : Fermer avec la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});
