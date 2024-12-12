import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : { 1: false, 2: false, 3: false };
  });
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : { 1: [], 2: [], 3: [] };
  });
  const [activeCommentModal, setActiveCommentModal] = useState(null);
  const [editingComment, setEditingComment] = useState({ id: null, text: '' });

  const projects = [
    {
      id: 1,
      title: "Modern Portfolio",
      description: "Personal portfolio website built with React and Tailwind CSS",
      category: "web",
      image: "./images/projectImage/personal-portfolio.png",
      link: "https://www.mukeshyadav.info"
    },
    {
      id: 2,
      title: "Ormat Todolist Web App",
      description: "Full-stack Todolist Web App with React, Tailwind CSS, Node.js and MongoDB",
      category: "web",
      image: "./images/projectImage/ormat-todolist.png",
      link: "https://todo-list-seven-bay-50.vercel.app/"
    },
    {
      id: 3,
      title: "Reusify UI Library",
      description: "Reusify UI Library is a React UI library that provides a set of reusable components for building modern web applications.",
      category: "web",
      image: "./images/projectImage/reusify-ui.png",
      link: "https://reusify-ui.vercel.app/"
    }
  ];

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const filterProjects = (category) => {
    return category === 'all'
      ? projects
      : projects.filter(project => project.category === category);
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const handleComment = (projectId, commentText) => {
    const newComment = {
      id: Date.now(),
      text: commentText,
    };

    setComments((prevComments) => ({
      ...prevComments,
      [projectId]: [...prevComments[projectId], newComment],
    }));
  };

  const handleEditComment = (projectId, commentId, newText) => {
    setComments((prevComments) => ({
      ...prevComments,
      [projectId]: prevComments[projectId].map(comment =>
        comment.id === commentId ? { ...comment, text: newText } : comment
      ),
    }));
    setEditingComment({ id: null, text: '' });
  };

  const handleDeleteComment = (projectId, commentId) => {
    setComments((prevComments) => ({
      ...prevComments,
      [projectId]: prevComments[projectId].filter(comment => comment.id !== commentId),
    }));
  };

  const CommentModal = ({ projectId, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-brandDark-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Comments</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div id='commentBox' className="max-h-96 overflow-y-auto mb-4">
          {comments[projectId].length > 0 ? (
            comments[projectId].map((comment) => (
              <div
                key={comment.id}
                className="px-3 py-2 mb-2 bg-gray-50 dark:bg-brandDark-800 border dark:border-brandDark-700 rounded-lg"
              >
                {editingComment.id === comment.id ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      value={editingComment.text}
                      onChange={(e) => setEditingComment({ ...editingComment, text: e.target.value })}
                      className="outline-none w-full flex-1 p-1.5 border focus:border-emerald-500 dark:focus:border-emerald-500 rounded dark:bg-brandDark-700 dark:border-brandDark-600"
                      autoFocus
                    />
                    <div className='flex gap-2'>
                      <button
                        onClick={() => handleEditComment(projectId, comment.id, editingComment.text)}
                        className="text-white hover:text-white px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingComment({ id: null, text: '' })}
                        className="text-white hover:text-white px-2.5 py-1 bg-rose-500 hover:bg-rose-600 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start group">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{comment.text}</p>
                    <div className="flex gap-2 rounded-lg">
                      <button
                        onClick={() => setEditingComment({ id: comment.id, text: comment.text })}
                        className='group grid place-content-center h-6 w-6 p-1.5 rounded-md cursor-pointer border dark:border-brandDark-700/10 bg-gray-100 dark:bg-brandDark-700 hover:bg-gray-200 dark:hover:bg-brandDark-600 active:bg-rose-500'
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className='stroke-brandDark-800 dark:stroke-white' d="M16.5 3.5L20.5 7.5L7.5 20.5H3.5V16.5L16.5 3.5Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteComment(projectId, comment.id)}
                        className='group grid place-content-center h-6 w-6 p-1 rounded-md cursor-pointer bg-rose-500'
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className='stroke-white' d="M20.5001 6H3.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                          <path className='stroke-white' d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                          <path className='stroke-white' d="M9.5 11L10 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                          <path className='stroke-white' d="M14.5 11L14 16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                          <path className='stroke-white' d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#111827" strokeWidth="1.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">No comments yet</p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Add a comment..."
            className="outline-none w-full p-2.5 border focus:border-brandBlue-500 dark:focus:border-brandBlue-500 rounded-lg dark:bg-brandDark-800 dark:border-brandDark-700 dark:text-white"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                handleComment(projectId, e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-brandDark-950 text-brandDark-800 dark:text-brandDark-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>

          <div className="flex justify-center items-center gap-4 mb-12 bg-brandDark-100 dark:bg-brandDark-800 border dark:border-brandDark-950 w-fit mx-auto rounded-lg p-1">
            {['all', 'web', 'mobile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium border dark:border-brandBlue-500 transition-all
                  ${selectedTab === tab
                    ? 'bg-brandBlue-500 text-white dark:text-brandDark-100'
                    : 'text-brandDark-600 dark:text-brandDark-400 bg-brandDark-50 dark:bg-brandDark-900 border dark:border-brandDark-950 hover:bg-brandDark-200 dark:hover:bg-brandDark-950 hover:border-brandDark-200 dark:hover:border-brandDark-700'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects(selectedTab).map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-fit bg-white dark:bg-brandDark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-brandDark-800"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-brandDark-800 dark:text-brandDark-100">
                    {project.title}
                  </h3>
                  <NavLink to="https://github.com/dopemukesh" className='flex items-center justify-center border-4 border-brandDark-200 dark:border-brandDark-700/50 rounded-full'>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="./images/mukesh-yadav-pr-pic.webp"
                      alt="Contributor"
                    />
                  </NavLink>
                </div>

                <p className="text-sm text-brandDark-600 dark:text-brandDark-400 mb-4">
                  {project.description}
                </p>

                <div className="relative mb-4 rounded-xl overflow-hidden bg-brandDark-200 dark:bg-brandDark-800 border dark:border-brandDark-700 grid place-content-center" style={{ aspectRatio: '16 / 9' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* <div className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-brandDark-900"
                        src="https://via.placeholder.com/32"
                        alt="Contributor"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-brandDark-900"
                        src="https://via.placeholder.com/32"
                        alt="Contributor"
                      />
                    </div> */}
                    <button
                      className="mt-4 px-4 py-2 bg-brandBlue-500 text-white rounded-md hover:bg-brandBlue-600 transition-all"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <button
                      className={`flex items-center hover:text-gray-700 dark:hover:text-gray-300 ${likes[project.id] ? 'text-blue-500' : ''}`}
                      onClick={() => handleLike(project.id)}
                    >
                      {likes[project.id] ?
                        <svg className="w-5 h-5 mr-1 text-rose-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        :
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      }
                    </button>
                    <button
                      className="flex items-center hover:text-gray-700 dark:hover:text-gray-300"
                      onClick={() => setActiveCommentModal(project.id)}
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {comments[project.id].length}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeCommentModal && (
        <CommentModal
          projectId={activeCommentModal}
          onClose={() => setActiveCommentModal(null)}
        />
      )}
    </div>
  );
};

export default Projects;
