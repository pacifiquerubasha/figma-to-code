import React from "react";

import { Text, Img, Button, Line, List } from "components";

const Frame102Page = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[246px] w-[100%]">
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
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1025px] mx-[auto] md:px-[20px] w-[100%]">
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
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[77%]">
              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="not-italic text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Compare cities
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[3px] mt-[4px] not-italic text-gray_50 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Select cities you want to compare
                  </Text>
                </div>
                <Line className="bg-white_A700_33 h-[1px] w-[100%]" />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[3px] mt-[15px] w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[34px] items-start justify-between sm:w-[100%] w-[70%]">
                  <Img
                    src="images/img_arrow1.svg"
                    className="h-[3px] sm:mt-[0] mt-[17px] w-[auto]"
                    alt="ArrowOne"
                  />
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-start justify-start md:w-[100%] w-[72%]">
                      <Text
                        className="font-lato font-normal not-italic text-gray_50 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Kinshasa
                      </Text>
                      <Text
                        className="font-inter font-normal mb-[2px] ml-[41px] not-italic text-gray_50 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        -
                      </Text>
                      <Text
                        className="font-lato font-normal ml-[32px] not-italic text-gray_50 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Nairobi
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_7f"
                      variant="body3"
                    >
                      The prices listed in the below table are in USD for ease
                      of comparison.
                      <br />
                      Products that do not appear in the charts below are not
                      common, hence can be <br />
                      checked from the Search city page
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[24px] sm:mt-[0] mt-[3px] w-[24px]"
                  alt="overflowmenu"
                />
              </div>
              <List
                className="flex-col gap-[18px] grid items-center md:ml-[0] ml-[33px] mt-[32px] w-[94%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-lato items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      CITY 1
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    CITY 2
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between max-w-[734px] p-[10px] rounded-[5px] w-[100%]">
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      PRODUCT
                    </Text>
                  </div>
                  <div className="flex font-inter items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                  </div>
                  <Text
                    className="font-lato font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    400
                  </Text>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[53px] md:w-[100%] w-[86%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body1"
                >
                  Average price per category per city
                </Text>
                <Line className="bg-gray_50 h-[1px] mt-[10px] w-[22%]" />
                <div className="font-inter h-[200px] md:h-[211px] mt-[41px] relative w-[100%]">
                  <div className="md:h-[170px] h-[193px] m-[auto] md:w-[100%] w-[96%]">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[94%]">
                      <Line className="bg-gray_50 h-[1px] w-[100%]" />
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[87%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[2%]">
                          <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                          <Text
                            className="not-italic text-center text-gray_50 w-[auto]"
                            variant="body4"
                          >
                            0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[1%]">
                          <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[3px] w-[25%]"></div>
                          <Text
                            className="not-italic text-center text-gray_50 w-[auto]"
                            variant="body4"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[2%]">
                          <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                          <Text
                            className="not-italic text-center text-gray_50 w-[auto]"
                            variant="body4"
                          >
                            2
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row md:gap-[40px] gap-[77px] grid grid-cols-2 w-[18%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                            <Text
                              className="not-italic text-center text-gray_50 w-[auto]"
                              variant="body4"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                            <Text
                              className="not-italic text-center text-gray_50 w-[auto]"
                              variant="body4"
                            >
                              4
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[2%]">
                          <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                          <Text
                            className="not-italic text-center text-gray_50 w-[auto]"
                            variant="body4"
                          >
                            5
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[2%]">
                          <div className="bg-gray_50 h-[6px] md:ml-[0] ml-[4px] w-[13%]"></div>
                          <Text
                            className="not-italic text-center text-gray_50 w-[auto]"
                            variant="body4"
                          >
                            6
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row items-center justify-evenly left-[0] top-[0] w-[7%]">
                      <div className="flex flex-col gap-[20px] items-end justify-start w-[100%]">
                        <div className="flex flex-row gap-[5px] items-start justify-evenly w-[100%]">
                          <Text
                            className="not-italic text-gray_50 text-right w-[auto]"
                            variant="body4"
                          >
                            1000
                          </Text>
                          <div className="bg-gray_50 h-[1px] mb-[10px] mt-[3px] w-[16%]"></div>
                        </div>
                        <div className="flex flex-col gap-[25px] items-start justify-start md:w-[100%] w-[85%]">
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <Text
                              className="not-italic text-gray_50 text-right w-[auto]"
                              variant="body4"
                            >
                              750
                            </Text>
                            <div className="bg-gray_50 h-[1px] my-[6px] w-[19%]"></div>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-evenly w-[100%]">
                            <Text
                              className="not-italic text-gray_50 text-right w-[auto]"
                              variant="body4"
                            >
                              500
                            </Text>
                            <div className="bg-gray_50 h-[1px] my-[6px] w-[19%]"></div>
                          </div>
                          <div className="flex flex-row gap-[5px] items-center justify-evenly w-[100%]">
                            <Text
                              className="not-italic text-gray_50 text-right w-[auto]"
                              variant="body4"
                            >
                              250
                            </Text>
                            <div className="bg-gray_50 h-[1px] my-[6px] w-[19%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] w-[58%]">
                            <Text
                              className="not-italic text-gray_50 text-right w-[auto]"
                              variant="body4"
                            >
                              0
                            </Text>
                            <div className="bg-gray_50 h-[1px] ml-[5px] my-[6px] w-[32%]"></div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_50 h-[160px] mb-[7px] mt-[3px] w-[1px]" />
                    </div>
                    <Img
                      src="images/img_group_gray_50.svg"
                      className="absolute h-[128px] inset-[0] justify-center m-[auto] w-[auto]"
                      alt="Group"
                    />
                  </div>
                  <Img
                    src="images/img_group_purple_800.svg"
                    className="absolute h-[129px] inset-y-[0] my-[auto] right-[2%] w-[auto]"
                    alt="Group One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame102Page;
