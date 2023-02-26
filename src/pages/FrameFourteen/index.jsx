import React from "react";

import { Text, Img, Button, Line } from "components";

const FrameFourteenPage = () => {
  return (
    <>
      <div className="bg-black_900 border-[1px] border-black_900_7f border-solid flex font-lato items-center justify-start mx-[auto] pb-[109px] w-[100%]">
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
            Search country
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1042px] mt-[4px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="border-[1px] border-solid border-white_A700_33 flex flex-col gap-[20px] h-[166px] md:h-[auto] items-start justify-center md:mt-[0] mt-[15px] p-[10px] shadow-bs w-[auto]">
              <Text
                className="font-normal not-italic text-left text-purple_600 w-[auto]"
                variant="body1"
              >
                Search country
              </Text>
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
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
            <div className="flex md:flex-1 flex-col font-inter items-start justify-start md:w-[100%] w-[77%]">
              <Text
                className="font-normal md:ml-[0] ml-[3px] not-italic text-gray_50 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                Select a country you want to find more details about{" "}
              </Text>
              <Line className="bg-white_A700_33 h-[1px] mt-[9px] w-[98%]" />
              <div className="flex sm:flex-col flex-row font-lato gap-[34px] items-center justify-start md:ml-[0] ml-[3px] mt-[12px] md:w-[100%] w-[52%]">
                <Img
                  src="images/img_arrow1.svg"
                  className="h-[3px] w-[auto]"
                  alt="ArrowOne"
                />
                <div className="flex items-start justify-end pr-[2px] py-[2px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_50 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Democratic Republic of Congo
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-lato gap-[7px] items-center justify-between md:ml-[0] ml-[3px] mt-[42px] w-[100%]">
                <Img
                  src="images/img_democraticrepu.svg"
                  className="h-[337px] w-[337px]"
                  alt="DemocraticRepu"
                />
                <div className="border-[1px] border-black_900 border-solid flex sm:flex-1 flex-col gap-[5px] items-start justify-start px-[10px] sm:w-[100%] w-[451px]">
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
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] w-[240px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      CAPITAL
                    </Text>
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      variant="body1"
                    >
                      Kinshasa
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] w-[240px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      BORDERS
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-start p-[2px] w-[auto]">
                      <Img
                        src="images/img_democraticrepublicofcongo.png"
                        className="h-[18px] md:h-[auto] object-cover w-[18px]"
                        alt="democraticrepublicofcongo"
                      />
                      <Img
                        src="images/img_democraticrepublicofcongo.png"
                        className="h-[18px] md:h-[auto] object-cover w-[18px]"
                        alt="democraticrepublicofcongo One"
                      />
                      <Img
                        src="images/img_democraticrepublicofcongo.png"
                        className="h-[18px] md:h-[auto] object-cover w-[18px]"
                        alt="democraticrepublicofcongo Two"
                      />
                      <Img
                        src="images/img_democraticrepublicofcongo.png"
                        className="h-[18px] md:h-[auto] object-cover w-[18px]"
                        alt="democraticrepublicofcongo Three"
                      />
                      <Img
                        src="images/img_democraticrepublicofcongo.png"
                        className="h-[18px] md:h-[auto] object-cover w-[18px]"
                        alt="democraticrepublicofcongo Four"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] w-[240px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      CALLING CODE
                    </Text>
                    <Text
                      className="font-semibold text-gray_50 text-left w-[auto]"
                      variant="body1"
                    >
                      +243
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start p-[10px] sm:w-[100%] w-[441px]">
                    <Text
                      className="font-light text-left text-white_A700_7f w-[auto]"
                      variant="body3"
                    >
                      LANGUAGES
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start w-[auto]">
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[62px] text-[14px] text-center text-white_A700 w-[auto]"
                        size="sm"
                        variant="OutlineWhiteA70033"
                      >
                        French
                      </Button>
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[62px] text-[14px] text-center text-white_A700 w-[auto]"
                        size="sm"
                        variant="OutlineWhiteA70033"
                      >
                        Lingala
                      </Button>
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[62px] text-[14px] text-center text-white_A700 w-[auto]"
                        size="sm"
                        variant="OutlineWhiteA70033"
                      >
                        Swahili
                      </Button>
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[69px] text-[14px] text-center text-white_A700 w-[auto]"
                        size="sm"
                        variant="OutlineWhiteA70033"
                      >
                        Kikongo
                      </Button>
                      <Button
                        className="cursor-pointer font-light leading-[normal] min-w-[69px] text-[14px] text-center text-white_A700 w-[auto]"
                        size="sm"
                        variant="OutlineWhiteA70033"
                      >
                        Tshiluba
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[59px] md:px-[20px] md:w-[100%] w-[76%]">
            <div className="flex flex-col gap-[5px] h-[660px] md:h-[auto] items-start justify-start px-[10px] sm:w-[100%] w-[451px]">
              <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                <div className="bg-purple_600 border-[1px] border-solid border-white_A700_33 flex flex-row gap-[5px] items-center justify-start p-[5px] rounded-[5px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    UN
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    MEMBER
                  </Text>
                </div>
                <Text
                  className="bg-purple_600 border-[1px] border-solid border-white_A700_33 font-bold justify-center p-[5px] rounded-[5px] text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  LANDLOCKED
                </Text>
                <Text
                  className="bg-purple_600 border-[1px] border-solid border-white_A700_33 font-bold justify-center p-[5px] rounded-[5px] text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  INDEPENDANT
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start py-[10px] w-[240px]">
                <Text
                  className="font-light text-left text-white_A700_7f w-[auto]"
                  variant="body3"
                >
                  POPULATION
                </Text>
                <Text
                  className="font-semibold text-gray_50 text-left w-[auto]"
                  variant="body1"
                >
                  95.58 M
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start py-[10px] w-[240px]">
                <Text
                  className="font-light text-left text-white_A700_7f w-[auto]"
                  variant="body3"
                >
                  REGION
                </Text>
                <Text
                  className="font-semibold text-gray_50 text-left w-[auto]"
                  variant="body1"
                >
                  Africa
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start py-[10px] w-[240px]">
                <Text
                  className="font-light text-left text-white_A700_7f w-[auto]"
                  variant="body3"
                >
                  SUBREGION
                </Text>
                <Text
                  className="font-semibold text-gray_50 text-left w-[auto]"
                  variant="body1"
                >
                  Middle Africa
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start py-[10px] w-[240px]">
                <Text
                  className="font-light text-left text-white_A700_7f w-[auto]"
                  variant="body3"
                >
                  TOP LEVEL DOMAIN
                </Text>
                <Text
                  className="font-semibold text-gray_50 text-left w-[auto]"
                  variant="body1"
                >
                  .CD
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start py-[10px] sm:w-[100%] w-[441px]">
                <Text
                  className="font-light text-left text-white_A700_7f w-[auto]"
                  variant="body3"
                >
                  TRANSLATIONS
                </Text>
                <div className="border-[1px] border-solid border-white_A700_33 flex flex-col gap-[10px] items-start justify-start p-[10px] sm:w-[100%] w-[auto]">
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      France
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Estonia
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      China
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Sweden
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Portugal
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700_33 flex flex-row gap-[10px] items-center justify-between p-[10px] sm:w-[100%] w-[380px]">
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Spain
                    </Text>
                    <Text
                      className="font-light text-gray_50 text-left w-[auto]"
                      variant="body3"
                    >
                      Republique Democratique du Congo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] justify-start md:mt-[0] mt-[66px] md:w-[100%] w-[54%]">
              <Text
                className="font-bold md:ml-[0] ml-[16px] text-left text-purple_600 w-[auto]"
                as="h6"
                variant="h6"
              >
                MAP
              </Text>
              <Img
                src="images/img_basemapimage.png"
                className="h-[358px] sm:h-[auto] object-cover w-[100%]"
                alt="Basemapimage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFourteenPage;
