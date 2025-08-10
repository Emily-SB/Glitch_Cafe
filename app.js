// Menu data
const menuItems = [
    {
        "name": "Neo-Puttu with Binary Kadala",
        "description": "Traditional steamed rice cake upgraded with quantum spices",
        "basePrice": 150,
        "priceRange": [120, 180],
        "sideEffects": [
            "May cause temporary time loop experiences",
            "Side effect: Your memories might pixelate for 2-4 hours",
            "Enhanced ability to process binary data",
            "Possible nostalgic visions of analog Kerala"
        ]
    },
    {
        "name": "Quantum Appam with Glitch Stew",
        "description": "Fermented reality pancakes with probability-based curry",
        "basePrice": 185,
        "priceRange": [150, 220],
        "sideEffects": [
            "Warning: May induce tastebud recalibration",
            "Effect: Enhanced ability to debug life problems",
            "May cause sudden enlightenment about coconut physics",
            "Possible glitch: You might taste colors"
        ]
    },
    {
        "name": "Cyber Thalassery Biryani v2.0",
        "description": "Neural-network optimized rice with encrypted meat layers",
        "basePrice": 315,
        "priceRange": [280, 350],
        "sideEffects": [
            "May cause enhanced pattern recognition",
            "Side effect: Dreams in Malayalam ASCII art",
            "Warning: Rice grains might display error messages",
            "Effect: Temporary ability to speak in code"
        ]
    },
    {
        "name": "Holographic Palada Payasam",
        "description": "Virtual dessert that exists only when observed",
        "basePrice": 115,
        "priceRange": [90, 140],
        "sideEffects": [
            "May cause existential questions about sweetness",
            "Effect: Enhanced appreciation for milk algorithms",
            "Warning: May disappear if you look away",
            "Possible glitch: Sweetness level fluctuation"
        ]
    },
    {
        "name": "Matrix Fish Moilee",
        "description": "Red pill fish in coconut milk simulation",
        "basePrice": 240,
        "priceRange": [200, 280],
        "sideEffects": [
            "May reveal the true nature of curry",
            "Effect: Enhanced ability to dodge spice attacks",
            "Warning: May cause reality to taste fishy",
            "Possible glitch: Fish might swim in reverse"
        ]
    },
    {
        "name": "Digital Banana Chips",
        "description": "Compressed snack data in crispy format",
        "basePrice": 80,
        "priceRange": [60, 100],
        "sideEffects": [
            "May cause crunching sound in 8-bit",
            "Effect: Enhanced banana-based logic processing",
            "Warning: May stick to your digital teeth",
            "Possible glitch: Flavor might compress/decompress"
        ]
    },
    {
        "name": "Error 404 Coconut Water",
        "description": "Refreshing drink that may or may not exist",
        "basePrice": 60,
        "priceRange": [40, 80],
        "sideEffects": [
            "May cause system refresh of taste buds",
            "Effect: Hydration levels impossible to calculate",
            "Warning: May display 'thirst not found' error",
            "Possible glitch: Liquid might become gaseous"
        ]
    },
    {
        "name": "Corrupted Malabar Parota",
        "description": "Layered bread with file system errors",
        "basePrice": 100,
        "priceRange": [80, 120],
        "sideEffects": [
            "May cause layers to separate into dimensions",
            "Effect: Enhanced understanding of bread geometry",
            "Warning: May require system restart to digest",
            "Possible glitch: Might fold into impossible shapes"
        ]
    }
];

// Reviews data
const reviews = [
    
    {
        "character": "Dasan (ദാസൻ)",
        "movie": "Nadodikkattu",
        "review": "This place is more confusing than finding a job! But the puttu is പ്രത്യേക... [GLITCH_ERROR: TASTE_BUFFER_OVERFLOW]",
        "rating": 4,
        "glitchText": "പ്രത്യേക്"
    },
    {
        "character": "Mannar Mathai",
        "movie": "Ramji Rao Speaking",
        "review": "The food here is as unpredictable as my theater shows... I ordered fish but got encrypted memories of the sea [DATA_CORRUPTED]",
        "rating": 4,
        "glitchText": "[MEMORY_LEAK_DETECTED]"
    },
    {
        "character": "Neelakandan",
        "movie": "Devasuram",
        "review": "Even my legendary appetite gets confused by this menu! The biryani fought back... literally [COMBAT_MODE_ENGAGED]",
        "rating": 5,
        "glitchText": "അപ്പം"
    },
    {
        "character": "Georgekutty",
        "movie": "Drishyam",
        "review": "Perfect place to hide from reality... if you can find it on the menu. The payasam disappeared when I looked away [SIGNAL_LOST]",
        "rating": 4,
        "glitchText": "[REALITY_CHECK_FAILED]"
    },
    {
        "character": "Keerikkadan Jose",
        "movie": "Kireedam",
        "review": "Even I am scared of this menu... the appam stared back at me [FEAR_PROTOCOL_ACTIVATED]",
        "rating": 3,
        "glitchText": "ഭയങ്കര"
    },
    {
        "character": "Shammi",
        "movie": "Kumbalangi Nights",
        "review": "I tried to control this café's menu, but it controls itself... മലയാളി excellence in chaos form [CONTROL_OVERFLOW]",
        "rating": 2,
        "glitchText": "മലയാളി"
    }

];

