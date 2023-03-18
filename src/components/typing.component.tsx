import { useState, useEffect } from "react";

interface TypingProps {
  text: string;
  delay?: number;
}

const Typing = ({ text, delay = 50 }: TypingProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === undefined || prevIndex === text.length - 1
          ? undefined
          : prevIndex + 1
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, delay, text]);

  useEffect(() => {
    if (currentIndex !== undefined) {
      setCurrentText((prevText: string) => {
        const currentChar = text[currentIndex];
        return currentChar !== undefined
          ? `${prevText}${currentChar}`
          : prevText;
      });
    }
  }, [currentIndex, text]);

  useEffect(() => {
    console.log(currentText);
  }, [currentText]);

  return <span>{currentText}</span>;
};

export default Typing;
