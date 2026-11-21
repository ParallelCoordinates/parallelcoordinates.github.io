window.silktideConsentManager.init({
    backdrop: {
        show: false
    },
    icon: {
        position: "bottomLeft"
    },
    prompt: {
        position: "bottomRight"
    },
    consentTypes: [
        {
            id: "essential",
            label: "Essential",
            description: "<p>These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.</p>",
            required: true,
            onAccept: function() {
                console.log("Add logic for the required Essential consent type here");
            }
        },
        {
            id: "analytics",
            label: "Analytics",
            description: "<p>These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.</p>",
            required: false,
            defaultValue: false,
            gtag: "analytics_storage",
            scripts: [
                {
                    url: "https://www.googletagmanager.com/gtag/js?id=G-FV3R54H6RF",
                    load: "async"
                }
            ],
            onAccept: function() {
                // Google Analytics 4 (G-FV3R54H6RF)
                window.dataLayer = window.dataLayer || [];
                function gtag() { window.dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-FV3R54H6RF');
            }
        }
    ],
    text: {
        prompt: {
            description: "<p>We use Google Analytics with your consent to analyze how this website is used. Read our <a href='/gdpr-en.html' rel='nofollow'>Privacy Policy</a>.</p>",
            acceptAllButtonText: "Accept all",
            acceptAllButtonAccessibleLabel: "Accept all cookies",
            rejectNonEssentialButtonText: "Reject non-essential",
            rejectNonEssentialButtonAccessibleLabel: "Reject all non-essential cookies",
            preferencesButtonText: "Preferences",
            preferencesButtonAccessibleLabel: "Toggle preferences"
        },
        preferences: {
            title: "Customize your cookie preferences",
            description: "<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>",
            saveButtonText: "Save and close",
            saveButtonAccessibleLabel: "Save your cookie preferences",
            creditLinkText: "Credits",
            creditLinkAccessibleLabel: "Credits"
        }
    }
});

window.addEventListener('open-privacy-settings', () => {
    const manager = window.silktideConsentManager.getInstance();

    if (manager) {
        manager.toggleModal(true);
    }
});