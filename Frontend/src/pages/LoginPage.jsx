import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {user} = useSelector(store => store.user);

  const handelSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/user/login",input, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
      });
      if(res.data) {
        // console.log(res.data);
        dispatch(setAuthUser(res.data.user));
        navigate("/");
        toast.success('Successfully Login!');
        setInput({ email: "", password: "" });
      }
    } catch (error) {
       toast.error(error.response.data.message)
    }finally{
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   if(user) {
  //     navigate("/")
  //   }
  // },[]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2163/2163350.png"
            alt="homeimg"
            className="w-10 h-10"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Log in to see more
        </h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Enter email"
              className="common-input"
              required
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="Enter password"
              className="common-input"
              required
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>

          {loading ? (
            <button className='common-btn'>Please wait...</button>
          ) : (
            <button className='common-btn'>Log in</button>
          )}
        </form>

        <div className="mt-6 text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 to-gray-50">0R</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            <span>
              Not on HomeRental yet?
              <Link
                to="/register"
                className="font-medium text-pinterest hover:underline"
              >
                Register
              </Link>
            </span>
          </div>
          {/* <div className="w-full border-t border-gray-300 mt-3 gap-2"></div>
          <div className=""> demo email: nish@gmail.com  <br /> password: nish</div> */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;