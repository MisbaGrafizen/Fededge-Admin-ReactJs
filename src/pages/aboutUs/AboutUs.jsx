import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import {
  Modal as NextUIModal, // Ensure the correct alias is used
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

export default function AboutUs() {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isWhyModalOpen, setWhyModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();
  const [isaboutModalOpen, setAboutModalOpen] = useState(false);

  // About us data structure (title, content, image1, image2, etc.)
  const [aboutData, setAboutData] = useState(null);

  // For the modal fields
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutContent, setAboutContent] = useState("");
  const [aboutImage1, setAboutImage1] = useState(null);
  const [aboutImage2, setAboutImage2] = useState(null);

  const handleEdit = () => {
    setInputValue(data);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setData(inputValue);
  };

  const handleDeleteOpen = () => {
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };
  const openAboutModal = () => {
    // If we already have aboutData, pre-fill the fields for editing
    if (aboutData) {
      setAboutTitle(aboutData.title || "");
      setAboutContent(aboutData.content || "");
      setAboutImage1(aboutData.image1 || null);
      setAboutImage2(aboutData.image2 || null);
    } else {
      // Otherwise, clear the fields for adding
      setAboutTitle("");
      setAboutContent("");
      setAboutImage1(null);
      setAboutImage2(null);
    }
    setAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setAboutModalOpen(false);
  };

  // Handle file inputs (image selection)
  const handleImage1Change = (event) => {
    const file = event.target.files?.[0];
    if (file) setAboutImage1(URL.createObjectURL(file));
  };

  const handleImage2Change = (event) => {
    const file = event.target.files?.[0];
    if (file) setAboutImage2(URL.createObjectURL(file));
  };

  // Save or update aboutData
  const handleAboutSave = () => {
    const newAboutData = {
      title: aboutTitle,
      content: aboutContent,
      image1: aboutImage1,
      image2: aboutImage2,
    };
    setAboutData(newAboutData);
    setAboutModalOpen(false);
  };

  const handleWhyus = () => {
    setWhyModalOpen(true);
  };
  const handleWhyusClose = () => {
    setWhyModalOpen(false);
  };

  return (
    <>
      <div className="w-[99%] md11:w-[100%] md150:w-[99%] h-[100vh] flex flex-col items-center  relative overflow-hidden top-0 bottom-0  md11:py-[34px] md150:py-[48px] md11:px-[30px] md150:px-[40px]  mx-auto   my-auto ">
        <div className="  mx-auto flex gap-[30px] w-[100%] md11:h-[92vh] md150:h-[90vh] flex-col relative    rounded-[19px] border-[1px] border-[#a53d35]">
          <div className="flex absolute gap-[10px] left-[3%]  md11:top-[4.1%]  md150:top-[5%] items-center    md11:text-[18px] md150:text-[20px] font-[600]">
            <i className="fa-solid fa-angle-up fa-rotate-270"></i>

            <div className=" font-Potua flex items-center gap-[10px] cursor-pointer">
              <p>LANDING</p>
              <p>MANAGEMENT</p>
            </div>
          </div>

          <div className=" md11:py-[69px] md150:py-[90px] flex md11:w-[98%] md150:w-[97%] md11:gap-[15px]  md150:gap-[20px]">
            <Header />
            <div className="   py-[20px] px-[20px]  md150:h-[70vh] md11:h-[73vh] overflow-y-auto   h-[67vh] bg-white  w-[100%] rounded-[19px] relative   border-[1px]  my-justify-center  border-[#a53d35]">
              <div className="flex flex-col gap-[28px]">
                <div className="">
                  <p className="font-[500] font-Montserrat text-[20px]">
                    Hero Text Slider
                  </p>

                  <div className="flex gap-[10px] items-center">
                    <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[9px]">
                      <input
                        className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[9px]"
                        type="text"
                        value={inputValue} // Bind input value to the state
                        onChange={handleInputChange} // Handle input changes
                      />
                    </div>
                    <div
                      className="font-[600] text-[20px] text-center justify-center flex text-[#fff] bg-[#177e24] items-center border-[1.5px] w-[130px] h-[50px] border-[#7a6c6c] rounded-[9px]"
                      onClick={handleSave} // Save when clicked
                    >
                      <p>Save</p>
                    </div>
                  </div>
                  <div className="flex gap-[10px] mt-[10px] items-center">
                    <div className="border-[1.5px] w-[100%] flex items-center justify-between p-[10px] h-[50px] border-[#a53d35] rounded-[9px]">
                      <p className="text-[20px] font-Montserrat items-center flex">
                        {data}
                      </p>
                      <div className="flex justify-center items-center gap-[15px] text-center py-2">
                        <i
                          className="fa-solid  cursor-pointer  text-[#000000] text-[19px] fa-pen-to-square"
                          onClick={handleEdit} // Populate input field when edit is clicked
                        ></i>
                        <i
                          className="text-[18px] mt-[1px] text-[#ff0b0b] cursor-pointer fa-solid fa-trash-can"
                          onClick={() =>
                            alert("Delete action will be implemented.")
                          } // Example placeholder for delete
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-[500] font-Montserrat text-[25px]">
                    About Us
                  </p>

                  <div className="flex w-[100%] flex-col justify-between gap-[20px]">
                    <div className="flex justify-between gap-[15px] w-[100%]">
                      <div className="flex flex-col gap-[15px] justify-center">
                        {/* First image */}
                        <div className="h-[270px] w-[280px] overflow-hidden border-[#a53d35] border-[1.8px] justify-center items-center rounded-[8px] flex">
                          {aboutData?.image1 ? (
                            <img
                              className="w-[100%] h-[100%]"
                              src={aboutData.image1}
                              alt="About 1"
                            />
                          ) : (
                            <p className="text-gray-400">No image 1</p>
                          )}
                        </div>

                        {/* Second image */}
                        <div className="h-[200px] w-[280px] overflow-hidden border-[#a53d35] border-[1.8px] justify-center items-center rounded-[8px] flex">
                          {aboutData?.image2 ? (
                            <img
                              className="w-[100%] h-[100%]"
                              src={aboutData.image2}
                              alt="About 2"
                            />
                          ) : (
                            <p className="text-gray-400">No image 2</p>
                          )}
                        </div>
                      </div>

                      {/* Title and Content */}
                      <div className="w-[79%] flex flex-col gap-[10px]">
                        <div className="text-[20px] w-[100%] flex items-center font-Roboto px-[10px] font-[500] border-[#a53d35] h-[60px] border-[1.8px] rounded-[8px]">
                          <p>{aboutData?.title || "No Title Yet"}</p>
                        </div>

                        <div className="border-[1.8px] border-[#a53d35] text-[20px] rounded-[8px] h-[200px] p-[10px]">
                          <p className="flex text-[18px] font-Montserrat">
                            {aboutData?.content || "No content yet..."}
                          </p>
                        </div>

                        <div className="flex w-[100%] mt-[20px] justify-end">
                          <div className="flex gap-[20px]">
                            <div
                              className="w-[130px] h-[45px] rounded-md mx-auto cursor-pointer flex justify-center items-center text-[#fff] font-Poppins font-[600] bg-[#a53d35] active:scale-95 transition-transform duration-150"
                              onClick={openAboutModal}
                            >
                              {/* If we have data, show "Edit"; otherwise, "Add" */}
                              <p className="font-Montserrat">
                                {aboutData ? "Edit" : "Add"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Why Choose Us
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
                          placeholder="Title"
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <textarea
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Description"
                        ></textarea>
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

                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <p></p>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <p></p>
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
                    Services
                  </p>
                  <div
                    className=" w-[150px] cursor-pointer flex h-[45px] gap-[10px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#204d28] rounded-[6px]"
                    onClick={handleWhyus}
                  >
                    <i class="fa-solid fa-plus"></i>
                    <p>Add</p>
                  </div>
                  <div className="flex gap-[25px] flex-wrap">
                    {/* <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                      </div>

                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Title"
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <textarea
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div> */}
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[400px]">
                      <div className="flex gap-[10px] w-[100%]">
                        <div className=" flex w-[120px] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[100px]">
                          <img className=" w-[100%] h-[100%]" src="" />
                        </div>

                        <div className="border-[1.5px] w-[80%] h-[50px] border-[#a53d35] rounded-[7px]">
                          <p></p>
                        </div>
                      </div>

                      <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <p></p>
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
                    Achievement
                  </p>

                  <div className="flex gap-[25px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className="border-[1.5px] w-[100%] h-[90px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-center text-[40px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="number"
                          placeholder="0.0"
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <input
                          className="w-[100%] h-[100%]  text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Title"
                        />
                      </div>
                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex  cursor-pointer h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]">
                          Submit
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className="border-[1.5px] w-[100%] h-[90px] border-[#a53d35]  flex justify-center items-center  rounded-[7px]">
                        <p className=" text-[40px]  text-center font-Montserrat ">
                          345
                        </p>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[50px]  flex  items-center border-[#a53d35] p-[3px] rounded-[6px]">
                        <p className=" text-[16px] px-[10px] font-Montserrat ">
                          tyfghkjnlm
                        </p>
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

      {/* Corrected the modal reference */}
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
      <NextUIModal isOpen={isaboutModalOpen} onOpenChange={closeAboutModal}>
        <ModalContent className="md:max-w-[850px] max-w-[850px] relative flex justify-center !p-[10px] mx-auto shadow-delete">
          <div className="relative w-[100%] p-[30px] h-[100%]">
            <div className="flex gap-[20px] w-[100%]">
              {/* Left side: two image pickers */}
              <div className="flex flex-col gap-[10px]">
                {/* Image 1 */}
                <div
                  className="h-[200px] w-[250px] border-[#a53d35] border-[1px] justify-center items-center rounded-[8px] flex cursor-pointer overflow-hidden"
                  onClick={() =>
                    document.getElementById("imagePicker1").click()
                  }
                >
                  {aboutImage1 ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={aboutImage1}
                      alt="About 1"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    id="imagePicker1"
                    style={{ display: "none" }}
                    onChange={handleImage1Change}
                  />
                </div>
                {/* Image 2 */}
                <div
                  className="h-[170px] w-[250px] border-[#a53d35] border-[1px] justify-center items-center rounded-[8px] flex cursor-pointer overflow-hidden"
                  onClick={() =>
                    document.getElementById("imagePicker2").click()
                  }
                >
                  {aboutImage2 ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={aboutImage2}
                      alt="About 2"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    id="imagePicker2"
                    style={{ display: "none" }}
                    onChange={handleImage2Change}
                  />
                </div>
              </div>

              {/* Right side: title & content */}
              <div className="w-[79%] flex flex-col gap-[20px]">
                <div className="text-[20px] w-[100%] font-[600] border-[#000] h-[50px] border-[1px] rounded-[8px]">
                  <input
                    className="w-[100%] h-[100%] outline-none px-[10px] rounded-[8px]"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={aboutTitle}
                    onChange={(e) => setAboutTitle(e.target.value)}
                  />
                </div>
                <div className="text-[16px] w-[100%] p-[10px] font-[600] overflow-hidden border-[#000] h-[180px] border-[1px] rounded-[8px]">
                  <textarea
                    className="flex w-[100%] outline-none h-[100%]"
                    name="content"
                    placeholder="Description"
                    value={aboutContent}
                    onChange={(e) => setAboutContent(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Save button */}
            <div
              className="w-[100%] font-Montserrat h-[45px] mt-[30px] rounded-md mx-auto cursor-pointer flex justify-center items-center text-[#fff] font-[600] bg-[#a53d35] active:scale-95 transition-transform duration-150"
              onClick={handleAboutSave}
            >
              <p>Save</p>
            </div>
          </div>
        </ModalContent>
      </NextUIModal>

      <NextUIModal isOpen={isWhyModalOpen} onOpenChange={handleWhyusClose}>
        <ModalContent className="md:max-w-[850px] max-w-[850px] relative flex justify-center !p-[10px] mx-auto shadow-delete">
          <div className="relative w-[100%] p-[30px] h-[100%]">
            <div className="flex gap-[20px] w-[100%]">
              {/* Left side: two image pickers */}
              <div className="flex flex-col gap-[10px]">
                {/* Image 2 */}
                <div
                  className="h-[170px] w-[200px] border-[#a53d35] border-[1px] justify-center items-center rounded-[8px] flex cursor-pointer overflow-hidden"
                  onClick={() =>
                    document.getElementById("imagePicker2").click()
                  }
                >
                  {aboutImage2 ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={aboutImage2}
                      alt="About 2"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    id="imagePicker2"
                    style={{ display: "none" }}
                    onChange={handleImage2Change}
                  />
                </div>
              </div>

              {/* Right side: title & content */}
              <div className="w-[79%] flex flex-col gap-[20px]">
                <div className="text-[20px] w-[100%] font-[600] border-[#000] h-[50px] border-[1px] rounded-[8px]">
                  <input
                    className="w-[100%] h-[100%] outline-none px-[10px] rounded-[8px]"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={aboutTitle}
                    onChange={(e) => setAboutTitle(e.target.value)}
                  />
                </div>
                <div className="text-[16px] w-[100%] p-[10px] font-[600] overflow-hidden border-[#000] h-[100px] border-[1px] rounded-[8px]">
                  <textarea
                    className="flex w-[100%] outline-none h-[100%]"
                    name="content"
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>
            <div className="text-[16px] mt-[10px] w-[100%] p-[10px] font-[600] overflow-hidden border-[#000] h-[140px] border-[1px] rounded-[8px]">
              <textarea
                className="flex w-[100%] outline-none h-[100%]"
                name="content"
                placeholder=" Full of Description"
              />
            </div>
            {/* Save button */}
            <div
              className="w-[100%] font-Montserrat h-[45px] mt-[30px] rounded-md mx-auto cursor-pointer flex justify-center items-center text-[#fff] font-[600] bg-[#a53d35] active:scale-95 transition-transform duration-150"
              onClick={handleAboutSave}
            >
              <p>Save</p>
            </div>
          </div>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
