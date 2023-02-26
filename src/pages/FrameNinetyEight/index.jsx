import React from "react";

import { Text, Img, Button, Line, List } from "components";

const FrameNinetyEightPage = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[14px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
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
          <Text
            className="md:ml-[0] ml-[280px] mt-[45px] not-italic text-left text-white_A700 w-[auto]"
            as="h4"
            variant="h4"
          >
            Search city
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1032px] mt-[4px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="border-[1px] border-solid border-white_A700_33 flex flex-col gap-[20px] h-[166px] md:h-[auto] items-start justify-center md:mt-[0] mt-[15px] p-[10px] shadow-bs w-[auto]">
              <Text
                className="font-normal not-italic text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Search country
              </Text>
              <Text
                className="font-normal not-italic text-left text-purple_600 w-[auto]"
                variant="body1"
              >
                Search city
              </Text>
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body1"
              >
                Compare cities
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col font-inter justify-start md:w-[100%] w-[77%]">
              <Text
                className="font-normal md:ml-[0] ml-[3px] not-italic text-gray_50 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Select a city you want to find more details about{" "}
              </Text>
              <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-start mt-[25px] md:w-[100%] w-[52%]">
                <Img
                  src="images/img_arrow1.svg"
                  className="h-[3px] w-[auto]"
                  alt="ArrowOne"
                />
                <div className="flex items-start justify-start pb-[4px] pr-[4px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_50 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Kinshasa
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-lato gap-[45px] items-center justify-start md:ml-[0] ml-[47px] mt-[28px] md:w-[100%] w-[67%]">
                <div className="flex items-center justify-start sm:w-[100%] w-[46%]">
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] w-[240px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      COUNTRY NAME
                    </Text>
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      variant="body1"
                    >
                      Democratic Republic of Congo
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:w-[100%] w-[46%]">
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] w-[240px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      CURRENCY
                    </Text>
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      variant="body1"
                    >
                      CDF
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[8px] items-start justify-start md:ml-[0] ml-[56px] mt-[26px] md:w-[100%] w-[22%]">
                <Text
                  className="font-black text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  PRICE OF GOODS
                </Text>
                <Line className="bg-gray_50 h-[1px] w-[64%]" />
              </div>
              <div className="flex flex-row font-lato gap-[70px] items-center justify-start md:ml-[0] ml-[54px] mt-[19px] md:w-[100%] w-[41%]">
                <div className="bg-purple_800 border-[1px] border-solid border-white_A700_33 flex flex-col gap-[10px] items-center justify-center p-[10px] rounded-[5px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Total categories
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    10
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-col gap-[10px] items-center justify-center p-[10px] rounded-[5px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Total products
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    50
                  </Text>
                </div>
              </div>
              <List
                className="flex-col font-lato gap-[5px] grid md:ml-[0] ml-[54px] mt-[43px] w-[94%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      CATEGORY
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    PRICE
                  </Text>
                </div>
                <Line className="self-center h-[1px] bg-white_A700_33 w-[100%]" />
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Pair of jeans
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[104px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    2000
                  </Text>
                </div>
                <Line className="self-center h-[1px] bg-white_A700_33 w-[100%]" />
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Pair of jeans
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[104px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    2000
                  </Text>
                </div>
                <Line className="self-center h-[1px] bg-white_A700_33 w-[100%]" />
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Pair of jeans
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[104px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    2000
                  </Text>
                </div>
                <Line className="self-center h-[1px] bg-white_A700_33 w-[100%]" />
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Pair of jeans
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[104px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    2000
                  </Text>
                </div>
                <Line className="self-center h-[1px] bg-white_A700_33 w-[100%]" />
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Pair of jeans
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[104px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    2000
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameNinetyEightPage;
