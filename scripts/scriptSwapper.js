let currentScroller = null; // Track which script is active

function loadScrollingScript() {

    const screenW = window.innerWidth;
    let scriptToLoad = screenW > 768 ? "scripts/regScroller.js" : "scripts/smallScroller.js";
    if (currentScroller === scriptToLoad) return; // Prevent reloading the same shit
    console.log(`🟢 Loaded: ${scriptToLoad}`);
    if (typeof window.handleScroll === "function") { // Remove previous listener if exists
        console.log(`🔧 Removing ${currentScroller}'s listener...`);
        window.removeEventListener("scroll", window.handleScroll);
    }

    document.querySelectorAll("script[src*='Scroller']").forEach(script => script.remove()); // Remove existing scripts before loading a new one

    let newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = scriptToLoad;

    newScript.onload = () => {  // Create and load the new script
        console.log(`✅ Loaded: ${scriptToLoad}`);
        if (typeof window.handleScroll === "function") {
            console.log("🎉 Reattaching scroll listener...");
            window.addEventListener("scroll", window.handleScroll);
        } else {
            console.error("❌ handleScroll still not found after loading script.");
        }
    };

    document.body.appendChild(newScript);
    currentScroller = scriptToLoad; // Update current script reference
}
// Load script on page load
loadScrollingScript();
// Detect screen resize and switch script dynamically
window.addEventListener("resize", loadScrollingScript);