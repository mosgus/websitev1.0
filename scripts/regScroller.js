console.log("✅ Loaded Regular Scroller");

// Define `handleScroll` as a global function **before** `DOMContentLoaded`
window.handleScroll = function () {
    let scrollValue = window.scrollY;
    let viewportHeight = window.innerHeight;
    let totalHeight = document.body.scrollHeight - viewportHeight;
    let scrollPercentage = scrollValue / totalHeight;

    console.log(`📜 Scroll detected! Percentage: ${scrollPercentage}`);

    let body = document.body;
    let logo = document.getElementById('logo');
    let firstintro = document.getElementById('intro'); // end of intro section
    let BGtitle = document.getElementById('BGtitle');
    let pfp = document.getElementById('pfp');
    let BGintro = document.getElementById('BGintro');
    let socials = document.getElementById('social-links');
    let linea = document.getElementById('custom-lineA'); // end of overview section
    let Syn_title = document.getElementById('Stitle');
    let Syn_paragraph = document.getElementById('synopsis-p');
    let lineb = document.getElementById('custom-lineB');

    if (!logo || !firstintro) {
        console.error("❌ One or more elements not found! Check your IDs.");
        return;
    }

    /** Introduction section */
    if (scrollPercentage > 0.04 ) {
        logo.style.transform = `translateX(-400px)`;
        logo.style.opacity = `0`;
        logo.style.transition = 'all 0.5s ease';
        if (scrollPercentage > 0.08 ) {
            firstintro.style.transform = `translateY(-300px)`;
            firstintro.style.opacity = `0`;
            firstintro.style.transition = 'all 1s ease';
        }

    } else {
        body.style.background = "#cdc1b7"; // Default off-white
        body.style.transition = 'all 1s ease';

        logo.style.transform = `translateX(0px)`;
        logo.style.opacity = `1`;
        logo.style.transition = 'all 1s ease';

        firstintro.style.transform = `translateY(0px)`;
        firstintro.style.opacity = `1`;
        firstintro.style.transition = 'all 1s ease';
    }
    /** Overview section (starts at 20%) */
    if (scrollPercentage >= 0.15 && scrollPercentage < 0.4) {
        body.style.background = "#639e65";  // Blue
        body.style.transition = 'all 1.0s ease';

        BGtitle.style.transform = `translateY(0px)`;
        BGtitle.style.opacity = `1`;
        BGtitle.style.transition = 'all 1.5s ease';

        if (scrollPercentage >= 0.2) {
            pfp.style.transform = `translateX(0px)`;
            pfp.style.opacity = `1`;
            pfp.style.transition = 'all 1.5s ease';

            BGintro.style.transform = `translateX(0px)`;
            BGintro.style.opacity = `1`;
            BGintro.style.transition = 'all 2s ease';

            if (scrollPercentage >= 0.22) {
                socials.style.transform = `translateX(0px)`;
                socials.style.opacity = `1`;
                socials.style.transition = 'all 1.5s ease';

                linea.style.transform = `scaleX(1)`;
                linea.style.opacity = `1`;
                linea.style.transition = 'all 1.5s ease';
            }

        }

    } else {
        BGtitle.style.transform = `translateX(350px)`;
        BGtitle.style.opacity = `0`;
        BGtitle.style.transition = 'all 1s ease';

        pfp.style.transform = `translateX(-300px)`;
        pfp.style.opacity = `0`;
        pfp.style.transition = 'all 1s ease';

        BGintro.style.transform = `translateX(500px)`;
        BGintro.style.opacity = `0`;
        BGintro.style.transition = 'all 2s ease';

        socials.style.transform = `translateX(-500px)`;
        socials.style.opacity = `0`;
        socials.style.transition = 'all 1s ease';

        linea.style.transform = `scaleX(0.1)`;
        linea.style.opacity = `0`;
        linea.style.transition = 'all 2s ease';
    }
    /** Synopsis section */
    if (scrollPercentage >= 0.46 && scrollPercentage < 0.85) {
        body.style.background = "#83639e";  // Blue
        body.style.transition = 'all 1s ease';

        if (scrollPercentage >= 0.5 ) {
            Syn_title.style.transform = `translateX(0px)`;
            Syn_title.style.opacity = `1`;
            Syn_title.style.transition = 'all 1s ease';
        }

        if ( scrollPercentage >= 0.52 && scrollPercentage < 0.8) {
            Syn_paragraph.style.transform = `translateX(0px)`;
            Syn_paragraph.style.opacity = `1`;
            Syn_paragraph.style.transition = 'all 1.5s ease';
        }

        if ( scrollPercentage >= 0.65 ) {
            lineb.style.transform = `scaleX(1)`;
            lineb.style.opacity = `1`;
            lineb.style.transition = 'all 2s ease';
        }

    } else {
        Syn_title.style.transform = `translateX(-300px)`;
        Syn_title.style.opacity = `0`;
        Syn_title.style.transition = 'all 0.75s ease';

        Syn_paragraph.style.transform = `translateX(300px)`;
        Syn_paragraph.style.opacity = `0`;
        Syn_paragraph.style.transition = 'all 1s ease';

        lineb.style.transform = `scaleX(0)`;
        lineb.style.opacity = `0`;
        lineb.style.transition = 'all 1.5s ease';
    }
    /** Project Section */
    if (scrollPercentage >= 0.88 && scrollPercentage < 0.99) {
        body.style.background = "#ffba95";
        body.style.transition = 'all 1.5s ease';
    }
};

// Attach event listener immediately after script loads
window.addEventListener("scroll", window.handleScroll);