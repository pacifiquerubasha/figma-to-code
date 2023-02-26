import React from "react";

import { Text, ReactTable } from "components";
import { createColumnHelper } from "@tanstack/react-table";

const FrameTwoPage = () => {
  const tableData = React.useRef([
    {
      rowonceuponatime: "Once upon a time",
      rowonceuponatimeone: "Once upon a time",
      rowonceuponatimetwo: "Once upon a time",
      rowonceuponatimethree: "Regular",
      rowlight: "Regular",
    },
    {
      rowonceuponatime: "Once upon a time",
      rowonceuponatimeone: "Once upon a time",
      rowonceuponatimetwo: "Once upon a time",
      rowonceuponatimethree: "Medium",
      rowlight: "Medium",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowonceuponatime", {
      cell: (info) => (
        <Text
          className="font-normal not-italic py-[9px] text-black_900 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[238px] pb-[6px] pr-[6px] md:w-[100%] w-[20%]">
          <Text
            className="font-light text-black_900 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Once upon a time
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowonceuponatimeone", {
      cell: (info) => (
        <Text
          className="font-normal not-italic py-[9px] text-black_900 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[238px] pr-[2px] py-[2px] md:w-[100%] w-[20%]">
          <Text
            className="font-light mb-[2px] text-black_900 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Once upon a time
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowonceuponatimetwo", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[6px] pt-[12px] text-black_900 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[238px] pr-[2px] py-[2px] md:w-[100%] w-[20%]">
          <Text
            className="font-light mt-[2px] text-black_900 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Once upon a time
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowonceuponatimethree", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pl-[-426px] text-black_900 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[426px] pr-[6px] pt-[6px] md:w-[100%] w-[35%]">
          <Text
            className="font-light text-black_900 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Once upon a time
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowlight", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pl-[-426px] text-black_900 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[88px] md:w-[100%] w-[8%]">
          <Text
            className="font-light mb-[5px] text-black_900 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Light
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-lato items-start justify-start mx-[auto] p-[22px] sm:px-[20px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[45px] md:px-[20px] md:w-[100%] w-[94%]">
          <div className="flex flex-row gap-[43px] items-center justify-start md:w-[100%] w-[23%]">
            <Text
              className="font-semibold text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              FONTS
            </Text>
            <Text
              className="font-black text-left text-purple_600 w-[auto]"
              as="h2"
              variant="h2"
            >
              LATO
            </Text>
          </div>
          <div className="overflow-auto mt-[39px] w-[99%]">
            <ReactTable
              columns={column}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[12px] w-[100%]">
            <Text
              className="font-semibold mb-[6px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-semibold sm:ml-[0] ml-[49px] sm:mt-[0] my-[3px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-semibold mb-[2px] sm:ml-[0] ml-[49px] sm:mt-[0] mt-[5px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-semibold sm:ml-[0] ml-[49px] sm:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-semibold mb-[7px] sm:ml-[0] ml-[237px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Semibold
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[13px] md:w-[100%] w-[96%]">
            <Text
              className="font-bold mb-[6px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[48px] md:mt-[0] my-[3px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-bold mb-[2px] md:ml-[0] ml-[48px] md:mt-[0] mt-[5px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-bold md:ml-[0] ml-[48px] md:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-bold mb-[7px] md:ml-[0] ml-[236px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Bold
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[2px] mt-[7px] w-[100%]">
            <Text
              className="font-extrabold mb-[6px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-extrabold sm:ml-[0] ml-[51px] sm:mt-[0] my-[3px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-extrabold mb-[2px] sm:ml-[0] ml-[41px] sm:mt-[0] mt-[5px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-extrabold sm:ml-[0] ml-[46px] sm:mt-[0] mt-[7px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Once upon a time
            </Text>
            <Text
              className="font-extrabold mb-[7px] sm:ml-[0] ml-[234px] text-black_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Extrabold
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
