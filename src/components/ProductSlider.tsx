import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import {
  Thumbs,
  PrevButton,
  NextButton
} from './SliderThumbsBtns';

export default function ProductSlider({ imgsUrl }: { imgsUrl: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <div className="rounded-2xl overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {imgsUrl.map((img, i) => (
            <div className="flex-[0_0_100%]" key={i}>
              <img
                className="embla__slide__img"
                src={img}
                alt={`Image slide ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div> */}
      </div>

      <div className="flex gap-4 mt-8">
        {scrollSnaps.map((_, i) => (
          <Thumbs
            key={i}
            thumbUrl={imgsUrl[i]}
            onClick={() => scrollTo(i)}
            className={`rounded-xl border-[3px] overflow-hidden transition hover:opacity-60 ${i === selectedIndex ? 'border-[hsl(26,100%,55%)] opacity-60' : 'border-transparent'}`}
          />
        ))}
      </div>
    </>
  )
}