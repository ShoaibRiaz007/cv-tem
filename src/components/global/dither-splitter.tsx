import Dither from "../ui/dither";
import MaxWidthWrapper from "../ui/max-width-wrapper";

const DitherSplitter = () => {
  return (
    <MaxWidthWrapper parentBorder="border-b">
      <div className="h-[55px] w-full">
        <Dither
          waveSpeed={0.5}
          waveAmplitude={0.6}
          colorA="#0a0515"
          colorB="#a855f7"
          disableAnimation={false}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default DitherSplitter;
