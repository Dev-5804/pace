import { NavLink } from 'react-router-dom';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <NavLink to="/">
                    <img
                        src={ headerLogo }
                        alt='logo'
                        width={ 50 }
                        height={ 19 }
                    />
                </NavLink>
                <ul className='flex-1 flex justify-end mr-8 items-center gap-16 max-lg:hidden'>
                    { navLinks.map((item) => (
                        <li key={ item.label }>
                            <NavLink
                                to={ item.href }
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                                style={({ isActive }) => ({
                                    color: isActive ? 'coral' : 'inherit',
                                })}
                            >
                                { item.label }
                            </NavLink>
                        </li>
                    )) }
                </ul>
                <div className='hidden max-lg:block'>
                    <img
                        src={ hamburger }
                        alt="hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;
