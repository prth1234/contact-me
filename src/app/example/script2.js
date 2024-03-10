// script2.js

// This is script2.js
// Add your JavaScript code here

document.addEventListener('DOMContentLoaded', function () {
    // Add your script logic here
    // For example:
    console.log('Script 2 loaded!');
  
    // Add more script logic as needed
  
    // Additional scripts
    const script1 = document.createElement('script');
    script1.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5eb579740956a189377f7068';
    script1.type = 'text/javascript';
    script1.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=';
    script1.crossOrigin = 'anonymous';
  
    const script2 = document.createElement('script');
    script2.src = 'https://uploads-ssl.webflow.com/5eb579740956a189377f7068/js/webflow.f7c42bbf8.js';
    script2.type = 'text/javascript';
  
    // Check for IE
    const isIE = navigator.userAgent.match(/MSIE|Trident/);
    if (isIE) {
      const script3 = document.createElement('script');
      script3.src = '//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js';
      script3.type = 'text/javascript';
      document.body.appendChild(script3);
    }
  
    // Midnight.Js script
    const script4 = document.createElement('script');
    script4.src = 'https://uploads-ssl.webflow.com/5eb579740956a189377f7068/5f173026598cde81d94f1e8c_midnight.jquery.min.txt';
    script4.type = 'text/javascript';
  
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script4);
  });
  