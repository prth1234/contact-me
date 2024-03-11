





// // components/Footerr.tsx
// import React from "react";

// export const Footerr: React.FC = () => {
//   return (
//     <>
//       <footer className="footer">
//         <div data-midnight="white" className="footer-break">
//           {/* <div className="footer-break-image-div">
//             <img src="" alt="" className="image-scale imagezoom" />
//           </div> */}
//           <a
//             data-w-id="03a02450-cbe2-56a1-4a5f-ff016dc376af"
//             href="/about-us"
//             className="footer-cta footer-cta-white w-inline-block"
//           >
//             <div className="footer-cta-wrapper">
//               <h1 className="h2-title h2-title-prefooter">About Spline</h1>
//               <h1 className="h2-title h2-prefooter-arrow">→</h1>
//             </div>
//             <div className="footer-cta-progress">
//               <div className="footer-cta-bar footer-cta-bar-white"></div>
//             </div>
//           </a>
//         </div>
//         <div
//           data-w-id="421d0263-acc2-e54f-01e9-7f64df626ca0"
//           className="footer-contact"
//         >
//           <div className="footer-sticky">
//             <div className="footer-grid">
//               <div className="footer-grid-column">
//                 <h6 className="footer-title">Address</h6>
//                 <h6 className="footer-title footer-text">
//                   #15–7015 Tranmere Dr <br /> Mississauga, ON L5S 1T7
//                 </h6>
//               </div>
//               <div className="footer-grid-column">
//                 <a
//                   href="https://www.instagram.com/spline_mep/"
//                   target="_blank"
//                   className="footer-title"
//                 >
//                   Instagram
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/company/splinegroup/"
//                   target="_blank"
//                   className="footer-title"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//               <div className="footer-grid-column">
//                 <a href="/career" className="footer-title">
//                   Careers
//                 </a>
//               </div>
//             </div>
//             <div className="tagline-container">
//               <h6 className="footer-title">Got a project in mind?</h6>
//             </div>
//             <a
//               data-w-id="8eb39225-9629-2a12-f7e4-7b89da9f89ca"
//               href="mailto:info@splinegroup.ca?subject=Thanks%20for%20getting%20in%20touch!"
//               className="footer-cta w-inline-block"
//             >
//               <div className="footer-cta-wrapper">
//                 <h1 className="h2-title h2-title-footer">Let's talk</h1>
//                 <h1 className="h2-title h2-footer-arrow">→</h1>
//               </div>
//               <div className="footer-cta-progress">
//                 <div className="footer-cta-bar"></div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// // export default Footerr;

// components/Footerr.tsx
import React from "react";
// import "./Footerr.css"; // Import the CSS file
import "./style2.css"
import "./script2.js"
export const Footerr: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div data-midnight="white" className="footer-break">
          {/* <div className="footer-break-image-div">
            <img src="
            " alt="" className="image-scale imagezoom" />
          </div> */}
           <div className="footer-grid-column">
                <a
                  href="https://www.instagram.com/spline_mep/"
                  target="_blank"
                  className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-3xl"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/splinegroup/"
                  target="_blank"
                  className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-3xl"
                >
                  LinkedIn
                </a>
              </div>
              <div className="footer-grid-column">
                <a href="/career" className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-3xl">
                  Careers
                </a>
              </div>
          <a
            data-w-id="03a02450-cbe2-56a1-4a5f-ff016dc376af"
            href="/about-us"
            className="footer-cta footer-cta-white w-inline-block"
          >
            <div className="footer-cta-wrapper">
              <h1 className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl ">About Me</h1>
              <h1 className="h2-title h2-prefooter-arrow ">→</h1>
            </div>
            <div className="footer-cta-progress">
              <div className="footer-cta-bar footer-cta-bar-white"></div>
            </div>
          </a>
        </div>
        <div
          data-w-id="421d0263-acc2-e54f-01e9-7f64df626ca0"
          className="footer-contact"
        >
          <div className="footer-sticky">
            <div className="footer-grid">
              <div className="footer-grid-column">
                <h6 className="inter-var text-center text-2xl font-bold text-black md:text-4xl lg:text-3xl">Address</h6>
                <h6 className="inter-var text-center text-2xl font-bold text-black md:text-4xl lg:text-3xl">
                  Harlur Main Rd, Bangalore, Karnataka<br/>Email: dearparthsingh@gmail.com<br/>Ph No. +91 920 576 7228

                </h6>
              </div>
             
            </div>
            <div className="tagline-container">
              <h6 className="footer-title black-text">🙂</h6>
            </div>
            <a
              data-w-id="8eb39225-9629-2a12-f7e4-7b89da9f89ca"
              href="mailto:info@splinegroup.ca?subject=Thanks%20for%20getting%20in%20touch!"
              className="footer-cta w-inline-block"
            >
              <div className="footer-cta-wrapper">
                <h1 className="inter-var text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl">My Portfolio</h1>
                <h1 className="h2-title h2-footer-arrow black-text">→</h1>
              </div>
              <div className="footer-cta-progress">
                <div className="footer-cta-bar"></div>
              </div>
            </a>
          </div>
        </div>
        

       
      </footer>
    </>
  );
};

// export default Footerr;
