const Navbar1 = `
 <nav class="bg-white shadow">
      <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex text-red-500 gap-2">
          <svg
            class="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div class="hidden md:flex md:flex-1 items-center mx-4">
            <div class="relative w-full max-w-xs">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                class="w-44 rounded-full border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                type="search"
                placeholder="Search (⌘ + k)"
              />
            </div>
          </div>
        </div>

        <div class="flex-grow hidden md:flex justify-center space-x-4">
          <a href="/" class="text-gray-600 hover:text-red-500 cursor-pointer">Home</a>
          <a href="/about" class="text-gray-600 hover:text-red-500 cursor-pointer">About</a>
          <a href="/blog" class="text-gray-600 hover:text-red-500 cursor-pointer">Blog</a>
        </div>

        <div class="hidden md:flex justify-center items-center gap-2">
          <a href="/login" class="hover:text-red-600 bg-red-50 px-5 py-2.5 text-sm font-medium text-red-500 hover:bg-red-100 rounded-md">Login</a>
          <a href="#" class="block rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600">Sign in</a>
        </div>

        <div class="md:hidden">
          <input type="checkbox" id="menu-toggle" class="hidden" />
          <label htmlFor="menu-toggle" class="text-gray-300 hover:text-white cursor-pointer">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
          <div id="menu" class="hidden">
            <div class="flex flex-col space-y-4 mt-2">
              <a href="/" class="text-gray-300 hover:text-white">Home</a>
              <a href="/about" class="text-gray-300 hover:text-white">About</a>
              <a href="/services" class="text-gray-300 hover:text-white">Services</a>
              <a href="/contact" class="text-gray-300 hover:text-white">Contact</a>
              <a href="/login" class="text-gray-300 hover:text-white bg-blue-600 px-4 py-2 rounded">Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
`

const Navbar2 = ` 
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-white text-2xl font-bold">
                    <svg
                        class="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >       
                        <path
                            d="M13 2L3 14h9l-1 8 10-12h-9z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div class="flex-grow hidden md:flex justify-center space-x-4">
                    <Link href="/">
                        <a class="text-gray-300 hover:text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a class="text-gray-300 hover:text-white">About</a>
                    </Link>
                    <Link href="/services">
                        <a class="text-gray-300 hover:text-white">Services</a>
                    </Link>
                    <Link href="/contact">
                        <a class="text-gray-300 hover:text-white">Contact</a>
                    </Link>
                </div>
                <div class="hidden md:block">
                    <Link href="/login">
                        <a class="text-gray-300 hover:text-white bg-blue-600 px-4 py-2 rounded">Login</a>
                    </Link>
                </div>
                <div class="md:hidden">
                    <input type="checkbox" id="menu-toggle" class="hidden" />
                    <label htmlFor="menu-toggle" class="text-gray-300 hover:text-white cursor-pointer">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <div id="menu" class="hidden">
                        <div class="flex flex-col space-y-4 mt-2">
                            <Link href="/">
                                <a class="text-gray-300 hover:text-white">Home</a>
                            </Link>
                            <Link href="/about">
                                <a class="text-gray-300 hover:text-white">About</a>
                            </Link>
                            <Link href="/services">
                                <a class="text-gray-300 hover:text-white">Services</a>
                            </Link>
                            <Link href="/contact">
                                <a class="text-gray-300 hover:text-white">Contact</a>
                            </Link>
                            <Link href="/login">
                                <a class="text-gray-300 hover:text-white bg-blue-600 px-4 py-2 rounded">Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`


const NavbarTailwindComponents = [
    { name: 'Navbar1', content: Navbar1 },
    { name: 'Navbar2', content: Navbar2 }
]

export default NavbarTailwindComponents;