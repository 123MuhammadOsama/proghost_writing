"use client"
import React from 'react'

import { ArrowBigLeft, MousePointer, MousePointer2, MoveRight } from "lucide-react";

function TawktoButton({ height = "60px", width = "400px", paddingstart="4", margin="3",textsize="md",padding="3"  }) {


  const showAlert = () => {
    // Create alert box with custom styling
    const alertBox = document.createElement('div');
    alertBox.innerText = "Live Chat will be available soon!";
    Object.assign(alertBox.style, {
      backgroundColor: '#ffeb3b', // yellow background
      color: '#333',              // dark text
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '300px',
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '1000',
      fontFamily: 'Arial, sans-serif',
    });
    document.body.appendChild(alertBox);
    
     setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 2200);
  
  }
  return (
    <div className={`flex justify-center items-center -mt-4 ] `}>
      <button
        className={` bg-blue h-[48px] w-[150px] text-white rounded-md  flex flex-row  justify-center items-center p-3 px-3 m-3 gap-3 hover:text-white  hover:translate-y-0 hover:translate-x-0 group transition-all  `}
        onClick={() => {
          try {
            Tawk_API.toggle();
          } catch (error) {
            showAlert();
          }
        }}
      >
        <span>
            Live Chat
                  </span>
                  <span>
                    <MousePointer className="group-hover:translate-x-1 transition-all" />

                  </span>
    
      </button>
    </div>
  );
}

export default TawktoButton;