// System messages
const systemMessages = [
    "QUANTUM_KITCHEN_ONLINE",
    "REALITY_BUFFER: 67% CORRUPTED",
    "MALAYALAM_KERNEL: RUNNING",
    "SPICE_LEVELS: RECALIBRATING",
    "COCONUT_MATRIX: STABLE",
    "TIME_LOOP_DETECTED: PUTTU_SEQUENCE",
    "CURRY_ALGORITHM: OPTIMIZING",
    "NOSTALGIA_RAM: 89% FULL"
];

// Error messages
const errorMessages = [
    "Temporal paradox detected...",
    "Reality buffer overflow",
    "Quantum entanglement failure",
    "Malayalam syntax error",
    "Coconut matrix unstable",
    "Curry algorithm crashed",
    "Time loop in puttu sequence",
    "Memory leak in payasam.exe"
];

// Global variables
let currentMenuIndices = [0, 1, 2, 3];
let currentReviewIndex = 0;
let menuUpdateInterval;
let reviewUpdateInterval;
let systemMessageInterval;
let errorInterval;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Glitch CafÉ...');
    
    // Initialize all components
    initializeMenu();
    initializeReviews();
    initializeSystemMessages();
    initializeOrderButton(); // Make sure this runs
    initializeRandomErrors();
    
    // Start all intervals after a brief delay
    setTimeout(() => {
        startMenuRotation();
        startReviewRotation();
        startSystemMessageRotation();
        startRandomErrors();
        addGlitchEffects();
    }, 1000);
});

// Menu functions
function initializeMenu() {
    updateMenuDisplay();
}

function startMenuRotation() {
    menuUpdateInterval = setInterval(() => {
        rotateMenuItems();
        updateMenuDisplay();
    }, 3000); // Update every 3 seconds
}

function rotateMenuItems() {
    // Randomly select 4 different menu items
    const availableIndices = [...Array(menuItems.length).keys()];
    currentMenuIndices = [];
    
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        currentMenuIndices.push(availableIndices[randomIndex]);
        availableIndices.splice(randomIndex, 1);
    }
}

function updateMenuDisplay() {
    currentMenuIndices.forEach((menuIndex, displayIndex) => {
        const menuItem = menuItems[menuIndex];
        const menuElement = document.getElementById(`menu-item-${displayIndex + 1}`);
        
        if (menuElement) {
            // Calculate random price within range
            const [minPrice, maxPrice] = menuItem.priceRange;
            const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
            
            // Select random side effect
            const randomEffect = menuItem.sideEffects[Math.floor(Math.random() * menuItem.sideEffects.length)];
            
            // Update content with glitch effect
            const nameElement = menuElement.querySelector('.item-name');
            const priceElement = menuElement.querySelector('.item-price');
            const descElement = menuElement.querySelector('.item-description');
            const effectElement = menuElement.querySelector('.effect-text');
            
            // Apply glitch effect during update
            menuElement.style.transform = 'translateX(2px)';
            setTimeout(() => {
                menuElement.style.transform = 'translateX(-1px)';
            }, 50);
            setTimeout(() => {
                menuElement.style.transform = 'translateX(0)';
            }, 100);
            
            nameElement.textContent = menuItem.name;
            priceElement.textContent = `â¹${randomPrice}`;
            descElement.textContent = menuItem.description;
            effectElement.textContent = randomEffect;
        }
    });
}

// Review functions
function initializeReviews() {
    displayCurrentReview();
}

function startReviewRotation() {
    reviewUpdateInterval = setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        displayCurrentReview();
    }, 8000); // Change review every 8 seconds
}

