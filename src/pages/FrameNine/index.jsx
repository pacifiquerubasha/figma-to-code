import React from "react";

import { Text, Button, Img, List, Line, Input, SelectBox } from "components";

const FrameNinePage = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[43px] w-[100%]">
        <div className="flex flex-col gap-[43px] items-center justify-start w-[100%]">
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
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="flex items-center justify-center min-w-[150px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_sort.svg"
                        className="mr-[10px] text-center"
                        alt="sort"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[20px] text-left text-purple_600">
                      Dashboard
                    </div>
                  </Button>
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
          </header>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1231px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[65%]">
              <div className="flex flex-col gap-[49px] items-start justify-start md:ml-[0] ml-[38px] md:w-[100%] w-[96%]">
                <List
                  className="sm:flex-col flex-row gap-[44px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="border-[1px] border-gray_50 border-solid flex flex-col gap-[10px] items-center justify-start sm:ml-[0] px-[10px] py-[15px] rounded-[10px] shadow-bs1 w-[223px]">
                    <Text
                      className="font-extrabold text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      100
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Total countries
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_50 border-solid flex flex-col gap-[10px] items-center justify-start sm:ml-[0] px-[10px] py-[15px] rounded-[10px] shadow-bs1 w-[223px]">
                    <Text
                      className="font-extrabold text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      100
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Languages
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_50 border-solid flex flex-col gap-[10px] items-center justify-start sm:ml-[0] px-[10px] py-[15px] rounded-[10px] shadow-bs1 w-[223px]">
                    <Text
                      className="font-extrabold text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      100
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Currencies
                    </Text>
                  </div>
                </List>
                <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[96%]">
                  <div className="flex flex-col gap-[15px] items-start justify-center py-[10px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Costs of Living per continent
                    </Text>
                    <Line className="bg-gray_50 h-[1px] w-[64%]" />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-center py-[10px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Largest countries
                    </Text>
                    <Line className="bg-gray_50 h-[1px] w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[30px] mt-[15px] md:w-[100%] w-[95%]">
                <div className="flex flex-col gap-[46px] items-end justify-start md:mt-[0] mt-[16px] md:w-[100%] w-[24%]">
                  <Img
                    src="images/img_figpie.svg"
                    className="h-[174px] w-[175px]"
                    alt="Figpie"
                  />
                  <div className="flex flex-col gap-[15px] items-start justify-center py-[10px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Countries per continent
                    </Text>
                    <Line className="bg-gray_50 h-[1px] w-[77%]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[49px] md:mt-[0] mt-[37px] md:w-[100%] w-[14%]">
                  <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                    <div className="bg-purple_600 h-[12px] w-[20%]"></div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Europe
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] h-[13px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                    <div className="bg-gray_50 h-[12px] w-[18%]"></div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      America
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                    <div className="bg-purple_800 h-[12px] w-[23%]"></div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Africa
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] h-[13px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                    <div className="bg-deep_purple_100 h-[12px] w-[27%]"></div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Asia
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                    <div className="bg-gray_101 h-[12px] w-[18%]"></div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Oceania
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-center md:ml-[0] ml-[284px] py-[5px] w-[auto]">
                  <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[40px] items-center justify-start px-[2px] py-[5px] w-[auto]">
                    <div className="flex flex-row gap-[10px] items-start justify-between w-[47%]">
                      <div className="h-[24px] relative w-[24px]">
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="h-[24px] m-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo"
                        />
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="absolute h-[24px] inset-[0] justify-center m-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo One"
                        />
                      </div>
                      <Text
                        className="font-bold mt-[3px] text-gray_50 text-left w-[auto]"
                        variant="body2"
                      >
                        DRC
                      </Text>
                    </div>
                    <Text
                      className="font-extrabold text-left text-purple_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      2 M
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[5px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[40px] items-center justify-start px-[2px] py-[5px] w-[auto]">
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[47%]">
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="h-[24px] md:h-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo Two"
                        />
                        <Text
                          className="font-bold mt-[3px] text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          DRC
                        </Text>
                      </div>
                      <Text
                        className="font-extrabold text-left text-purple_600_bf w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2 M
                      </Text>
                    </div>
                    <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[40px] items-center justify-start px-[2px] py-[5px] w-[auto]">
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[47%]">
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="h-[24px] md:h-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo Three"
                        />
                        <Text
                          className="font-bold mt-[3px] text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          DRC
                        </Text>
                      </div>
                      <Text
                        className="font-extrabold text-left text-purple_600_7f w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2 M
                      </Text>
                    </div>
                    <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[40px] items-center justify-start px-[2px] py-[5px] w-[auto]">
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[47%]">
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="h-[24px] md:h-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo Four"
                        />
                        <Text
                          className="font-bold mt-[3px] text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          DRC
                        </Text>
                      </div>
                      <Text
                        className="font-extrabold text-gray_50 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2 M
                      </Text>
                    </div>
                    <div className="border-[1px] border-black_900 border-solid flex flex-row gap-[40px] items-center justify-start px-[2px] py-[5px] w-[auto]">
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[47%]">
                        <Img
                          src="images/img_democraticrepublicofcongo.png"
                          className="h-[24px] md:h-[auto] object-cover w-[24px]"
                          alt="democraticrepublicofcongo Five"
                        />
                        <Text
                          className="font-bold mt-[3px] text-gray_50 text-left w-[auto]"
                          variant="body2"
                        >
                          DRC
                        </Text>
                      </div>
                      <Text
                        className="font-extrabold text-gray_50_bf text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2 M
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="font-inter md:h-[137px] h-[144px] mt-[10px] relative md:w-[100%] w-[85%]">
                <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[90%]">
                  <Line className="bg-gray_50 h-[1px] w-[100%]" />
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[85%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[2%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[4px] w-[13%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[1%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[3px] w-[25%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        1
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[2%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[4px] w-[13%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[2%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[4px] w-[13%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        3
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[2%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[4px] w-[13%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        4
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[2%]">
                      <div className="bg-gray_50 h-[4px] md:ml-[0] ml-[4px] w-[13%]"></div>
                      <Text
                        className="not-italic text-center text-gray_50 w-[auto]"
                        variant="body4"
                      >
                        5
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row items-start justify-start left-[5%] top-[0] w-[5%]">
                  <div className="flex flex-col gap-[10px] items-end justify-start w-[100%]">
                    <div className="flex flex-row gap-[5px] items-start justify-between w-[100%]">
                      <Text
                        className="not-italic text-gray_50 text-right w-[auto]"
                        variant="body4"
                      >
                        100
                      </Text>
                      <div className="bg-gray_50 h-[1px] mb-[11px] mt-[2px] w-[19%]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[82%]">
                      <div className="flex flex-row gap-[5px] items-center justify-between w-[100%]">
                        <Text
                          className="not-italic text-gray_50 text-right w-[auto]"
                          variant="body4"
                        >
                          75
                        </Text>
                        <div className="bg-gray_50 h-[1px] mb-[8px] mt-[5px] w-[24%]"></div>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-between mt-[13px] w-[100%]">
                        <Text
                          className="h-[15px] not-italic text-gray_50 text-right w-[auto]"
                          variant="body4"
                        >
                          50
                        </Text>
                        <div className="bg-gray_50 h-[1px] mb-[8px] mt-[5px] w-[24%]"></div>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-between mt-[13px] w-[100%]">
                        <Text
                          className="h-[15px] not-italic text-gray_50 text-right w-[auto]"
                          variant="body4"
                        >
                          25
                        </Text>
                        <div className="bg-gray_50 h-[1px] mb-[8px] mt-[5px] w-[24%]"></div>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-between ml-[auto] mt-[13px] md:w-[100%] w-[74%]">
                        <Text
                          className="not-italic text-gray_50 text-right w-[auto]"
                          variant="body4"
                        >
                          0
                        </Text>
                        <div className="bg-gray_50 h-[1px] mb-[8px] mt-[5px] w-[32%]"></div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_50 h-[115px] mb-[9px] mt-[2px] w-[1px]" />
                </div>
                <Img
                  src="images/img_group.svg"
                  className="absolute h-[101px] right-[2%] top-[11%] w-[auto]"
                  alt="Group"
                />
              </div>
              <div className="flex sm:flex-col flex-row font-lato gap-[10px] h-[34px] md:h-[auto] items-center justify-start md:ml-[0] ml-[89px] p-[10px] sm:w-[100%] w-[518px]">
                <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                  <div className="bg-purple_600 h-[12px] w-[20%]"></div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Europe
                  </Text>
                </div>
                <div className="flex flex-row gap-[10px] h-[13px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                  <div className="bg-gray_50 h-[12px] w-[18%]"></div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    America
                  </Text>
                </div>
                <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                  <div className="bg-purple_800 h-[12px] w-[23%]"></div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Africa
                  </Text>
                </div>
                <div className="flex flex-row gap-[10px] h-[13px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                  <div className="bg-purple_800_7f h-[12px] w-[27%]"></div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Asia
                  </Text>
                </div>
                <div className="flex flex-row gap-[10px] h-[14px] md:h-[auto] items-center justify-start px-[10px] w-[auto]">
                  <div className="bg-purple_100 h-[12px] w-[18%]"></div>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Oceania
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[15px] items-start justify-center md:ml-[0] ml-[50px] mt-[60px] py-[10px] w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Exchange rates
                </Text>
                <Line className="bg-gray_50 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-col font-lato gap-[10px] items-start justify-start md:ml-[0] ml-[30px] mt-[19px] w-[auto]">
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    AUD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1.49
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-start justify-between p-[10px] w-[201px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    USD
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    1
                  </Text>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-solid border-white_A700_33 flex md:flex-1 flex-col items-start justify-end p-[10px] rounded-[5px] shadow-bs2 md:w-[100%] w-[26%]">
              <Text
                className="font-extrabold md:ml-[0] ml-[7px] mt-[12px] text-left text-white_A700 w-[auto]"
                variant="body3"
              >
                EXCHANGE RATES
              </Text>
              <Input
                className="font-normal leading-[normal] not-italic p-[0] text-[10px] placeholder:text-gray_50_7f text-gray_50_7f text-left w-[100%]"
                wrapClassName="md:ml-[0] ml-[7px] mt-[32px] sm:ml-[0] w-[174px]"
                name="FrameThirtyEight"
                placeholder="Enter amount"
              ></Input>
              <SelectBox
                className="font-normal leading-[normal] md:ml-[0] ml-[7px] mt-[22px] not-italic pr-[6px] text-[10px] text-gray_50 text-left sm:w-[100%] w-[57%]"
                placeholderClassName="text-gray_50"
                name="FrameThirtyFive"
                placeholder="Select currency"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[14px] w-[14px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal leading-[normal] md:ml-[0] ml-[7px] mt-[27px] not-italic pr-[6px] text-[10px] text-gray_50 text-left sm:w-[100%] w-[57%]"
                placeholderClassName="text-gray_50"
                name="FrameThirtySix"
                placeholder="Select currency"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[14px] w-[14px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[7px] mt-[24px] text-[10px] text-center text-gray_50 w-[89px]"
                shape="RoundedBorder5"
                size="sm"
                variant="FillPurple600"
              >
                Convert
              </Button>
              <Text
                className="font-light md:ml-[0] ml-[131px] mt-[394px] text-left text-white_A700 w-[auto]"
                as="h1"
                variant="h1"
              >
                Cyrrus
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameNinePage;
