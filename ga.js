(function() {
  console.log('🔹 Custom Script: Starting initialization...');

  // 1. Load the Google Analytics Library
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-00DV8Q426J';

  // Add listeners to see if the file actually downloads
  gaScript.onload = function() {
      console.log('✅ Google Analytics: External library loaded successfully.');
  };
  gaScript.onerror = function() {
      console.error('❌ Google Analytics: External library failed to load. (Ad blocker?)');
  };
  
  // 2. Inject it into the page
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript) {
      firstScript.parentNode.insertBefore(gaScript, firstScript);
  } else {
      document.head.appendChild(gaScript);
  }

  // 3. Configure Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-00DV8Q426J');
  console.log('🔹 Custom Script: Config command sent to Google.');
})();