function displayCurrentReview() {
    const reviewsContainer = document.getElementById('reviews-container');
    const review = reviews[currentReviewIndex];
    
    // Clear previous review
    reviewsContainer.innerHTML = '';
    
    // Create review element
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-item';
    
    const header = document.createElement('div');
    header.className = 'review-header';
    
    const characterInfo = document.createElement('div');
characterInfo.innerHTML = `
    <div class="character-name">${review.character}</div>
    <div class="movie-name">${review.movie}</div>
`;

const rating = document.createElement('div');
rating.className = 'rating';
// Use actual star and empty star characters
rating.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    
    header.appendChild(characterInfo);
    header.appendChild(rating);
    
    const reviewText = document.createElement('div');
    reviewText.className = 'review-text';
    
    reviewElement.appendChild(header);
    reviewElement.appendChild(reviewText);
    reviewsContainer.appendChild(reviewElement);
    
    // Typewriter effect for review text
    typewriterEffect(reviewText, review.review, review.glitchText);
}

function typewriterEffect(element, text, glitchText) {
    element.textContent = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            
            // Add glitch effect randomly during typing
            if (Math.random() < 0.1) {
                element.style.transform = 'translateX(1px)';
                setTimeout(() => {
                    element.style.transform = 'translateX(0)';
                }, 50);
            }
        } else {
            clearInterval(typeInterval);
            
            // Apply glitch to specific text after typing is complete
            if (glitchText && text.includes(glitchText)) {
                const glitchedText = element.textContent.replace(
                    glitchText,
                    `<span class="glitch-text">${glitchText}</span>`
                );
                element.innerHTML = glitchedText;
            }
        }
    }, 50);
}

// System message functions
function initializeSystemMessages() {
    updateSystemMessage();
}

function startSystemMessageRotation() {
    systemMessageInterval = setInterval(() => {
        updateSystemMessage();
    }, 4000); // Change system message every 4 seconds
}

function updateSystemMessage() {
    const systemMessageElement = document.getElementById('system-message');
    if (systemMessageElement) {
        const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)];
        
        // Glitch effect during update
        systemMessageElement.style.opacity = '0.3';
        setTimeout(() => {
            systemMessageElement.textContent = randomMessage;
            systemMessageElement.style.opacity = '1';
        }, 200);
    }
}

// Random error functions
function initializeRandomErrors() {
    // Initialize but don't start immediately
}

function startRandomErrors() {
    errorInterval = setInterval(() => {
        if (Math.random() < 0.15) { // 15% chance every 10 seconds
            showRandomError();
        }
    }, 10000);
}

function showRandomError() {
    const errorOverlay = document.getElementById('error-overlay');
    const errorText = document.getElementById('error-text');
    if (errorOverlay && errorText) {
        const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        
        errorText.textContent = randomError;
        errorOverlay.style.display = 'flex';
        
        // Hide after 2 seconds
        setTimeout(() => {
            errorOverlay.style.display = 'none';
        }, 2000);
    }
}

// Order button functionality - FIXED VERSION
function initializeOrderButton() {
    console.log('Initializing order button...');
    
    // Use a more robust method to find the button
    setTimeout(() => {
        const orderBtn = document.getElementById('order-btn');
        const errorMessage = document.getElementById('error-message');
        
        console.log('Order button element:', orderBtn);
        console.log('Error message element:', errorMessage);
        
        if (!orderBtn) {
            console.error('Order button not found!');
            return;
        }
        
        if (!errorMessage) {
            console.error('Error message element not found!');
            return;
        }
        
        // Remove any existing event listeners
        orderBtn.replaceWith(orderBtn.cloneNode(true));
        const newOrderBtn = document.getElementById('order-btn');
        
        newOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Order button clicked!');
            
            // Show error message immediately
            errorMessage.style.display = 'block';
            errorMessage.style.opacity = '1';
            
            // Add glitch effect to button
            newOrderBtn.style.transform = 'scale(0.95)';
            newOrderBtn.style.background = 'linear-gradient(45deg, #ff5555, #ff6b35)';
            
            // Glitch the button text
            const btnText = newOrderBtn.querySelector('.btn-text');
            if (btnText) {
                const originalText = btnText.textContent;
                
                btnText.textContent = 'ERROR_404';
                
                setTimeout(() => {
                    btnText.textContent = 'SYSTEM_CRASH';
                    newOrderBtn.style.transform = 'scale(1.02)';
                }, 300);
                
                setTimeout(() => {
                    btnText.textContent = 'REALITY_LOST';
                    newOrderBtn.style.transform = 'scale(0.98)';
                }, 600);
                
                setTimeout(() => {
                    btnText.textContent = 'DIMENSION_ERROR';
                    newOrderBtn.style.transform = 'scale(1.01)';
                }, 900);
                
                setTimeout(() => {
                    btnText.textContent = originalText;
                    newOrderBtn.style.transform = 'scale(1)';
                    newOrderBtn.style.background = 'linear-gradient(45deg, var(--cyber-pink), var(--cyber-cyan))';
                    errorMessage.style.opacity = '0';
                    setTimeout(() => {
                        errorMessage.style.display = 'none';
                    }, 300);
                }, 4000);
            }
            
            // Add screen glitch effect
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'hue-rotate(90deg)';
            }, 100);
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 200);
        });
        
        console.log('Order button event listener added successfully!');
    }, 500); // Wait 500ms to ensure DOM is fully loaded
}

