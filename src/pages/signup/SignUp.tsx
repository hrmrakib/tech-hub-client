import github from "/social/github.png";
import google from "/social/google.png";
import facebook from "/social/facebook.png";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [anyError, setAnyError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = async (data: any) => {};

  return (
    <div className='bg-[#F2F3F3] bg-cover flex items-center justify-center min-h-screen'>
      <div className='relative min-h-[calc(100vh-100px)] max-w-xl px-20 py-5 mx-auto bg-white border rounded-lg shadow'>
        <Link to='/' className='absolute left-1 top-1 border rounded-full p-2'>
          <IoHomeOutline className='text-2xl text-purple-600' />
        </Link>

        <div className='flex flex-col items-center justify-center mb-2'>
          <img
            className='size-12 mb-2'
            src='https://i.ibb.co/MB4svxG/code.png'
            alt=''
          />
          <h2 className='text-2xl font-bold text-gray-800'>
            Create a new account
          </h2>
          <p className='text-gray-600 font-medium'>
            Please enter your detail to sign up.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-2'>
            <label
              htmlFor='name'
              className='block mb-1 text-base font-semibold text-gray-900'
            >
              Your Name
            </label>
            <input
              type='text'
              id='name'
              {...register("name", { required: true })}
              className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
              placeholder='Enter name'
            />
            {errors.name && (
              <span className='text-red-600 font-medium'>
                Your name is required
              </span>
            )}
          </div>

          <div className='mb-2'>
            <label
              htmlFor='email'
              className='block mb-1 text-base font-semibold text-gray-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              {...register("email", { required: true })}
              className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
              placeholder='Enter email'
            />
            {errors.email && (
              <span className='text-red-600 font-medium'>
                Your email is required
              </span>
            )}
          </div>
          <div className='relative mb-2'>
            <label
              htmlFor='password'
              className='block mb-1 text-base font-semibold text-gray-900'
            >
              Your password
            </label>
            <input
              type={viewPassword ? "text" : "password"}
              id='password'
              {...register("password", { required: true })}
              className='shadow-sm bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5'
              placeholder='Enter password'
            />
            <span
              onClick={() => setViewPassword(!viewPassword)}
              className='absolute right-2 top-10'
            >
              {viewPassword ? (
                <FaRegEye className='cursor-pointer' />
              ) : (
                <FaEyeSlash className='cursor-pointer' />
              )}
            </span>
            <p className='text-red-600 font-medium my-1'>{passwordError}</p>
            {errors.password && (
              <span className='text-red-600 font-medium'>
                Your password is required
              </span>
            )}
          </div>

          <div className='mb-3'>
            <label
              className='block mb-1 text-base font-semibold text-gray-900'
              htmlFor='file_input'
            >
              Upload Your Photo
            </label>
            <input
              className='block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none'
              id='file_input'
              {...register("photo", { required: true })}
              type='file'
            />
            {errors.photo && (
              <span className='text-red-600 font-medium'>
                Your photo is required
              </span>
            )}
          </div>
          <p className='text-red-500 font-semibold my-1'>{anyError}</p>
          <button
            type='submit'
            className='w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
          >
            <span className='w-max mx-auto'>SignIn</span>
          </button>
        </form>

        <div className='divider my-1'>
          <span className='text-xs'>or</span>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <div className='px-2 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'>
            <img className='size-8 p-1' src={github} alt='github' />
          </div>
          <div className='px-2 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'>
            <img className='size-8 p-1' src={google} alt='google' />
          </div>
          <div className='px-2 cursor-pointer shadow-sm flex items-center justify-between border rounded-md'>
            <img className='size-8 p-1' src={facebook} alt='facebook' />
          </div>
        </div>

        <p className='mt-2'>
          Already have an account? Please
          <Link to='/signin' className='ml-2 font-semibold'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
