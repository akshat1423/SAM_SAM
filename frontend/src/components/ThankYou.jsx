import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{
      backgroundColor: '#2d2c31',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}
    >
      <h1 style={{color: 'white', marginBottom: 0, paddingBottom: 0}}>Thank you for registering!</h1>
      <p style={{color: 'white', paddingBottom: '2rem'}}>Your information has been successfully submitted.</p>
      <Box>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowBackIosIcon />}
          component={Link} to="/"
          style={{ backgroundColor: '#0d6dcf' }}
        >
          Back to Home
        </Button>
      </Box>
    </div>
  )
}

export default ThankYou


// import React, { useEffect } from "react";
// import Button from "@mui/material/Button";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { Link } from "react-router-dom";
// import "./ThankYou.css";
// import gsap from 'gsap';

// const ThankYou = () => {

//   useEffect(() => {
//     const h1 = document.querySelector(".thankYouHeading");
//     if (h1) {
//       const h1Text = h1.textContent;
//       const splittedText = h1Text.split("");
//       const half = Math.ceil(splittedText.length / 2);
//       console.log(splittedText.length)
//       let clutter = "";

//       splittedText.forEach((e, ind) => {
//         if (ind < half) {
//           clutter += `<span class="a">${e}</span>`;
//         } else {
//           clutter += `<span class="b">${e}</span>`;
//         }
//       });

//       h1.innerHTML = clutter;

//       gsap.from(".a", {
//         // x: 80,
//         duration: 0.8,
//         delay: 0.5,
//         stagger: 0.1,
//         opacity: 0,
//         color: "#0d6dcf",
//         borderBottom: "1px solid #0d6dcf",
//       })
//       gsap.from(".b", {
//         // x: 80,
//         duration: 0.8,
//         delay: 0.5,
//         stagger: -0.1,
//         opacity: 0,
//         color: "#0d6dcf",
//         borderBottom: "1px solid #0d6dcf",
//       })
//     }
//   }, []); // Empty dependency array ensures this runs once after the initial render

//   const Blocks = () => {
//     useEffect(() => {
//       const blockContainer = document.getElementById("blocks");
//       const blockSize = 50;
//       const screenWidth = window.innerWidth;
//       const screenHeight = window.innerHeight;
//       const numCols = Math.ceil(screenWidth / blockSize);
//       const numRows = Math.ceil(screenHeight / blockSize);
//       const numBlocks = numCols * numRows;
  
//       function createBlocks() {
//         for (let i = 0; i < numBlocks; i++) {
//           const block = document.createElement("div");
//           block.classList.add("block");
//           block.dataset.index = i;
//           block.addEventListener("mousemove", highlightRandomNeighbors);
//           blockContainer.appendChild(block);
//         }
//       }
  
//       function highlightRandomNeighbors() {
//         const index = parseInt(this.dataset.index);
//         const neighbors = [
//           index - 1,
//           index + 1,
//           index - numCols,
//           index + numCols,
//           // these are for the diagonal blocks
//           // index - numCols - 1,
//           // index - numCols + 1,
//           // index + numCols - 1,
//           // index + numCols - 1,
//         ].filter(
//           (i) =>
//             i >= 0 &&
//             i < numBlocks &&
//             Math.abs((i % numCols) - (index % numCols)) <= 1
//         );
  
//         this.classList.add("highlight");
//         setTimeout(() => {
//           this.classList.remove("highlight");
//         }, 500);
//         shuffleArray(neighbors)
//           .slice(0, 1)
//           .forEach((nIndex) => {
//             const neighbor = blockContainer.children[nIndex];
//             if (neighbor) {
//               neighbor.classList.add("highlight");
//               setTimeout(() => {
//                 neighbor.classList.remove("highlight");
//               }, 500);
//             }
//           });
//       }
  
//       function shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//           const j = Math.floor(Math.random() * (i + 1));
//           [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//       }
  
//       createBlocks();
//     }, []);
  
//     return <div id="blocks"></div>;
//   };

//   return (
//     <>
//       <div className="blocks-container">
//         <Blocks />
//       </div>
//       <div className="thankYouContent">
//         <h1 className="thankYouHeading">Thank you for registering!</h1>
//         <p className="thankYouSubHeading">
//           Your information has been successfully submitted.
//         </p>
//         <Button
//           variant="contained"
//           size="large"
//           endIcon={<ArrowBackIosIcon />}
//           component={Link}
//           to="/"
//           className="button"
//           style={{ backgroundColor: "#0d6dcf" }}
//         >
//           Back to Home
//         </Button>
//       </div>
//     </>
//   );
// };

// export default ThankYou;