// Additional glitch effects
function addGlitchEffects() {
    // Random screen flickers
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance
            document.body.style.filter = 'hue-rotate(90deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
    }, 1000);
    
    // Random text corruption
    setInterval(() => {
        if (Math.random() < 0.03) { // 3% chance
            const textElements = document.querySelectorAll('p, h4, h5, h6');
            const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
            
            if (randomElement && !randomElement.classList.contains('glitch-title') && !randomElement.classList.contains('item-name')) {
                const originalText = randomElement.textContent;
                const corruptedText = originalText.split('').map(char => 
                    Math.random() < 0.1 ? String.fromCharCode(Math.floor(Math.random() * 94) + 33) : char
                ).join('');
                
                randomElement.textContent = corruptedText;
                
                setTimeout(() => {
                    randomElement.textContent = originalText;
                }, 200);
            }
        }
    }, 2000);
}

// Mouse interaction effects
document.addEventListener('mousemove', function(e) {
    // Create trailing particle effect occasionally
    if (Math.random() < 0.1) {
        createTrailParticle(e.clientX, e.clientY);
    }
});

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#00ffff';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.boxShadow = '0 0 6px #00ffff';
    
    document.body.appendChild(particle);
    
    // Animate and remove particle
    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0)';
        particle.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 500);
    }, 100);
}

// Keyboard shortcuts for easter eggs
document.addEventListener('keydown', function(e) {
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    if (!window.konamiSequence) {
        window.konamiSequence = [];
    }
    
    window.konamiSequence.push(e.code);
    
    if (window.konamiSequence.length > konamiCode.length) {
        window.konamiSequence = window.konamiSequence.slice(-konamiCode.length);
    }
    
    if (JSON.stringify(window.konamiSequence) === JSON.stringify(konamiCode)) {
        activateKonamiMode();
        window.konamiSequence = [];
    }
});

function activateKonamiMode() {
    // Secret mode activation
    document.body.style.animation = 'rainbow 1s infinite';
    
    // Add rainbow keyframes
    if (!document.getElementById('rainbow-styles')) {
        const style = document.createElement('style');
        style.id = 'rainbow-styles';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show special message
    const glitchTitle = document.querySelector('.glitch-title');
    const originalText = glitchTitle.textContent;
    glitchTitle.textContent = 'KONAMI MODE ACTIVATED';
    
    setTimeout(() => {
        glitchTitle.textContent = originalText;
        document.body.style.animation = '';
    }, 5000);
}

// Performance optimization: Clean up intervals when page is hidden
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause intervals when page is not visible
        clearInterval(menuUpdateInterval);
        clearInterval(reviewUpdateInterval);
        clearInterval(systemMessageInterval);
        clearInterval(errorInterval);
    } else {
        // Resume intervals when page becomes visible
        startMenuRotation();
        startReviewRotation();
        startSystemMessageRotation();
        startRandomErrors();
    }
});

// Utility functions
function getRandomPrice(minPrice, maxPrice) {
    return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Console log for debugging and atmosphere
console.log(`
âââââââââââââââââââââââââââââââââââââââââ
â        GLITCH CAFÃ INITIALIZED        â
â           à´àµà´²à´¿à´àµà´àµ à´à´«àµ                â
â                                       â
â  Reality Status: CORRUPTED            â
â  Quantum Kitchen: ONLINE              â
â  Malayalam Kernel: RUNNING            â
â                                       â
â  Welcome to the fractured dimension   â
â  where Kerala flavors transcend       â
â  digital boundaries...                â
âââââââââââââââââââââââââââââââââââââââââ
`);