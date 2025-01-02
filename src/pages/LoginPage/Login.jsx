import { useEffect, useState } from "react";
import loginimg from "../../../public/img/login.png";
import loginimgdesk from "../../../public/img/Login-Desktop.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedEmail = Cookies.get("email");
    const savedPassword = Cookies.get("password");
    if (savedEmail && savedPassword) {
      setFormData({ email: savedEmail, password: savedPassword });
      setIsChecked(true);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle login submission
  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast("Please fill in both fields.", "error");
      return;
    }
  
    if (isChecked) {
      Cookies.set("email", email, { expires: 1 / 12 }); 
      Cookies.set("password", password, { expires: 1 / 12 });
    } else {
      Cookies.remove("email");
      Cookies.remove("password");
    }

    try {
      // Call login API
      const response = await axios.post("https://server.grafizen.in/api/v2/rotex/auth/user/login", formData); 
      console.log("Login API Response:", response); 
      const user = response.data?.user;
      console.log('user', user)
      const token = user?.tokens?.access?.token;
      console.log('token', token)
    if (token) {
      Cookies.set('authToken', token);
      toast("Login successful!", "success");
      navigate("/dashboard"); 
    } else {
      alert("invalid email or password.")
      throw new Error("Login failed: Invalid user data.");
    }
    } catch (error) {
      alert("invalid email or password.")
      console.error("Login error:", error);
      toast(error.message || "Failed to login. Please try again.", "error");
    }
  };

  return (
    <div className="w-[100%] relative">
      <img
        className="w-[100%] absolute h-[100vh] flex z-[-20] 2xl:hidden"
        src={loginimg}
        alt="Login Background"
      />
      <img
        className="w-[100%] absolute h-[100vh] z-[-20] hidden 2xl:flex"
        src={loginimgdesk}
        alt="Login Background Desktop"
      />

      <div className="z-30 flex h-[100vh] justify-end items-center pt-[16%] mr-[12%]">
        <div className="flex flex-col gap-[30px] w-[400px]">
          <input
            className="w-[100%] h-[45px] rounded-[10px] px-[20px] text-[17px] outline-none"
            placeholder="Enter email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="w-[100%] h-[45px] rounded-[10px] px-[20px] text-[17px] outline-none"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <label className="flex gap-[10px] px-[10px] text-[17px] cursor-pointer text-[#fff]">
            <input
              type="checkbox"
              id="custom-checkbox"
              style={{ display: "none" }}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: isChecked ? "#a53d35" : "#fff",
                borderRadius: "28%",
                border: "1px solid #ccc",
                display: "inline-block",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {isChecked && (
                <span
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "5px",
                    width: "6px",
                    height: "10px",
                    border: "solid white",
                    borderWidth: "0 2px 2px 0",
                    transform: "rotate(45deg)",
                  }}
                ></span>
              )}
            </span>
            <p>Remember my Preference</p>
          </label>

          <div
            className="text-white cursor-pointer text-[23px] font-bold bg-[#a53d35] flex justify-center items-center py-[8px] rounded-[10px] transition duration-300 ease-in-out transform hover:bg-[#244077] hover:scale-20 active:scale-105"
            onClick={handleLogin}
          >
            <p>LOGIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

