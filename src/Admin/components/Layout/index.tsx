import React, { FC, ReactNode, useCallback, useLayoutEffect, useState } from 'react'
import { CContainer } from '@coreui/react'
import SIdebarComponent from '../Sideabar'
import Navbar from '../Navbar'
import { api } from '@/api'

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(true)

  const handleRoute = useCallback(() => {
    api.authGet('user').then(data => {
      if (data?.success && data.user.role === "ADMIN") {
        setIsAdmin(true)
      } else if(data?.success && data.user.role === "USER") {
        setIsAdmin(false)
      }
    }).catch(err => console.log(err))
  }, [])

  useLayoutEffect(() => {
    handleRoute()
  }, [handleRoute])

  return (
    <div className="c-app" style={{ position: "fixed", width: "100%", height: "100vh" }}>
      {!isAdmin && <div className="container">
        <h1 className="text_title">You do not have permission</h1>
      </div>}
      <div className="c-wrapper">
        <div className="c-sidebar" id="sidebar">
          <SIdebarComponent />
        </div>
        <div className="c-body">
          <header className="c-header">
            <Navbar />
          </header>
          <div className="c-body">
            <main className="c-main">
              <CContainer fluid style={{ maxHeight: "90vh", overflow: "auto" }}>
                {children}
              </CContainer>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminLayout