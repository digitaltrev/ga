(function() {
  /**
   * Google Analytics 4 (GA4) Dynamic Injection Script
   * This script allows GA4 to be loaded via a single JS file link
   * bypassing the need for inline HTML <script> tags.
   */

  // 1. Define the Google Analytics Measurement ID
  // REPLACE 'G-00DV8Q426J' with the specific ID for this account
  var gaMeasurementId = 'G-00DV8Q426J';

  // 2. Load the external Google Analytics library (gtag.js)
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaMeasurementId;

  // Insert the script at the top of the <head> to ensure early tracking
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gaScript, firstScript);
  } else {
      document.head.appendChild(gaScript);
  }

  // 3. Initialize the Global Site Tag (gtag) command queue
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Set the JS timestamp
  gtag('js', new Date());

  // 4. Configure the tracker
  // "send_page_view: true" is default, but explicit here for clarity
  gtag('config', gaMeasurementId, { 'send_page_view': true });

})();
