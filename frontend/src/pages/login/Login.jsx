import React from 'react'

const Login = () => {
  return (
    <div className="backgroundImage h-screen w-screen flex items-center justify-center">
      <div className="w-2/12 h-1/3 justify-around flex flex-col">
        <div>
          <label class="input input-bordered flex items-center gap-2 m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" placeholder="Username" />
          </label>
          <label class="input input-bordered flex items-center gap-2 m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input type="password" class="grow" placeholder="password" />
          </label>
        </div>
        <div className='m-1'>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <button class="btn btn-success w-1/2">Login</button>
          <button class="btn btn-link">Forget password?</button>
        </div>
      </div>
    </div>
  );
}

export default Login