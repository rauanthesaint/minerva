import { useEffect, useState } from "react";

export function useWindowsWidth() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

import { useRef } from "react";

interface SwipeOptions {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
    threshold?: number;
}

interface SwipeHandlers {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
    onTouchCancel: () => void;
}

export function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    threshold = 50,
}: SwipeOptions): SwipeHandlers {
    const startX = useRef<number | null>(null);
    const startY = useRef<number | null>(null);

    const reset = () => {
        startX.current = null;
        startY.current = null;
    };

    return {
        onTouchStart: (e: React.TouchEvent) => {
            startX.current = e.touches[0].clientX;
            startY.current = e.touches[0].clientY;
        },
        onTouchEnd: (e: React.TouchEvent) => {
            if (startX.current === null || startY.current === null) return;

            const diffX = startX.current - e.changedTouches[0].clientX;
            const diffY = startY.current - e.changedTouches[0].clientY;

            const isHorizontal = Math.abs(diffX) > Math.abs(diffY);

            if (isHorizontal) {
                if (Math.abs(diffX) < threshold) return reset();
                diffX > 0 ? onSwipeLeft?.() : onSwipeRight?.();
            } else {
                if (Math.abs(diffY) < threshold) return reset();
                diffY > 0 ? onSwipeUp?.() : onSwipeDown?.();
            }

            reset();
        },
        onTouchCancel: reset,
    };
}
