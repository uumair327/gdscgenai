import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { toast } from 'sonner';

const UploadHome = () => {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files);
            setFile(e.target.files[0]);
        }
    }

    const handleFileUpload = (e) => {
        e.preventDefault();
        if (!file) {
            return
        } else {
            console.log("File Uploaded");
            toast.success(`File Uploaded`, {
                invert: false,
                duration: 1200
            });
            setFile(null)
            e.target.reset();
        }
    }


return (
    <>
        <Navbar />
        <div className=' h-full'>
            <form className=' h-80 flex flex-col justify-center items-center w-full' onSubmit={handleFileUpload}>
                <label
                    className=" flex flex-col items-center justify-center w-4/5 h-3/4 border-2 border-red-400 border-dotted cursor-pointer"
                >
                    {(!file) &&
                        <span>
                            Upload File
                        </span>
                    }
                    <input
                        size={100}
                        className=" hidden"
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                    {file && <div>{file && `${file.name} - ${file.type}`}</div>}
                </label>
                <button
                    className=" mt-8 p-3 px-5 rounded-xl bg-red-200 text-slate-600 transition duration-100 ease-in cursor-pointer hover:bg-slate-600 hover:text-red-200 hover:transition hover:duration-100 hover:ease-out"
                    type="submit"
                >
                    Upload File
                </button>
            </form>
        </div>
    </>
)
}

export default UploadHome;