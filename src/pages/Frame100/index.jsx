import React from "react";

import { Text, Img, Button, Line, Input } from "components";

const Frame100Page = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[368px] w-[100%]">
        <div className="flex flex-col gap-[45px] justify-start w-[100%]">
          <header className="flex flex-col items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-black_900 border-[1px] border-solid border-white_A700_33 flex md:flex-col flex-row gap-[10px] h-[83px] md:h-[auto] items-center justify-between max-w-[1280px] px-[20px] w-[100%]">
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
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button
                      className="flex items-center justify-center min-w-[220px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_trophy.svg"
                          className="mr-[10px] text-center"
                          alt="trophy"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-left text-purple_600">
                        Compare Countries
                      </div>
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <div className="flex flex-row gap-[10px] items-center justify-start px-[10px] py-[29.5px]">
                      <Img
                        src="images/img_pixelarticonscontactplus.svg"
                        className="h-[24px] w-[24px]"
                        alt="pixelarticonscontactplus"
                      />
                      <a
                        className="cursor-pointer font-normal not-italic text-[20px] text-gray_50 text-left w-[auto]"
                        href="javascript:"
                      >
                        Contact Us
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <Img
                src="images/img_settings.svg"
                className="h-[32px] w-[32px]"
                alt="settings"
              />
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1022px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="border-[1px] border-solid border-white_A700_33 flex flex-col gap-[20px] h-[166px] md:h-[auto] items-start justify-center md:mt-[0] mt-[53px] p-[10px] shadow-bs w-[auto]">
              <Text
                className="font-normal not-italic text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Search country
              </Text>
              <Text
                className="font-normal not-italic text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Search city
              </Text>
              <Text
                className="font-normal not-italic text-left text-purple_600 w-[auto]"
                variant="body1"
              >
                Compare cities
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col font-inter items-start justify-start md:w-[100%] w-[77%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-lato not-italic text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Compare cities
                </Text>
                <Text
                  className="font-inter font-normal md:ml-[0] ml-[3px] mt-[4px] not-italic text-gray_50 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Select cities you want to compare
                </Text>
                <Line className="bg-white_A700_33 h-[1px] mt-[9px] w-[100%]" />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] ml-[3px] mt-[40px] md:w-[100%] w-[62%]">
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[10px] placeholder:text-gray_50_7f text-gray_50_7f text-left w-[100%]"
                  wrapClassName="sm:w-[100%] w-[174px]"
                  name="FrameForty"
                  placeholder="First city"
                ></Input>
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[10px] placeholder:text-gray_50_7f text-gray_50_7f text-left w-[100%]"
                  wrapClassName="ml-[32px] sm:ml-[0] sm:w-[100%] w-[174px]"
                  name="FrameNinetyEight"
                  placeholder="Second city"
                ></Input>
                <Text
                  className="bg-purple_600 border-[1px] border-solid border-white_A700_33 font-extrabold justify-center sm:ml-[0] ml-[44px] p-[5px] rounded-[5px] text-left text-white_A700 w-[auto]"
                  variant="body5"
                >
                  Compare
                </Text>
              </div>
              <Img
                src="images/img_refresh.svg"
                className="h-[97px] md:ml-[0] ml-[59px] mt-[116px] w-[97px]"
                alt="refresh"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame100Page;
