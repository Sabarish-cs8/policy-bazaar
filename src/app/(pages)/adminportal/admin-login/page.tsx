'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../../../public/logo.png'
import AddCardForm from '@/components/admin/Addcard-form'
import { CircleUserRound, CreditCard, LayoutGrid, Plus } from 'lucide-react'
import Dashboard from '@/components/admin/dashboard'
import ViewCard from '@/components/admin/viewCard'
import UserInfo from '@/components/admin/UserInfo'

type Props = {}

const AdminPortal = (props: Props) => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    {
      id:"dashboard",
      title:"Dashboard",
      icon: <LayoutGrid />
    },
    {
      id:"viewcard",
      title:"View cards",
      icon: <CreditCard />
    },
    {
      id:"addcard",
      title:" Add Credit Card",
      icon:<Plus />
    },
    {
      id:"viewuser",
      title:"View user Information",
      icon: <CircleUserRound />
    },
  ]
  return (
    <div className="flex flex-col md:flex-row gap-4">
    {/* Sidebar */}
    <div className="w-full md:w-80 p-4 mb-4 bg-gray-100 md:h-screen overflow-y-auto md:sticky md:top-0">
      <div className="flex flex-col items-start mb-4">
        <Image src={Logo} alt="PolicyBazaar" width={130} height={90} />
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                }}
                className={`w-full flex items-center gap-2 py-4 rounded-lg transition-colors duration-200
                  ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                `}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  
    {/* Content Area */}
    <div className="w-full md:w-3/4 p-6 overflow-y-auto h-screen">
      {activeSection === "dashboard" && (
        <div>
          <Dashboard />
        </div>
      )}
      {activeSection === "addcard" && <AddCardForm />}
      {activeSection === "viewcard" && (
        <div>
          <ViewCard />
        </div>
      )}
      {activeSection === "viewuser" && (
        <div>
          <UserInfo />
        </div>
      )}
    </div>
  </div>
  )
}

export default AdminPortal
