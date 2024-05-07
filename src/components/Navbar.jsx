import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


    const navigate = useNavigate();

    const items = ["home", "about", "contact"]

  return (
    <>
        <section className=' h-full w-full border-b shadow-md shadow-red-200'>
            <nav className=' flex flex-row justify-between w-full p-2'>
                <div className=' w-fit flex flex-row gap-8 justify-center items-center'>
                    <img 
                    className=' h-full w-full'
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FS%2Fsomaiya-vidyavihar-university-logo-13C717072D-seeklogo.com.png&f=1&nofb=1&ipt=4fa6695b50cd6ff28549d75751498d7641f7e6740a0117731044ddecf826d107&ipo=images" 
                    alt="Somaiya Logo" />
                    <span className=' w-full'>
                        GDSC x GenAI
                    </span>
                </div>
                <div className=' w-fit flex justify-evenly pr-6'>
                    <ul className=' flex flex-row justify-center gap-80 items-center align-middle'>
                        {items.map((key) => 
                            <li
                            key={key}
                            className=' text-black cursor-pointer text-xl transition duration-100 hover:text-red-500 hover:transition hover:duration-100'
                            onClick={() => navigate(`/${key}`)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </li>)}
                    </ul>
                </div>
            </nav>
        </section>
    </>
  )
}

export default Navbar;