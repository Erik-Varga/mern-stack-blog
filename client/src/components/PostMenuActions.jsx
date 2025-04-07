import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { FaRegTrashAlt, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { RiFileMarkedFill, RiFileMarkedLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostMenuActions = ({ post }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const { isPending, error, data:savedPosts } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: () => async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
  
  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;
  
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: ()=> {
      toast.success("Post deleted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(`${import.meta.env.VITE_API_URL}/users/save`, 
        {

          postId: post._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    },
    onSuccess: ()=> {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleSave = () => {
    if (!user) {
      return navigate("/login")
    }
    saveMutation.mutate();
  };

  return (
    <div className="">
      <h1 className='mt-8 mb-2 text-sm font-medium'>Actions</h1>

      {isPending ? "Loading..." : error ? "Saved post fetching failed!" : 
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer" onClick={handleSave}>
        {saveMutation.isPending 
          ? isSaved 
          ? <RiFileMarkedLine className="text-2xl" /> 
          : <RiFileMarkedFill className="text-2xl" /> 
          : isSaved 
          ? <RiFileMarkedFill className="text-2xl" /> 
          : <RiFileMarkedLine className="text-2xl" />}
        <span>Save this post</span>
        {saveMutation.isPending && <span className='text-xs font2'>(in progress)</span>}
      </div>
      }

      {user && (post.user.username === user.username || isAdmin ) && (
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer" onClick={handleDelete}>
          <FaTrashAlt className="text-2xl" />
          <span>Delete this post</span>
          {deleteMutation.isPending && <span className='text-xs font2'>(in progress)</span>}
        </div>
      )}
    </div>
  )
}

export default PostMenuActions