import { Fragment, useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import userImage from "../../assets/user.png"
import Modal from '../authentication/Modal'
import Register from '../authentication/Register'
import { Link, useNavigate } from 'react-router-dom'
import { imagenUser } from '../../api/useAxios'
import Login from '../authentication/Login'
import RegisterPonente from '../authentication/RegisterPonente'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    userImage
}
const navigation = [
  { name: 'QR', href: '/qr', current: true },
  // { name: 'Foro', href: '/foro', current: true },
  { name: 'Ponentes', href: '/ponentes', current: true },
  { name: 'Asistencia', href: '/asistencia', current: true },
  { name: 'Bloques', href: '/bloques', current: true },
  { name: 'Profile', href: '/profile', current: true },
  // { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const nav = useNavigate()

  function logout() {
    localStorage.clear()
    nav('/login')
  }


  const username = localStorage.getItem('nombre');
  // console.log(username)}
  console.log(localStorage.getItem('foto'));
  const foto = imagenUser(localStorage.getItem('foto'));
  console.log((foto)); 

  // const username = true

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {username != null ? (
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                
                <div className="md:ml-4 md:flex md:flex-shrink-0 md:items-center mr-5">
                  

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </MenuButton>
                    </div>
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            {({ focus }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  focus ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
                <div className="flex-shrink-0">
                  <Link to={'/'} onClick={logout}
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    
                    Salir
                  </Link>
                </div>
              </div>
            </div>
            ) : (
              <div className="flex items-center">
                <div className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <div className="md:ml-4 md:flex md:flex-shrink-0 md:items-center mr-5">
                    <button 
                    className='relative m-3 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                    onClick={() => setIsModalOpen(true)}
                    >Iniciar Sesion</button>
                    <Login open={isModalOpen} setOpen={setIsModalOpen} />
                    
                    <button
                      className="relative m-3 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      onClick={() => setIsModalOpen3(true)}
                    >Registrarse Ponente</button>
                    <RegisterPonente open={isModalOpen3} setOpen={setIsModalOpen3} />

                    <button
                      className="relative m-3 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      onClick={() => setIsModalOpen2(true)}
                    >Registrarse</button>
                    <Register open={isModalOpen2} setOpen={setIsModalOpen2} />
                  </div>
                </div>
              </div>
            )}
          </div>

          
        </>
      )}
    </Disclosure>
  )
}
