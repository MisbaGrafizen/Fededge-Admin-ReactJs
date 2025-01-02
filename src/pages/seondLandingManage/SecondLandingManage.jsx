import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import {
  Modal as NextUIModal, // Ensure the correct alias is used
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogAction, addFaqAction, addTeamAction, addTestimonialAction, getAllBlogsAction, getAllTeamAction, getAllTestimonialAction, getFaqAction } from "../../redux/action/generalManagement";
import cloudinaryUpload from "../../helper/cloudinaryUpload";

export default function SecondLandingManage() {
  const [isDeleteModal, setDeleteModal] = useState(false);
  const dispatch = useDispatch();
  
  const teamData = useSelector((state) => state.general.getTeam);
  const faqData = useSelector((state) => state.general.getFaq);
  const blogData = useSelector((state) => state.general.getBlog);
  const testimonialData = useSelector((state) => state.general.getTestimonial);

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [role, setRole] = useState("");

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [title, setTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackImage, setFeedbackImage] = useState(null);
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [city, setCity] = useState("");


  useEffect(() => {
    dispatch(getAllTeamAction());
    dispatch(getFaqAction());
    dispatch(getAllBlogsAction());
    dispatch(getAllTestimonialAction());
  }, [dispatch]);


  const handleDeleteOpen = () => {
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };

  //Integration===============================================================================================================================================================================
 
  useEffect(() => {
    console.log("Blog Image State Updated:", blogImage);
  }, [blogImage]);
  
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setImage(uploadedImageUrl);
    }
  };

  const handleTeamSave = async () => {
    if (!name || !role || !image) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const payload = {
        name,
        role,
        image,
      };

      console.log('payload', payload)

      const response = await dispatch(addTeamAction(payload));
      console.log("Response from addAboutUsAction:", response);

      if (response) {
        setName("");
        setRole("");
        setImage(null);
        dispatch(getAllTeamAction());
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error saving About Us data:", error.message);
      alert("Failed to save About Us data. Please try again.");
    }
  };

  const handleFaqSave = async () => {
    if (!question || !answer ) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const payload = {
        question,
        answer,
      };

      console.log('payload', payload)

      const response = await dispatch(addFaqAction(payload));
      console.log("Response from addAboutUsAction:", response);

      if (response) {
        setQuestion("");
        setAnswer("");
        dispatch(getFaqAction());
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error saving About Us data:", error.message);
      alert("Failed to save About Us data. Please try again.");
    }
  };
 
  const handleBlogImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setBlogImage(uploadedImageUrl);
    }
  };

  const handleBlogSave = async () => {
    if (!title || !blogImage || !author || !date) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const payload = {
        title,
        author,
        image: blogImage,
        date,
      };

      console.log('payload', payload)

      const response = await dispatch(addBlogAction(payload));
      console.log("Response from addAboutUsAction:", response);

      if (response) {
        setTitle("");
        setAuthor("");
        setDate("");
        setBlogImage(null);
        dispatch(getAllBlogsAction());
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error saving About Us data:", error.message);
      alert("Failed to save About Us data. Please try again.");
    }
  };

  const handleTestimonialImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = await cloudinaryUpload(file);
      setFeedbackImage(uploadedImageUrl);
    }
  };

  const handleTestimonialSave = async () => {
    if (!feedbackName || !feedbackImage || !description  ||!city) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const payload = {
        name: feedbackName,
        description,
        image: feedbackImage,
        subDescription,
        city,
      };

      console.log('payload', payload)

      const response = await dispatch(addTestimonialAction(payload));
      console.log("Response from addAboutUsAction:", response);

      if (response) {
        setFeedbackName("");
        setDescription("");
        setSubDescription("");
        setCity("");
        setFeedbackImage(null);
        dispatch(getAllTestimonialAction());
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error saving About Us data:", error.message);
      alert("Failed to save About Us data. Please try again.");
    }
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
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]"  
                      onClick={() =>
                          document.getElementById("imagePicker1").click()
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
                          name="image"
                          id="imagePicker1"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        />
                      </div>

                      <div className="border-[1.5px] w-[100%] h-[50px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                        <input
                          className="w-[100%] h-[100%] text-[16px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Position"
                          name="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={handleTeamSave}>
                          Submit
                        </div>
                      </div>
                    </div>
                    {teamData?.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[300px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                        <img className=" w-[100%] h-[100%]" src={item?.image} />
                      </div>

                      <div className="border-[1.5px] w-[100%] p-[10px] flex items-center font-Montserrat font-[500] h-[50px] border-[#a53d35] rounded-[7px]">
                        <p>{item?.name}</p>
                      </div>
                      <div className="border-[1.5px] w-[100%] p-[10px] flex items-center font-Montserrat font-[400] h-[40px] border-[#a53d35] rounded-[7px]">
                        <p>{item?.role}</p>
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
                    ))}
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
                          name="question"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[130px] border-[#a53d35] rounded-[7px]">
                        <textarea
                          className="w-[100%] h-[100%] text-[16px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                          type="text"
                          placeholder="Answer"
                          name="answer"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                        ></textarea>
                      </div>

                      <div className=" flex w-[100%] justify-end ">
                        <div className=" w-[130px] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={handleFaqSave}>
                          Submit
                        </div>
                      </div>
                    </div>
                    {faqData?.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[1.5px] border-[#a53d35]  w-[100%]">
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
                          {item?.question}
                        </p>
                      </div>
                      <div className="border-[1.5px] w-[100%] flex justify-center items-center h-[130px] border-[#a53d35] rounded-[7px]">
                        <p className="flex items-center font-Montserrat font-[400] p-[10px]">{item?.answer}</p>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Blogs
                  </p>

                  <div className="flex gap-[15px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[450px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]"
                       onClick={() =>
                          document.getElementById("imagePicker2").click()
                        }
                      >
                        {blogImage ? (
                          <img
                            className="w-[100%] h-[100%]"
                            src={blogImage}
                            alt="Image"
                          />
                        ) : (
                          <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                        )}
                        <input
                          type="file"
                          name="image"
                          id="imagePicker2"
                          style={{ display: "none" }}
                          onChange={handleBlogImageChange}
                        />
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder="Name"
                            name="author-"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                          />
                        </div>
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="date"
                            placeholder="Name"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <textarea
                          placeholder="Blog Details"
                          className="  font-Montserrat  font-[400] p-[10px] flex w-[100%] h-[100%] outline-none"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        ></textarea>
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={handleBlogSave}>
                          Submit
                        </div>
                      </div>
                    </div>
                    {blogData?.map((item,index) => (
                    <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[450px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                      <img className=" w-[100%] h-[100%]" src={item?.image} />
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] flex items-center px-[10px] border-[#a53d35] rounded-[7px]">
                          <p className=" flex font-Montserrat font-[500]">
                            {item?.author}
                          </p>
                        </div>
                        <div className="border-[1.5px] w-[100%] flex items-center px-[10px] justify-center  h-[40px] border-[#a53d35] rounded-[7px]">
                          <p className="  font-Montserrat text-center font-[500]">
                            {item?.date}
                          </p>
                        </div>
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <p className="  font-Montserrat  font-[400] p-[10px]">{item?.title}</p>
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
                    ))}
                  </div>
                </div>
                <div className=" flex flex-col gap-[10px]">
                  <p className="font-[500] font-Montserrat text-[25px]">
                    Testimonials
                  </p>

                  <div className="flex gap-[15px] flex-wrap">
                    <div className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[400px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]"
                      onClick={() =>
                          document.getElementById("imagePicker3").click()
                        }
                      >
                        {feedbackImage ? (
                          <img
                            className="w-[100%] h-[100%]"
                            src={feedbackImage}
                            alt="Image"
                          />
                        ) : (
                          <i className="text-[39px] text-[#a53d35] fa-solid fa-plus"></i>
                        )}
                        <input
                          type="file"
                          name="image"
                          id="imagePicker3"
                          style={{ display: "none" }}
                          onChange={handleTestimonialImageChange}
                        />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <textarea
                          placeholder=" Details"
                          className="  font-Montserrat  font-[400] p-[10px] flex w-[100%] h-[100%] outline-none"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>

                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={feedbackName}
                            onChange={(e) => setFeedbackName(e.target.value)}
                          />
                        </div>
                        <div className="border-[1.5px] w-[100%] h-[40px] border-[#a53d35] rounded-[7px]">
                          <input
                            className="w-[100%] h-[100%] text-[19px] font-[500] font-Roboto px-[10px] outline-none rounded-[6px]"
                            type="text"
                            placeholder=" Location"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className=" flex w-[100%] ">
                        <div className=" w-[100%] flex h-[45px]  text-white text-[20px] flex justify-center items-center  font-Montserrat bg-[#a53d35] rounded-[6px]"
                        onClick={handleTestimonialSave}>
                          Submit
                        </div>
                      </div>
                    </div>
                    {testimonialData?.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-[10px] p-[16px] rounded-[6px] border-[#a53d35] border-[1.5px] w-[400px]">
                      <div className=" flex w-[100%] rounded-[6px] border-[#a53d35] items-center border-[1.5px] justify-center  h-[200px]">
                      <img className=" w-[100%] h-[100%]" src={item?.image} />
                      </div>
                      <div className="border-[1.5px] w-[100%] h-[100px] border-[#a53d35] overflow-hidden rounded-[7px]">
                        <p className="  font-Montserrat  font-[400] p-[10px]">{item?.description}</p>
                      </div>
                      <div className=" flex gap-[20px]">
                        <div className="border-[1.5px] w-[100%] h-[40px] flex items-center px-[10px] border-[#a53d35] rounded-[7px]">
                          <p className=" flex font-Montserrat font-[500]">
                            {item?.name}
                          </p>
                        </div>
                        <div className="border-[1.5px] w-[100%] flex items-center px-[10px]   h-[40px] border-[#a53d35] rounded-[7px]">
                          <p className="  font-Montserrat font-[500]">
                           {item?.city}
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
                    ))}
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
