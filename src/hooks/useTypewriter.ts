import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typingSpeed = 100, pause = 2000) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
}