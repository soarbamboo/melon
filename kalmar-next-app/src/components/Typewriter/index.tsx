import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
}

function Typewriter({ text }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const typingDelay = 100; // 打字速度，调整为适当的值
      const deleteDelay = 50; // 删除速度，调整为适当的值
      const pauseDelay = 2000; // 删除完成后等待两秒再开始显示
  
      const updateText = () => {
        if (!isDeleting) {
          // 打字效果
          if (currentIndex < text.length) {
            setDisplayText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(currentIndex + 1);
          } else {
            // 打字完成后，设置删除状态并等待两秒
            setIsDeleting(true);
            setTimeout(() => {
              setIsDeleting(false);
              setCurrentIndex(0);
            }, pauseDelay);
          }
        } else {
          // 删除效果
          if (displayText.length > 0) {
            setDisplayText(prevText => prevText.slice(0, -1));
          } else {
            // 删除完成后，等待两秒后重新开始打字
            setIsDeleting(false);
            setTimeout(() => {
              setCurrentIndex(0);
            }, pauseDelay);
          }
        }
      };
  
      const timeout = isDeleting ? deleteDelay : typingDelay;
      const timeoutId = setTimeout(updateText, timeout);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [text, currentIndex, isDeleting, displayText]);
  
    return (
      <div className="typewriter">
        {displayText}
        {showCursor && <span className="cursor">|</span>}
      </div>
    );
  }

export default Typewriter