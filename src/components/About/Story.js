import React from "react";
import Image from "next/image";
import StoryImage from "/public/about/story.png";

const Story = () => {
  return (
    <div className="flex flex-col-reverse items-start p-5 justify-evenly xl:justify-center gap-y-10 sm:flex-row gap-x-16 xl:gap-x-28 sm:gap-x-10">
      <div className="w-full sm:w-1/3">
        <p className="mb-3 text-3xl font-semibold">OUR STORY</p>
        <p className="sm:text-sm xl:text-base">
          Our Shaved Ice story begun upon visiting Hawaii. We fell in love not
          only with the beauty of {"it's"} beaches and hospitable people, but
          with this refreshing, fluffy and mouth melting deliciousness that
          every one was talking about.
          <br />
          <br />
          It was love at the first sight! We said to ourselves how come we{" "}
          {"don't"} see much of it in the states. Of course, you {"can't"} find
          what you are not loo for. So we started on a quest to find the right
          product with the same quality but there {"wasn't"} anywhere to be
          found in our surroundings at the time. So we decided to put ourselves
          in {"God's"} hand an open this Humble Mom & Pops Store.
          <br />
          <br />
          So here we are after 12 years serving our community with a hand made
          shaved ice that melts in your mouth as you dig into an ocean of the
          flavor of your choice.
          <br />
          <br />
          Our mission at Below Zero Shaved Ice, is to strive to provide not only
          the best product, but an excellent customer service. We stand for
          quality, values and the charm that only a family business can provide.
        </p>
      </div>
      <div className="w-full h-[475px] sm:w-[400px] sm:h-[500px] bg-secondary-background relative">
        <Image
          src={StoryImage}
          alt="Below Zero store front"
          priority={true}
          fill
          draggable={false}
          className="object-fill rounded-xl"
        />
      </div>
    </div>
  );
};

export default Story;
