import React, { FC, ReactNode } from 'react'
import { CContainer } from '@coreui/react'
import SIdebarComponent from '../Sideabar'
import Navbar from '../Navbar'

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="c-app">
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
              <CContainer fluid>
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