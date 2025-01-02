import React, { useState } from "react";
import Header from "../../Components/header/Header";
import {
  Modal as NextUIModal, // Ensure the correct alias is used
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

export default function SecondLandingManage() {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };
  return (
    <>
      <div className="w-[99%] md11:w-[100%] md150:w-[99%] h-[100vh] flex flex-col items-center  relative overflow-hidden top-0 bottom-0  md11:py-[34px] md150:py-[48px] md11:px-[30px] md150:px-[40px]  mx-auto   my-auto ">
        <div className="  mx-auto flex gap-[30px] w-[100%] md11:h-[92vh] md150:h-[90vh] flex-col relative    rounded-[19px] border-[1px] border-[#a53d35]">
          <div className="flex absolute gap-[10px] left-[3%]  md11:top-[4.1%]  md150:top-[5%] items-center    md11:text-[18px] md150:text-[20px] font-[600]">
            <i className="fa-solid fa-angle-up fa-rotate-270"></i>

            <div className=" font-Potua flex items-center gap-[10px] cursor-pointer">
              <p>LANDING 2</p>
              <p>MANAGEMENT</p>
            </div>
          </div>

          <div className=" md11:py-[69px] md150:py-[90px] flex md11:w-[98%] md150:w-[97%] md11:gap-[15px]  md150:gap-[20px]">
            <Header />
            <div className="   py-[20px] px-[20px]  md150:h-[70vh] md11:h-[73vh] overflow-y-auto   h-[67vh] bg-white  w-[100%] rounded-[19px] relative   border-[1px]  my-justify-center  border-[#a53d35]">
              <div className="flex flex-col gap-[28px]">
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Our Teams
                  </p>

                  <div className="flex gap-[25px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>

                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[16px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Position"
                        />
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <img className=" w-[100%] h-[100%]" src="" />
                      </div>

                      <div className="border-[1.5px] w-[100%] p-[10px] flex items-center font-Montserrat font-[500] h-[50px] border-[#a53d35] rounded-[7px]">
                        <p>cdsf</p>
                      </div>
                      <div className="border-[1.5px] w-[100%] p-[10px] flex items-center font-Montserrat font-[400] h-[40px] border-[#a53d35] rounded-[7px]">
                        <p>dfsf</p>
                      </div>
                      <div className=" flex w-[100%] gap-[10px] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          <i
                            className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                            // Populate input field when edit is clicked
                          ></i>
                        </div>
                        <div
                          className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                          onClick={handleDeleteOpen}
                        >
                          <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    FAQ 's
                  </p>

                  <div className="flex gap-[15px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px]  w-[100%]">
                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Question"
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[130px] border-[#a53d35] rounded-[7px]">
                        <textarea
                          className="w-[100%] h-[100%] text-[16px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Answer"
                        ></textarea>
                      </div>

                      <div className=" flex w-[100%] justify-end ">
                        <div className=" w-[130px] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[1.5px] border-[#a53d35]  w-[100%]">
                      <div className="m  flex w-[100%] justify-end">
                        <div className=" w-[100px]  gap-[16px] flex h-[45px] relative top-[-18px] right-[-17px] border-b-[1.5px] border-[#a53d35] border-l-[1.5px]  text-white text-[20px] flex justify-center items-center  font-Montserrat  rounded-bl-[6px]">
                          <div className="  flex text-[20px] flex justify-center items-center  font-Montserrat  rounded-[6px]">
                            <i
                              className="fa-solid   text-[#10651b]  cursor-pointer  text-[19px] fa-pen-to-square"
                              // Populate input field when edit is clicked
                            ></i>
                          </div>
                          <div
                            className=" ] flex text-[20px]  justify-center items-center  font-Montserrat  rounded-[6px] cursor-pointer"
                            onClick={handleDeleteOpen}
                          >
                            <i className="text-[18px] mt-[1px] text-[#ff1414] cursor-pointer fa-solid fa-trash-can"></i>
                          </div>
                        </div>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <p className="flex p-[10px] items-center font-Montserrat font-[400]">
                          hjk
                        </p>
                      </div>
                      <div className="border-[1.5px] w-[100%] flex justify-center items-center h-[130px] border-[#a53d35] rounded-[7px]">
                        <p className="flex items-center font-Montserrat font-[400] p-[10px]"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Blogs
                  </p>

                  <div className="flex gap-[15px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[450px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="date"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <textarea
                          placeholder="Blog Details"
                          className="  font-Montserrat  font-[400] p-[10px] flex w-[100%] h-[100%] outline-none"
                        ></textarea>
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[450px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] flex items-center px-[10px] border-[#a53d35] rounded-[7px]">
                          <p className=" flex font-Montserrat font-[500]">
                            fcghj
                          </p>
                        </div>
                        <div className="border-[1.5px] w-[100%] flex items-center px-[10px] justify-center  h-[40px] border-[#a53d35] rounded-[7px]">
                          <p className="  font-Montserrat text-center font-[500]">
                            20-4-2023
                          </p>
                        </div>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <p className="  font-Montserrat  font-[400] p-[10px]"></p>
                      </div>

                      <div className=" flex w-[100%] gap-[10px] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          <i
                            className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                            // Populate input field when edit is clicked
                          ></i>
                        </div>
                        <div
                          className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                          onClick={handleDeleteOpen}
                        >
                          <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Testimonials
                  </p>

                  <div className="flex gap-[15px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[400px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <textarea
                          placeholder=" Details"
                          className="  font-Montserrat  font-[400] p-[10px] flex w-[100%] h-[100%] outline-none"
                        ></textarea>
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder=" Location"
                          />
                        </div>
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[400px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <p className="  font-Montserrat  font-[400] p-[10px]"></p>
                      </div>
                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] flex items-center px-[10px] border-[#a53d35] rounded-[7px]">
                          <p className=" flex font-Montserrat font-[500]">
                            fcghj
                          </p>
                        </div>
                        <div className="border-[1.5px] w-[100%] flex items-center px-[10px]   h-[40px] border-[#a53d35] rounded-[7px]">
                          <p className="  font-Montserrat font-[500]">
                            20-4-2023
                          </p>
                        </div>
                      </div>

                      <div className=" flex w-[100%] gap-[10px] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          <i
                            className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                            // Populate input field when edit is clicked
                          ></i>
                        </div>
                        <div
                          className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                          onClick={handleDeleteOpen}
                        >
                          <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextUIModal isOpen={isDeleteModal} onOpenChange={setDeleteModal}>
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative  flex justify-center !py-0 mx-auto  h-[300px] shadow-delete ">
          {(handleDeleteClose) => (
            <>
              <div className="relative w-[100%] h-[100%] ">
                <div className="relative  w-[100%] h-[100%]">
                  <div className="w-[100%] flex gap-7 flex-col">
                    <div className="w-[100%] mt-[30px] p-[10px] mx-auto flex justify-center s">
                      <i className=" text-[80px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                    </div>
                    <div className=" mx-auto justify-center  flex text-[28px] font-[500] font-Poppins">
                      <p className="font-Montserrat">Are you sure ?</p>
                    </div>
                    <div className="absolute bottom-0 flex w-[100%]">
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[red] rounded-bl-[10px] text-[#fff] font-[600] font-Poppins text-[20px]"
                        onClick={handleDeleteClose}
                      >
                        <p className=" font-Montserrat">Delete</p>
                      </div>
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600] font-Poppins text-[20px]"
                        onClick={handleDeleteClose}
                      >
                        <p className="font-Montserrat">Cancel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal>
    </>
  );
}
