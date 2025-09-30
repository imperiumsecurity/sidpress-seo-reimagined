// STTP HTML - Vanilla JavaScript
// All interactivity using data-* attributes

(function() {
    'use strict';

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initLogoTicker();
        updateCopyright();
    });

    // Mobile Menu Toggle
    function initMobileMenu() {
        var menuButton = document.querySelector('[data-action="toggle-menu"]');
        var menuOverlay = document.querySelector('[data-element="menu-overlay"]');
        var menuLinks = document.querySelectorAll('.sttp-mobile-menu-link');

        if (!menuButton || !menuOverlay) {
            return;
        }

        // Toggle menu
        menuButton.addEventListener('click', function() {
            var currentState = menuOverlay.getAttribute('data-state');
            var newState = currentState === 'closed' ? 'open' : 'closed';
            menuOverlay.setAttribute('data-state', newState);

            if (newState === 'open') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                menuOverlay.setAttribute('data-state', 'closed');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function() {
                menuOverlay.setAttribute('data-state', 'closed');
                document.body.style.overflow = '';
            });
        }

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.getAttribute('data-state') === 'open') {
                menuOverlay.setAttribute('data-state', 'closed');
                document.body.style.overflow = '';
            }
        });
    }

    // Logo Ticker Animation
    function initLogoTicker() {
        var ticker = document.querySelector('[data-animation="slide"]');
        
        if (!ticker) {
            return;
        }

        // Clone items for infinite scroll
        var items = ticker.querySelectorAll('.sttp-logo-ticker-item');
        for (var i = 0; i < items.length; i++) {
            var clone = items[i].cloneNode(true);
            ticker.appendChild(clone);
        }
    }

    // Update Copyright Year
    function updateCopyright() {
        var copyrightElement = document.querySelector('[data-content="year"]');
        
        if (copyrightElement) {
            var currentYear = new Date().getFullYear();
            copyrightElement.textContent = '© ' + currentYear + ' SIDPRESS. All rights reserved.';
        }
    }
})();