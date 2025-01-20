// Function to get and display browser information
function displayBrowserInfo() {
    const browserInfo = {
        browserName: navigator.userAgent,
        browserVersion: navigator.platform,
        osArchitecture: navigator.appVersion,
        windowResolution: `${window.outerWidth} x ${window.outerHeight}`,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth
    };

    const infoContainer = document.getElementById('browserInfo') as HTMLDivElement;
    if (infoContainer) {
        infoContainer.innerHTML = `
            <p><strong>Browser Name:</strong> ${browserInfo.browserName}</p>
            <p><strong>Browser Version:</strong> ${browserInfo.browserVersion}</p>
            <p><strong>Operating System Architecture:</strong> ${browserInfo.osArchitecture}</p>
            <p><strong>Window Resolution:</strong> ${browserInfo.windowResolution}</p>
            <p><strong>Inner Width:</strong> ${browserInfo.innerWidth}px</p>
            <p><strong>Inner Height:</strong> ${browserInfo.innerHeight}px</p>
            <p><strong>Color Depth:</strong> ${browserInfo.colorDepth} bits</p>
            <p><strong>Pixel Depth:</strong> ${browserInfo.pixelDepth} bits</p>
        `;
    }
}

// Adding event listener to call displayBrowserInfo on window load
window.addEventListener('load', displayBrowserInfo);
