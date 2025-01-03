import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import {
  Modal as NextUIModal, // Ensure the correct alias is used
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addAboutUsAction, addAchievementAction, addHeroTextSliderAction, addServiceAction, addWhyChooseUsAction, deleteAchievementAction, deleteHeroTextLineAction, deleteServiceAction, deleteWhyChooseUsAction, getAboutUsAction, getAchievementAction, getHeroTextSliderAction, getServiceAction, getWhyChoosUsAction, updateAchievementAction, updateHeroTextLineAction, updateServiceAction, updateWhyChooseUsAction } from "../../redux/action/LandingManagement";
import cloudinaryUpload from '../../helper/cloudinaryUpload';


export default function AboutUs() {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState({ id: null, text: "" });
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState();
  const [isaboutModalOpen, setAboutModalOpen] = useState(false);
  const dispatch = useDispatch();

  const lineData = useSelector((state) => state.landing.getTextLine);
  const aboutUsData = useSelector((state) => state.landing.getAboutUs);
  const chooseUsData = useSelector((state) => state.landing.getWhyChooseUs);
  const serviceData = useSelector((state) => state.landing.getService);
  const achievementData = useSelector((state) => state.landing.getAchevement);

  useEffect(() => {
    dispatch(getHeroTextSliderAction());
    dispatch(getAboutUsAction());
    dispatch(getWhyChoosUsAction());
    dispatch(getServiceAction());
    dispatch(getAchievementAction());
  }, [dispatch]);

  // About us data structure (title, content, image1, image2, etc.)
  const [aboutData, setAboutData] = useState(null);

  // For the modal fields
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutContent, setAboutContent] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [icon, setIcon] = useState(null);

  const [counting, setCounting] = useState();
  const [name, setName] = useState();

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [deleteType, setDeleteType] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [mode, setMode] = useState("add");


  const openAboutModal = () => {
    if (aboutData) {
      setAboutTitle(aboutData.title || "");
      setAboutContent(aboutData.content || "");
      setImage1(aboutData.image1 || null);
      setImage2(aboutData.image2 || null);
    } else {
      setAboutTitle("");
      setAboutContent("");
      setImage1(null);
      setImage2(null);
    }
    setAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setAboutModalOpen(false);
  };

  const handleService = () => {
    setServiceModalOpen(true);
  };
  const handleServiceClose = () => {
    setServiceModalOpen(false);
  };

  //Integration==========================================================================================================================================================================


  const handleDeleteOpen = (id, type) => {
    setDeleteItemId(id);
    setDeleteType(type);
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
    setDeleteItemId(null);
    setDeleteType("");
  };

  const handleEdit = (item, type) => {
    setMode("edit");
    setEditItemId(item._id); // Set the ID of the item to be updated

    if (type === "text") {
      setText(item.text);
    } else if (type === "whyUs") {
      setTitle(item.title);
      setDescription(item.text);
      setImage(item.icon)
    } else if (type === "service") {
      setServiceTitle(item.title);
      setServiceDescription(item.description);
      setIcon(item.icon);
    } else if (type === "achievement") {
      setCounting(item.counting);
      setName(item.name);
    }
  };

  const handleSave = async (type) => {
    let id = editItemId;
    if (typeof id === "object") {
      id = id?._id || id?.id || id?.toString();
    }

    const payload = {};
    if (type === "text") {
      payload.text = text;
    } else if (type === "whyUs") {
      payload.title = title;
      payload.text = description;
      payload.icon = image;
    } else if (type === "service") {
      payload.title = serviceTitle;
      payload.icon = icon;
      payload.description = serviceDescription;
    } else if (type === "achievement") {
      payload.name = name;
      payload.counting = counting;
    }

    try {
      if (id) {
        // Update existing record
        console.log(`Updating ${type} with ID: ${id}`);
        if (type === "text") {
          await dispatch(updateHeroTextLineAction(id, payload));
          dispatch(getHeroTextSliderAction());
        } else if (type === "whyUs") {
          await dispatch(updateWhyChooseUsAction(id, payload));
          dispatch(getWhyChoosUsAction());
        } else if (type === "service") {
          await dispatch(updateServiceAction(id, payload));
          dispatch(getServiceAction());
        } else if (type === "achievement") {
          await dispatch(updateAchievementAction(id, payload));
          dispatch(getAchievementAction());
        }
      } else {
        // Create new record
        console.log(`Creating new ${type}`);
        if (type === "text") {
          await dispatch(addHeroTextSliderAction(payload));
          dispatch(getHeroTextSliderAction());
        } else if (type === "whyUs") {
          await dispatch(addWhyChooseUsAction(payload));
          dispatch(getWhyChoosUsAction());
        } else if (type === "service") {
          await dispatch(addServiceAction(payload));
          handleServiceClose();
          dispatch(getServiceAction());
        } else if (type === "achievement") {
          await dispatch(addAchievementAction(payload));
          dispatch(getAchievementAction());
        }
      }

      resetFields(type);
    } catch (error) {
      console.error(`Error saving ${type}:`, error);
      alert(`Failed to save ${type}. Please try again.`);
    }
  };


  const handleDelete = async () => {
    if (deleteType === "text") {
      await dispatch(deleteHeroTextLineAction(deleteItemId));
      dispatch(getHeroTextSliderAction());
    } else if (deleteType === "whyUs") {
      await dispatch(deleteWhyChooseUsAction(deleteItemId));
      dispatch(getWhyChoosUsAction());
    } else if (deleteType === "service") {
      await dispatch(deleteServiceAction(deleteItemId));
      dispatch(getServiceAction());
    } else if (deleteType === "achievement") {
      await dispatch(deleteAchievementAction(deleteItemId));
      dispatch(getAchievementAction());
    }
    handleDeleteClose();
  };

  const resetFields = (type) => {
    if (type === "text") {
      setText("");
    } else if (type === "whyUs") {
      setTitle("");
      setDescription("");
      setImage(null);
    } else if (type === "service") {
      setServiceTitle("");
      setIcon(null);
      setServiceDescription("");
    } else if (type === "achievement") {
      setCounting("");
      setName("");
    }

    setMode("add"); // Switch back to "add" mode
    setEditItemId(null); // Clear the edit item ID
  };


  // const handleCreateText = async (e) => {
  //   e.preventDefault();
  //   if (!text.trim()) return;
  //   await dispatch(addHeroTextSliderAction({ text }));
  //   setText('');
  // };

  const handleImage2Change = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setImage2(uploadedImageUrl);
    }
  };

  const handleImage1Change = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setImage1(uploadedImageUrl);
    }
  };


  const handleAboutSave = async () => {
    if (!aboutTitle || !aboutContent || !image1 || !image2) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const payload = {
        title: aboutTitle,
        description: aboutContent,
        image1,
        image2,
      };

      const response = await dispatch(addAboutUsAction(payload));
      console.log("Response from addAboutUsAction:", response);

      if (response) {
        setAboutTitle("");
        setAboutContent("");
        setImage1(null);
        setImage2(null);
        closeAboutModal();
        dispatch(getAboutUsAction());
      } else {
        console.error("Unexpected response:", response);
      }


    } catch (error) {
      console.error("Error saving About Us data:", error.message);
      alert("Failed to save About Us data. Please try again.");
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setImage(uploadedImageUrl);
    }
  };

  // const handleWhyChooseUsSave = async () => {
  //   if (!title || !description || !image) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       title: title,
  //       text: description,
  //       icon: image,
  //     };

  //     console.log('payload', payload)

  //     const response = await dispatch(addWhyChooseUsAction(payload));
  //     console.log("Response from addAboutUsAction:", response);

  //     if (response) {
  //       setTitle("");
  //       setDescription("");
  //       setImage(null);
  //       dispatch(getWhyChoosUsAction());
  //     } else {
  //       console.error("Unexpected response:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error saving About Us data:", error.message);
  //     alert("Failed to save About Us data. Please try again.");
  //   }
  // };
  const handleIconChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setIcon(uploadedImageUrl);
    }
  };

  // const handleServiceSave = async () => {
  //   if (!serviceTitle || !serviceDescription || !icon) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       title: serviceTitle,
  //       description: serviceDescription,
  //       icon,
  //     };

  //     console.log('payload', payload)

  //     const response = await dispatch(addServiceAction(payload));
  //     console.log("Response from addAboutUsAction:", response);

  //     if (response) {
  //       setServiceTitle("");
  //       setServiceDescription("");
  //       setIcon(null);
  //       handleServiceClose();
  //       dispatch(getServiceAction());
  //     } else {
  //       console.error("Unexpected response:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error saving About Us data:", error.message);
  //     alert("Failed to save About Us data. Please try again.");
  //   }
  // };

  // const handleAchievementSave = async () => {
  //   if (!counting || !name) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       counting,
  //       name,
  //     };

  //     console.log('payload', payload)

  //     const response = await dispatch(addAchievementAction(payload));
  //     console.log("Response from addAboutUsAction:", response);

  //     if (response) {
  //       setCounting("");
  //       setName("");
  //       dispatch(getAchievementAction());
  //     } else {
  //       console.error("Unexpected response:", response);
  //     }
  //   } catch (error) {
  //     console.error("Error saving About Us data:", error.message);
  //     alert("Failed to save About Us data. Please try again.");
  //   }
  // };



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
                        name=" text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                    <div
                      className="font-[600] text-[20px] text-center justify-center flex text-[#fff] bg-[#177e24] items-center border-[1.5px] w-[130px] h-[50px] border-[#7a6c6c] rounded-[9px]"
                      onClick={() => handleSave("text")}
                    >
                      <p> {mode === "edit" ? "Update" : "Submit"}</p>
                    </div>
                  </div>
                  <div className="flex gap-[10px] mt-[10px] items-center">
                    {lineData?.map((item, index) => (
                      <div key={index} className="border-[1.5px] w-[100%] flex items-center justify-between p-[10px] h-[50px] border-[#a53d35] rounded-[9px]">
                        <p className="text-[20px] font-Montserrat items-center flex">
                          {item?.text}
                        </p>
                        <div className="flex justify-center items-center gap-[15px] text-center py-2">
                          <i
                            className="fa-solid  cursor-pointer  text-[#000000] text-[19px] fa-pen-to-square"
                            onClick={() => handleEdit(item, "text")}
                          ></i>
                          <i
                            className="text-[18px] mt-[1px] text-[#ff0b0b] cursor-pointer fa-solid fa-trash-can"
                            onClick={() =>
                             handleDeleteOpen(item?.id, "text")
                            }
                          ></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-[500] font-Montserrat text-[25px]">
                    About Us
                  </p>

                  <div className="flex w-[100%] flex-col justify-between gap-[20px]">
                    {aboutUsData?.map((item, index) => (
                      <div key={index} className="flex justify-between gap-[15px] w-[100%]">
                        <div className="flex flex-col gap-[15px] justify-center">
                          {/* First image */}
                          <div className="h-[270px] w-[280px] overflow-hidden border-[#a53d35] border-[1.8px] justify-center items-center rounded-[8px] flex">
                            {item?.image1 ? (
                              <img
                                className="w-[100%] h-[100%]"
                                src={item.image1}
                                alt="About 1"
                              />
                            ) : (
                              <p className="text-gray-400">No image 1</p>
                            )}
                          </div>

                          
                          <div className="h-[200px] w-[280px] overflow-hidden border-[#a53d35] border-[1.8px] justify-center items-center rounded-[8px] flex">
                            {item?.image2 ? (
                              <img
                                className="w-[100%] h-[100%]"
                                src={item.image2}
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
                            <p>{item?.title || "No Title Yet"}</p>
                          </div>

                          <div className="border-[1.8px] border-[#a53d35] text-[20px] rounded-[8px] h-[200px] p-[10px]">
                            <p className="flex text-[18px] font-Montserrat">
                              {item?.description || "No content yet..."}
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
                    ))}
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Why Choose Us
                  </p>

                  <div className="flex gap-[25px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]"
                        onClick={() =>
                          document.getElementById("imagePicker4").click()
                        }
                      >
                        {image ? (
                          <img
                            className="w-[100%] h-[100%]"
                            src={image}
                            alt="Image"
                          />
                        ) : (
                          <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                        )}
                        <input
                          type="file"
                          name="icon"
                          id="imagePicker4"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>

                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Title"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                        <textarea
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          name="text"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                          onClick={() => handleSave("whyUs")}>
                           {mode === "edit" ? "Update" : "Submit"}
                        </div>
                      </div>
                    </div>
                    {chooseUsData?.map((item, index) => (
                      <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                        <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                          <img className=" w-[100%] h-[100%]" src={item?.icon} />
                        </div>

                        <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                          <p>{item?.title}</p>
                        </div>
                        <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                          <p>{item?.text}</p>
                        </div>
                        <div className=" flex w-[100%] gap-[10px] ">
                          <div className=" w-[100%] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                          onClick={() => handleEdit(item, "whyUs")}>
                            <i
                              className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                            // Populate input field when edit is clicked
                            ></i>
                          </div>
                          <div
                            className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                            onClick={() => handleDeleteOpen(item?.id, "whyUs")}
                          >
                            <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-[10px]">
                <p className="font-[500] font-Montserrat text-[25px]">
                  Services
                </p>
                <div
                  className=" w-[150px] cursor-pointer flex h-[45px] gap-[10px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#204d28] rounded-[6px]"
                  onClick={handleService}
                >
                  <i className="fa-solid fa-plus"></i>
                  <p>Add</p>
                </div>
                <div className="flex flex-wrap gap-[16px]">
                  {serviceData?.map((item, index) => (
                    <div key={index} className="flex gap-[25px] w-[100] flex-wrap">
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
                            <img className=" w-[100%] h-[100%]" src={item?.icon} />
                          </div>

                          <div className="border-[1.5px] w-[80%] h-[50px] border-[#a53d35] rounded-[7px]">
                            <p>{item?.title}</p>
                          </div>
                        </div>

                        <div className="border-[1.5px] w-[100%] h-[120px] border-[#a53d35] p-[3px] rounded-[6px]">
                          <p>{item?.description}</p>
                        </div>
                        <div className=" flex w-[100%] gap-[10px] ">
                          <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                          onClick={() => handleEdit(item, "service")}>
                            <i
                              className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                            // Populate input field when edit is clicked
                            ></i>
                          </div>
                          <div
                            className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                            onClick={() => handleDeleteOpen(item?.id, "service")}
                          >
                            <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                        type="text"
                        name="counting"
                        placeholder="0"
                        value={counting}
                        onChange={(e) => setCounting(e.target.value)}
                      />
                    </div>
                    <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] p-[3px] rounded-[6px]">
                      <input
                        className="w-[100%] h-[100%]  text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                        type="text"
                        name="name"
                        placeholder="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className=" flex w-[100%] ">
                      <div className=" w-[100%] flex  cursor-pointer h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={() => handleSave("achievement")}>
                        Submit
                      </div>
                    </div>
                  </div>
                  {achievementData?.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className="border-[1.5px] w-[100%] h-[90px] border-[#a53d35]  flex justify-center items-center  rounded-[7px]">
                        <p className=" text-[40px]  text-center font-Montserrat ">
                          {item?.counting}
                        </p>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[50px]  flex  items-center border-[#a53d35] p-[3px] rounded-[6px]">
                        <p className=" text-[16px] px-[10px] font-Montserrat ">
                          {item?.name}
                        </p>
                      </div>
                      <div className=" flex w-[100%] gap-[10px] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={() => handleEdit(item, "achievement")}>
                          <i
                            className="fa-solid  cursor-pointer  text-[19px] fa-pen-to-square"
                          // Populate input field when edit is clicked
                          ></i>
                        </div>
                        <div
                          className=" w-[70px] flex h-[45px]  text-white text-[20px]  justify-center items-center  font-Montserrat bg-[#ff1403] rounded-[6px] cursor-pointer"
                          onClick={() => handleDeleteOpen(item?.id, "achievement")}
                        >
                          <i className="text-[18px] mt-[1px] text-[#ffffff] cursor-pointer fa-solid fa-trash-can"></i>
                        </div>
                      </div>
                    </div>
                  ))}
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
                        onClick={handleDelete}
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
                  {image1 ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={image1}
                      alt="About 1"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    name="image1"
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
                  {image2 ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={image2}
                      alt="About 2"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    name="image2"
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
                    name="description"
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

      <NextUIModal isOpen={isServiceModalOpen} onOpenChange={handleServiceClose}>
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
                  {icon ? (
                    <img
                      className="w-[100%] h-[100%]"
                      src={icon}
                      alt="About 2"
                    />
                  ) : (
                    <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                  )}
                  <input
                    type="file"
                    name="icon"
                    id="imagePicker2"
                    style={{ display: "none" }}
                    onChange={handleIconChange}
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
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                  />
                </div>
                <div className="text-[16px] w-[100%] p-[10px] font-[600] overflow-hidden border-[#000] h-[100px] border-[1px] rounded-[8px]">
                  <textarea
                    className="flex w-[100%] outline-none h-[100%]"
                    name="text"
                    placeholder="Description"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* <div className="text-[16px] mt-[10px] w-[100%] p-[10px] font-[600] overflow-hidden border-[#000] h-[140px] border-[1px] rounded-[8px]">
              <textarea
                className="flex w-[100%] outline-none h-[100%]"
                name="content"
                placeholder=" Full of Description"
              />
            </div> */}
            {/* Save button */}
            <div
              className="w-[100%] font-Montserrat h-[45px] mt-[30px] rounded-md mx-auto cursor-pointer flex justify-center items-center text-[#fff] font-[600] bg-[#a53d35] active:scale-95 transition-transform duration-150"
              onClick={() => handleSave("service")}
            >
              <p> {mode === "edit" ? "Update" : "Submit"}</p>
            </div>
          </div>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
