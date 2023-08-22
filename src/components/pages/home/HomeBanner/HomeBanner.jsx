import Image from "next/image";
import React from "react";
import bannerImg from "@/assests/banner-sub.png";
import ButtonPrimary from "../../../singleComponents/ButtonPrimary/ButtonPrimary";
import Link from "next/link";
import sideImg1 from "@/assests/bannerside/1.png";
import sideImg2 from "@/assests/bannerside/2.png";
import sideImg3 from "@/assests/bannerside/3.png";
import sideImg4 from "@/assests/bannerside/4.png";
import smallBannerImg from "@/assests/data-service.png";

const HomeBanner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #4b43c5, #385bd5, #2270e2, #0c84ec, #1397f3)",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="w-full h-full pt-28 max-container grid lg:grid-cols-2 gap-4">
        <div className=" px-3 pb-14 flex flex-col justify-center items-center sm:items-start text-center sm:text-start space-y-3  md:space-y-7">
          <h1 className="text-2xl md:text-7xl font-bold text-white pr-5 ">
            Analysis and Manage Your Business More Easy and Safely
          </h1>
          <p className="text-sm md:text-base font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            nesciunt tempora qui hic explicabo vitae a aliquam laboriosam
            suscipit beatae. Assumenda nesciunt tempora qui hic explicabo vitae
            a aliquam laboriosam suscipit beatae.
          </p>
          <div className="flex gap-5 items-center">
            <Link href="/about">
              <ButtonPrimary bgColor="bg-white text-primary">
                About Us
              </ButtonPrimary>
            </Link>
            <Link href="/contract">
              <ButtonPrimary>Contract Us</ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className=" h-full w-full z-50">
          <div className="z-50 w-full h-full flex items-center justify-center 2xl:hidden">
            <Image
              src={smallBannerImg}
              alt="smallBannerImg"
              fill={false}
              className="z-50"
            ></Image>
          </div>
          <div className="relative h-full w-full z-10 animate-up-down hidden 2xl:inline-block">
            <Image
              src={sideImg1}
              fill={false}
              alt="sideimg1"
              className="absolute -right-24 top-48"
            ></Image>
            <Image
              src={sideImg2}
              fill={false}
              alt="sideimg2"
              className="absolute bottom-24 left-20"
            ></Image>
            <Image
              src={sideImg3}
              fill={false}
              alt="sideimg3"
              className="absolute left-6 top-48"
            ></Image>
            <Image
              src={sideImg4}
              fill={false}
              alt="sideimg4"
              className="absolute bottom-16 right-28"
            ></Image>
          </div>
        </div>
      </div>
      <Image
        src={bannerImg}
        alt="img"
        fill={false}
        className="h-[128px] sm:h-[203px] lg:h-[550px] w-full  absolute -bottom-1"
      ></Image>
    </div>
  );
};

export default HomeBanner;
