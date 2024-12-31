import React from 'react';
import { GrDocumentUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai"; 
import { useDispatch } from 'react-redux';
import { deletePostAction, updatePostAction } from '../redux/actions/post';

const HomeCard = ({ post }) => {
const dispatch = useDispatch()

    const deletePost = (id) => {
dispatch(deletePostAction(id))
      
    };

    const updatePost = (id) => {
        dispatch({type:"MODAL", payload:{open: true , updateId: id}})
    };
  return (
    <div className="relative w-1/3 border p-3 rounded-md bg-gray-50 m-2">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500 m-3">
          {new Date(post?.createdAt).toLocaleString()}
        </span>
      </div>
      <div className="absolute top-0 right-0 flex items-center space-x-3">
        <AiOutlineDelete onClick={()=>deletePost(post._id)}
        size={24} className='bg-red-500 rounded-full text-white p-1 cursor-pointer ' /> 
        <GrDocumentUpdate onClick={()=>updatePost(post._id)}
        size={24}className='bg-red-500 rounded-full text-white p-1 cursor-pointer '/>
      </div>
    </div>
  );
};

export default HomeCard;
