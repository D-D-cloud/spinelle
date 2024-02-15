export default function Login() {
    return (
        <div class="bg-gray-100 flex justify-center items-center h-screen">
            {/* <!-- Left: Image --> */}
            {/* <div class="w-1/2 h-screen hidden lg:block">
                <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" class="object-cover w-full h-full" />
            </div> */}
            {/* <!-- Right: Login Form --> */}
            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Login</h1>
                <form action="#" method="POST">
                    {/* <!-- Username Input --> */}
                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    {/* <!-- Password Input --> */}
                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                    </div>
                    {/* <!-- Remember Me Checkbox --> */}
                    <div class="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
                        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
                    </div>
                    {/* <!-- Forgot Password Link --> */}
                    <div class="mb-6 text-blue-500">
                        <a href="#" class="hover:underline">Forgot Password?</a>
                    </div>
                    {/* <!-- Login Button --> */}
                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
                {/* <!-- Sign up  Link --> */}
                <div class="mt-6 text-blue-500 text-center">
                    <a href="#" class="hover:underline">Sign up Here</a>
                </div>
            </div>
        </div>
        // <div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        //     <div class="relative py-3 sm:w-96 mx-auto text-center">
        //         <span class="text-2xl font-light ">Login to your account</span>
        //         <div class="mt-4 bg-white shadow-md rounded-lg text-left">
        //             <div class="h-2 bg-purple-400 rounded-t-md"></div>
        //             <div class="px-8 py-6 ">
        //                 <label class="block font-semibold"> Username or Email </label>
        //                 <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
        //                 <label class="block mt-3 font-semibold"> Username or Email </label>
        //                 <input type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
        //                 <div class="flex justify-between items-baseline">
        //                     <button type="submit" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
        //                     <a href="#" class="text-sm hover:underline">Forgot password?</a>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        /*<div class="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
            <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div class="flex items-center justify-center w-full lg:p-12">
                    <div class="flex items-center xl:p-10">
                        <form class="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <h3 class="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                            <p class="mb-4 text-grey-700">Enter your email and password</p>
                            <a class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                                Sign in with Google
                            </a>
                            <div class="flex items-center mb-3">
                                <hr class="h-0 border-b border-solid border-grey-500 grow" />
                                <p class="mx-4 text-grey-600">or</p>
                                <hr class="h-0 border-b border-solid border-grey-500 grow" />
                            </div>
                            <label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>
                            <input id="email" type="email" placeholder="mail@loopple.com" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <label for="password" class="mb-2 text-sm text-start text-grey-900">Password*</label>
                            <input id="password" type="password" placeholder="Enter a password" class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <div class="flex flex-row justify-between mb-8">
                                <label class="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input type="checkbox" checked value="" class="sr-only peer" />
                                    <div
                                        class="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                                        <img class="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick" />
                                    </div>
                                    <span class="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
                                </label>
                                <a href="javascript:void(0)" class="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
                            </div>
                            <button class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign In</button>
                            <p class="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="/signup" class="font-bold text-grey-700">Create an Account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    */
    )


}