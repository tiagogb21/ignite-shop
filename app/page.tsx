"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ProductCard } from "./components/ProductCard";

import "keen-slider/keen-slider.min.css";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 48,
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div
                ref={sliderRef}
                className="keen-slider relative min-h-[25rem] max-w-carousel ml-auto flex px-10"
            >
                {loaded &&
                    instanceRef.current &&
                    instanceRef.current.track.details && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() ||
                                    instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />
                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() ||
                                    instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides
                                        .length -
                                        1
                                }
                            />
                        </>
                    )}
                {loaded && instanceRef.current && (
                    <>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </>
                )}
            </div>
        </main>
    );
}

function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabled = props.disabled ? "hidden" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "left-1" : "left-auto right-1"
            } ${disabled} w-8 h-8 absolute top-1/2 -translate-y-1/2 fill-white cursor-pointer z-10`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}
