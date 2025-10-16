import React from 'react'

const notices =[
  {
    title: "Notice Title 1",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 2",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 3",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 4",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 5",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 6",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
  {
    title: "Notice Title 7",
    link:"#",
    date:"2025-10-16",
    type:"Others",
    fileType:"pdf",
    uploadedBy:"Admin"
  },
]
const Notice = () => {
  return (
    <div className='overflow-x-auto p-4 max-w-6xl mx-auto min-h-screen'>
      <table className='min-w-full border border-gray-200 divide-y divide-gray-200'>
        <thead className='bg-gray-100 '>
          <tr>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>#</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Notice Title</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Publish Date</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Notice Type</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>File Type</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Uploaded By</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {notices.map((notice,index)=>(
            <tr key={index}>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{index+1}.</td>
              <td className='px-4 py-2 text-[16px] text-blue-600 underline hover:text-blue-800'>
                <a href={notice.link} target='_blank'>{notice.title}</a>
              </td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.date}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.type}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.fileType}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.uploadedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Notice
