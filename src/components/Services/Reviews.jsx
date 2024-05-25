import React from "react";
import Image from "next/image";
import Customers1 from "/public/services/customers1.webp";
import Customers2 from "/public/services/customers2.webp";

const Reviews = () => {
  return (
    <div className="relative px-5">
      <p className="mb-3 text-3xl font-semibold sm:mb-10 text-start sm:text-center">
        See what our customers are saying!
      </p>

      <div className="relative grid grid-cols-1 gap-y-5 sm:hidden">
        <span
          class="yelp-review"
          data-review-id="fz0OCixkLNFdUOiv-bx2vA"
          data-hostname="www.yelp.com"
        >
          Read{" "}
          <a
            href="https://www.yelp.com/user_details?userid=ftF0UAOs9LmmbVfKm7UCgA"
            rel="nofollow noopener"
          >
            Danny P.
          </a>
          {"'s "}
          <a
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland?hrid=fz0OCixkLNFdUOiv-bx2vA"
            rel="nofollow noopener"
          >
            review
          </a>{" "}
          of{" "}
          <a
            href="https://www.yelp.com/biz/pHYLIh3wLUriqiUg8DrvcA"
            rel="nofollow noopener"
          >
            Below Zero Shaved Ice
          </a>{" "}
          on{" "}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
          <script
            src="https://www.yelp.com/embed/widgets.js"
            type="text/javascript"
            async
          ></script>
        </span>
        <div className="relative w-full h-[200px]">
          <Image
            src={Customers1}
            alt="Below Zero Cup"
            priority={true}
            fill
            draggable={false}
            className="object-cover bg-secondary-background sm:object-contain rounded-xl "
          />
        </div>
        <span
          class="yelp-review"
          data-review-id="fz0OCixkLNFdUOiv-bx2vA"
          data-hostname="www.yelp.com"
        >
          Read{" "}
          <a
            href="https://www.yelp.com/user_details?userid=ftF0UAOs9LmmbVfKm7UCgA"
            rel="nofollow noopener"
          >
            Danny P.
          </a>
          {"'s "}
          <a
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland?hrid=fz0OCixkLNFdUOiv-bx2vA"
            rel="nofollow noopener"
          >
            review
          </a>{" "}
          of{" "}
          <a
            href="https://www.yelp.com/biz/pHYLIh3wLUriqiUg8DrvcA"
            rel="nofollow noopener"
          >
            Below Zero Shaved Ice
          </a>{" "}
          on{" "}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
          <script
            src="https://www.yelp.com/embed/widgets.js"
            type="text/javascript"
            async
          ></script>
        </span>
        <div className="relative w-full h-[200px]">
          <Image
            src={Customers2}
            alt="Below Zero Cup"
            priority={true}
            fill
            draggable={false}
            className="object-cover bg-secondary-background sm:object-contain rounded-xl "
          />
        </div>
      </div>

      {/* tablet */}
      <div className="grid grid-cols-1 gap-5 px-5 max-sm:hidden sm:grid-cols-2 xl:w-2/3 xl:m-auto">
        <div className="relative w-full sm:h-full">
          <Image
            src={Customers1}
            alt="Below Zero Cup"
            fill
            priority={true}
            draggable={false}
            className="object-cover bg-secondary-background rounded-xl "
          />
        </div>
        <span
          class="yelp-review"
          data-review-id="fz0OCixkLNFdUOiv-bx2vA"
          data-hostname="www.yelp.com"
        >
          Read{" "}
          <a
            href="https://www.yelp.com/user_details?userid=ftF0UAOs9LmmbVfKm7UCgA"
            rel="nofollow noopener"
          >
            Danny P.
          </a>
          {"'s "}
          <a
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland?hrid=fz0OCixkLNFdUOiv-bx2vA"
            rel="nofollow noopener"
          >
            review
          </a>{" "}
          of{" "}
          <a
            href="https://www.yelp.com/biz/pHYLIh3wLUriqiUg8DrvcA"
            rel="nofollow noopener"
          >
            Below Zero Shaved Ice
          </a>{" "}
          on{" "}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
          <script
            src="https://www.yelp.com/embed/widgets.js"
            type="text/javascript"
            async
          ></script>
        </span>
        <span
          class="yelp-review"
          data-review-id="fz0OCixkLNFdUOiv-bx2vA"
          data-hostname="www.yelp.com"
        >
          Read{" "}
          <a
            href="https://www.yelp.com/user_details?userid=ftF0UAOs9LmmbVfKm7UCgA"
            rel="nofollow noopener"
          >
            Danny P.
          </a>
          {"'s "}
          <a
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland?hrid=fz0OCixkLNFdUOiv-bx2vA"
            rel="nofollow noopener"
          >
            review
          </a>{" "}
          of{" "}
          <a
            href="https://www.yelp.com/biz/pHYLIh3wLUriqiUg8DrvcA"
            rel="nofollow noopener"
          >
            Below Zero Shaved Ice
          </a>{" "}
          on{" "}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
          <script
            src="https://www.yelp.com/embed/widgets.js"
            type="text/javascript"
            async
          ></script>
        </span>
        <div className="relative w-full h-full">
          <Image
            src={Customers2}
            alt="Below Zero Cup"
            priority={true}
            fill
            draggable={false}
            className="object-cover bg-secondary-background rounded-xl"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src={Customers2}
            alt="Below Zero Catering"
            priority={true}
            fill
            draggable={false}
            className="object-cover bg-secondary-background rounded-xl"
          />
        </div>
        <span
          class="yelp-review"
          data-review-id="fz0OCixkLNFdUOiv-bx2vA"
          data-hostname="www.yelp.com"
        >
          Read{" "}
          <a
            href="https://www.yelp.com/user_details?userid=ftF0UAOs9LmmbVfKm7UCgA"
            rel="nofollow noopener"
          >
            Danny P.
          </a>
          {"'s "}
          <a
            href="https://www.yelp.com/biz/below-zero-shaved-ice-upland?hrid=fz0OCixkLNFdUOiv-bx2vA"
            rel="nofollow noopener"
          >
            review
          </a>{" "}
          of{" "}
          <a
            href="https://www.yelp.com/biz/pHYLIh3wLUriqiUg8DrvcA"
            rel="nofollow noopener"
          >
            Below Zero Shaved Ice
          </a>{" "}
          on{" "}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
          <script
            src="https://www.yelp.com/embed/widgets.js"
            type="text/javascript"
            async
          ></script>
        </span>
      </div>
    </div>
  );
};

export default Reviews;
