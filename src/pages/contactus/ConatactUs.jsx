import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import {
  Modal as NextUIModal,
  ModalContent,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactUsAction, getContactUsAction } from "../../redux/action/userManagement";

export default function ConatactUs() {

  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.users.getContactUs);

  const [isDeleteModal, setDeleteModal] = useState(false);
  const [deleteContactId, setDeleteContactId] = useState(null);

  useEffect(() => {
    dispatch(getContactUsAction());
  }, [dispatch])

  console.log('contactData', contactData)
  // ================================
  // 1. STATE VARIABLES
  // ================================
  // Dummy data for your contacts
  const dummyContacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      number: "1234567890",
      subject: "Order Inquiry",
      message: "Hello, I would like to know more about my order #1023",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      number: "0987654321",
      subject: "Feedback",
      message: "Loved your product! Keep it up!",
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex@example.com",
      number: "5555555555",
      subject: "Collaboration",
      message: "I’d like to discuss a potential partnership.",
    },
  ];

  // Stores the list of contacts
  const [contacts, setContacts] = useState(dummyContacts);

  // ================================
  // 2. MODAL CONTROLS
  // ================================
  // Open the delete modal and store the contact ID
  const handleModalOpen = (id) => {
    setDeleteModal(true);
    setDeleteContactId(id);
  };

  // Close the modal
  const handleModalClose = () => {
    setDeleteModal(false);
    setDeleteContactId(null);
  };

  // ================================
  // 3. DELETE A CONTACT (LOCAL ONLY)
  // ================================
  const handleDelete = async () => {
    if (!deleteContactId) return;

    try {
      // Dispatch delete action
      await dispatch(deleteContactUsAction(deleteContactId));

      // Refresh contact list
      dispatch(getContactUsAction());

      // Close modal and reset deleteContactId
      handleModalClose();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // ================================
  // 4. RENDER COMPONENT
  // ================================
  return (
    <>
      <div className="w-[100%] md150:w-[99%] h-[100vh] flex flex-col items-center relative overflow-hidden top-0 bottom-0 py-[34px] md150:py-[48px] px-[30px] md150:px-[40px] mx-auto my-auto">
        <div className="mx-auto flex gap-[30px] w-[100%] h-[92vh] md150:h-[90vh] flex-col relative rounded-[19px] border-[1px] border-[#a53d35]">
          <div className="flex absolute gap-[10px] left-[3%] top-[4.1%] md150:top-[5%] items-center text-[18px] md150:text-[20px] font-[600]">
            <i className="cursor-pointer fa-solid fa-angle-up fa-rotate-270"></i>
            <div className="font-Potua flex items-center gap-[10px] cursor-pointer">
              <p>CONTACT US</p>
              <p>MANAGEMENT</p>
            </div>
          </div>

          <div className="py-[69px] md150:py-[90px] flex w-[98%] md150:w-[97%] gap-[15px] md150:gap-[20px]">
            <Header />

            <div className="md150:py-[20px] md150:px-[20px] px-[15px] py-[15px] md150:h-[70vh] h-[73vh] bg-white w-[100%] rounded-[19px] relative border-[1px] my-justify-center items-center border-[#000000]">
              <div className="flex justify-between w-full gap-[20px]">
                <div className="w-full h-full mx-auto mb-3 scroll-d-none">
                  <div className="w-full h-full mx-auto rounded-[10px] border border-black overflow-x-hidden relative">
                    <div className="box-border font-Poppins w-full">
                      {/* Table Header */}
                      <div className="sticky top-0 flex bg-[#a53d35] border-black w-full">
                        {/* Sr. + checkbox */}
                        <div className="flex !font-Poppins justify-center text-center py-[8px] items-center border-r border-b border-black gap-[3px] px-3 min-w-[4%] max-w-[4%]">
                          <input
                            type="checkbox"
                            id="check-all"
                            style={{ width: "10px", height: "10px" }}
                          />
                          <p className="w-fit md150:text-[16px] !pr-[-80px] text-[12px] font-[600] text-[#fff] font-Outfit">
                            Sr.
                          </p>
                        </div>
                        {/* Name */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[15%] max-w-[15%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Name
                          </p>
                        </div>
                        {/* Email */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[13%] max-w-[13%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            E mail
                          </p>
                        </div>
                        {/* Number */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[12%] max-w-[12%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Number
                          </p>
                        </div>
                        {/* Subject */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[12%] max-w-[12%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Website
                          </p>
                        </div>
                        {/* Message */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[15%] max-w-[15%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Budget
                          </p>
                        </div>
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[20%] max-w-[20%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Description
                          </p>
                        </div>
                        {/* Action */}
                        <div className="flex justify-start items-center text-center py-[8px] border-r border-b border-black px-3 min-w-[10%] max-w-[10%]">
                          <p className="md150:text-[16px] text-[12px] font-[600] font-Outfit text-[#fff]">
                            Action
                          </p>
                        </div>
                      </div>
                      {/* Table Rows */}
                      {contactData.map((item, index) => (
                        <div key={item.id} className="flex justify-between">
                          {/* Sr. + checkbox */}
                          <div className="flex justify-center text-center py-[7px] items-center border-r border-b border-black gap-[7px] px-3 min-w-[4%] max-w-[4%]">
                            <input
                              type="checkbox"
                              id="check-all"
                              style={{ width: "10px", height: "10px" }}
                            />
                            <p className="w-fit md150:text-[15px] text-[13px] font-[500] text-[#000] font-Outfit">
                              {index + 1}
                            </p>
                          </div>
                          {/* Name */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[15%] max-w-[15%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.name}
                            </p>
                          </div>
                          {/* Email */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[13%] max-w-[13%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.email}
                            </p>
                          </div>
                          {/* Number */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[12%] max-w-[12%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.phone}
                            </p>
                          </div>
                          {/* Subject */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[12%] max-w-[15%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.website}
                            </p>
                          </div>
                          {/* Message */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[15%] max-w-[15%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.budget}
                            </p>
                          </div>
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[20%] max-w-[20%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] font-Outfit text-[#000]">
                              {item.description}
                            </p>
                          </div>
                          {/* Action */}
                          <div className="flex justify-start text-center py-[8px] border-r border-b border-black px-3 min-w-[10%] max-w-[10%]">
                            <p className="md150:text-[15px] text-[13px] font-[500] justify-center mfont-Outfit text-[#000]">
                              <i
                                className="text-[15px] cursor-pointer text-[#ff0b0b] fa-solid fa-trash-can"
                                onClick={() => handleModalOpen(item._id)}
                              ></i>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Pagination or other controls */}
                  <div className="flex absolute bottom-3 right-6 font-Poppins items-center gap-[10px]">
                    <div>
                      <p className="text-[15px] font-[600] text-[#2565df]">
                        Total pages - 1
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-center border-[1.7px] border-[#000] cursor-pointer py-[5px] px-[24px] rounded-[10px] text-[14px] font-[600]">
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <NextUIModal isOpen={isDeleteModal} onOpenChange={handleModalClose}>
        <ModalContent className="md:max-w-[350px] max-w-[333px] relative flex justify-center !py-0 mx-auto h-[300px] shadow-delete">
          {(handleModalClose) => (
            <>
              <div className="relative w-[100%] h-[100%]">
                <div className="relative w-[100%] h-[100%]">
                  <div className="w-[100%] flex gap-7 flex-col">
                    <div className="w-[100%] mt-[30px] p-[10px] mx-auto flex justify-center">
                      <i className="text-[80px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                    </div>
                    <div className="mx-auto justify-center flex text-[28px] font-[500] font-Poppins">
                      <p>Are you sure?</p>
                    </div>
                    <div className="absolute bottom-0 flex w-[100%]">
                      {/* Delete Button */}
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px] bg-[red] rounded-bl-[10px] text-[#fff] font-[600] font-Poppins text-[20px]"
                        onClick={handleDelete}
                      >
                        <p>Delete</p>
                      </div>
                      {/* Cancel Button */}
                      <div
                        className="w-[50%] cursor-pointer flex justify-center items-center py-[10px] bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600] font-Poppins text-[20px]"
                        onClick={handleModalClose}
                      >
                        <p>Cancel</p>
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
