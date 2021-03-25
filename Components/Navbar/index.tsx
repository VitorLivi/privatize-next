import React, { useState, createContext } from 'react'
import { BaseNavbar } from './style'
import ModalProfile from './ModalProfile'
import NavLogin from './NavLogin'
import Logo from '../Logo'

import ModalContext from '../Modal/helpers/modalContext'

interface NavBarProps {
    router: {
        push: Function
    };
    user: Object
}

const navLoginStyle = {
    marginRight: '20px'
}

const logoStyle = {
    marginLeft: '20px'
}

const modalStyle = {
    width: '400px',
    height: '550px'
}


const Navbar: React.FC<NavBarProps> = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(true)

    const backToHome = () => {
        props.router.push('/')
    }

    return (
        <React.Fragment>
            <ModalContext.Provider value={setIsModalOpen}>
                <ModalProfile
                    modalProps={{
                        isModalOpen: isModalOpen,
                        modalStyle:{ ... modalStyle },
                    }}
                />
            </ModalContext.Provider>
            <BaseNavbar id='navbar'>
                <Logo
                    fontSize='25px' 
                    wf1000='18px' 
                    wf400='15px'
                    onClick={ backToHome }
                    style={ logoStyle } />
                <NavLogin
                    setIsModalOpen={ setIsModalOpen } 
                    user={ props.user }
                    style={ navLoginStyle }
                    router={ props.router }
                />
            </BaseNavbar>
        </React.Fragment>
    )
}

export default Navbar;
