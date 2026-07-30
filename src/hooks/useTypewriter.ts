import { useEffect, useState } from "react";

interface UseTypewriterOptions {
    words: string[];
    typingSpeedMs?: number;
    deletingSpeedMs?: number;
    pauseMs?: number;
}

export function useTypewriter({
    words,
    typingSpeedMs = 90,
    deletingSpeedMs = 45,
    pauseMs = 1800,
}: UseTypewriterOptions) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        if (!isDeleting && text === currentWord) {
            const pause = setTimeout(() => setIsDeleting(true), pauseMs);
            return () => clearTimeout(pause);
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
            return;
        }

        const step = setTimeout(
            () => {
                setText((prev) =>
                    isDeleting
                        ? currentWord.slice(0, prev.length - 1)
                        : currentWord.slice(0, prev.length + 1)
                );
            },
            isDeleting ? deletingSpeedMs : typingSpeedMs
        );

        return () => clearTimeout(step);
    }, [text, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

    return text;
}