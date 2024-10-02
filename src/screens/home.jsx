import React, { useEffect, useRef, useState } from 'react'
import { NavSliderShow } from '../components/navSliderShow';
import { BiMenu } from 'react-icons/bi';

const LandingPage = () => {
    const [reg, setReg] = useState(false);
    const sidebar = useRef(null);
    const openbar = useRef(null);
    const overleyClose = useRef(null);

    useEffect(() => {
        openbar.current.onclick = (e) => {
            sidebar.current.classList.toggle('sidebar-open');
            overleyClose.current.classList.toggle('ovr-open');
        }
        overleyClose.current.onclick = (e) => {
            sidebar.current.classList.toggle('sidebar-open');
            overleyClose.current.classList.toggle('ovr-open');
        }
    }, []);

    return (
        <div>
            {/* 
                Homepage (Landing)
                8 Characters 
                Velvet rope (Red Carpet)
                Background looks like a moview primiere
                Character Dressed and standing 
                Marquee in background stating "Best dream life meet our Avatar"
            */}
            <div className='r-app' style={{overflow:'hidden'}}>
                <header style={{height:"44px", backgroundColor:"#444"}}>
                    <nav className='navigation-dark flex items-center justify-between relative'>
                        <div className='pointer  font-xl logo px-2 py-2 text-center'>
                            Dream girls
                        </div>
                        <div id='openbar' ref={openbar} className='hidden-ls pointer  font-xl px-2 py-2'>
                            <BiMenu />
                        </div>
                        <div className='overlay-close' ref={overleyClose} id='overlay-close'></div>
                        <ul className='sidebar gap-2 py-2' ref={sidebar}>
                            <div className='hidden-ls my-4 px-2'>
                                <h1 className="sidelogo text-center">Dream <br />Girls</h1>
                            </div>
                            <li>
                                <a className='' href='/'>Home</a>
                            </li>
                            <li>
                                <a className="" href='/design'>Design</a>
                            </li>
                            <li>
                                <a className="" href='/community'>Community</a>
                            </li>
                            <li>
                                <a className="" href='/shop'>Shopping</a>
                            </li>
                            <li>
                                <a className="" href='/games'>Games</a>
                            </li>
                            <li>
                                <a className="">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {!reg ?
                    (
                        <div className='mx-auto flex justify-center mt-2 w-700' style={{minHeight:'605px' }}>
                            <div className="slider-container w-700 h-450">
                                <NavSliderShow setReg={setReg}/>
                            </div>
                        </div>
                    ) : (
                        <div class="h-full flex flex-col md:flex-row w-700 mx-auto items-center gap-2">
                            <div class="style-doll w-200 mx-auto centered">
                                <img src='/images/girl1.png' alt='' style={{ width: '380px' }} />
                            </div>
                            <form action="#" class="signup form w-300 rounded-lg mx-auto px-2 py-2 relative" style={{ border: '1px solid black' }}>
                                {/* <span style={{ top: ' -10px' }} class="absolute bg-white px-2">Welcome</span> */}
                                <div class="my-2">
                                    <label for="">Username</label>
                                    <input type="text" class="w-full outline outline-1 hover:shadow-xl rounded p-1" required />
                                </div>
                                <div class="my-2">
                                    <label for="">Age</label>
                                    <input type="text" class="w-full outline outline-1 hover:shadow-xl rounded p-1" required />
                                </div>
                                <div class="my-2">
                                    <label for="">Password</label>
                                    <input type="password" class="w-full outline outline-1 hover:shadow-xl rounded p-1" required />
                                </div>
                                <div class="my-2">
                                    <input type="checkbox" name="accept" id="accept" required /> I accept terms and conditions
                                </div>

                                <div class="my-2">
                                    <button type="submit" class="bg-indigo-500 shadow-lg shadow-indigo-500/50 w-full pointer p-2 rounded">Play!</button>
                                </div>
                                <a href='#' className='btn' onClick={() => setReg(false)}>Back</a>
                            </form>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default LandingPage