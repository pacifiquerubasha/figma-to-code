import React from "react";

import { Text, Img, Button } from "components";

const Frame106Page = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[749px] w-[100%]">
        <header className="bg-black_900 border-[1px] border-solid border-white_A700_33 flex md:flex-col flex-row md:gap-[10px] h-[83px] md:h-[auto] items-center justify-between px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-row sm:gap-[40px] gap-[80px] items-center justify-start px-[10px] md:w-[100%] w-[auto]">
            <Text
              className="font-extrabold text-left text-purple_800 w-[auto]"
              as="h5"
              variant="h5"
            >
              CYRRUS
            </Text>
            <ul className="flex sm:flex-col flex-row gap-[10px] md:hidden items-center justify-between max-w-[645px] w-[100%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[10px] items-center justify-start px-[10px] py-[29.5px]">
                  <Img
                    src="images/img_volume.svg"
                    className="h-[24px] w-[24px]"
                    alt="volume"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[20px] text-gray_50 text-left w-[auto]"
                    href="javascript:"
                  >
                    Dashboard
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[10px] items-center justify-start px-[10px] py-[29.5px]">
                  <Img
                    src="images/img_calculator.svg"
                    className="h-[20px] w-[20px]"
                    alt="calculator"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[20px] text-gray_50 text-left w-[auto]"
                    href="javascript:"
                  >
                    Compare Countries
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] text-center">
                <Button
                  className="flex items-center justify-center min-w-[152px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_qrcode_purple_600.svg"
                      className="mr-[10px] text-center"
                      alt="qrcode"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-left text-purple_600">
                    Contact Us
                  </div>
                </Button>
              </li>
            </ul>
          </div>
          <Img
            src="images/img_settings.svg"
            className="h-[32px] w-[32px]"
            alt="settings"
          />
        </header>
      </div>
    </>
  );
};

export default Frame106Page;
