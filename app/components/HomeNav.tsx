import React from 'react'
import Link from 'next/link'

const HomeNav = () => {
  return (
    <div className="HomeNav">
      <div className="navbar bg-transparent" style={{ color: '#122231' }}>
        <div className="flex-1">
          <Link href="/" className="flex p-5 normal-case text-white text-xl">
            focGPT <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-white" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="p-4 ml-5 bg-blue-600 pl-5 pr-5 text-white font-medium rounded-lg hover:bg-slate-800">
                Sign in
              </Link>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-white text-black">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeNav
