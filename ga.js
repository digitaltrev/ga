(function() {
  // 1. Manually create the script tag that Google usually provides
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-00DV8Q426J';
  
  // 2. Inject it into the page
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(gaScript, firstScript);

  // 3. Initialize the dataLayer (The part inside the second <script> tag)
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // 4. Configure with your specific ID
  gtag('config', 'G-00DV8Q426J');
})();
