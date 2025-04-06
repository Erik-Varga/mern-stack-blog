import React, { useState, useEffect } from 'react'
import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaRegImage, FaVideo } from "react-icons/fa6";
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import Upload from "../components/Upload"

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};


const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);
  };

  const onError = (err) => {
    console.log(err)
    toast.error("Image upload failed!")
  };

  const onSuccess = (res) => {
    console.log(res)
    setCover(res)
  };

  const onUploadProgress = (progress) => {
    console.log(progress)
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  }

  return (
    <div className='h-full mt-5'>
      <h1 className='text-2xl text-gray-800 mb-5'>Create a New Post</h1>

      {/* form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">

        {/* image */}
        {/* <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-100">Add a cover image</button>
        </Upload> */}

        <IKContext
          publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          authenticator={authenticator}
        >
          <IKUpload
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
          // className='hidden'
          >

          </IKUpload>
        </IKContext>
        {/* {cover} */}

        {/* title */}
        <input type="text" name='title' placeholder='Enter a Title' className='text-3xl font-semibold bg-transparent outline-none' />

        {/* category */}
        <div className="flex items-center gap-4">
          <label htmlFor="" className='text-sm'>Choose a category:</label>
          <select name="category" id="" className='p-2 rounded-xl bg-white shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        {/* short description */}
        <textarea name="description" id="" placeholder='A Short Description' className='p-4 rounded-xl bg-white shadow-md' />

        {/* details */}
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-3">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              <FaRegImage />
            </Upload>

            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              <FaVideo />
            </Upload>
          </div>

          <ReactQuill
            theme='snow'
            className='flex-1 rounded-xl bg-white shadow-md'
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>

        {/* submit */}
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className='bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-xl mt-4 p-2 w-36 cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed'
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        <span className="flex font2 text-sm">
          {"Progress:" + progress}
          {mutation.isError && <span>{mutation.error.message}</span>}
        </span>
      </form>
    </div>

  )
}

export default Write