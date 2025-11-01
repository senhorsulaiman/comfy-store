import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const ComplexPaginationContainer = () => {

  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
 

  // const pages = Array.from({ length: pageCount }, (_, index) => {
  //   return index + 1
  // })
  const { search, pathname } = useLocation()
  const navigate = useNavigate();


  const handlePageChange = (pageNumber) => {
    // console.log(search)
    // console.log(pathname)
    // console.log(pageNumber)

    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)

  }
const addPageButton=({pageNumber,activeClass})=>{
  return (<button key={pageNumber} className={`btn btn-xs  sm:btn-md join-item  ${activeClass? 'bg-base-300 ' : ''}`} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>)
}
const renderPageButtons=()=>{
  const pageButtons=[]
  pageButtons.push(addPageButton({pageNumber:1,activeClass:page===1}))
  return pageButtons
}
if (pageCount < 2) return null
  return (
    <div className='mt-16 flex justify-end '>
      <div className="join ">
        <button className='capitalize btn btn-xs sm:btn-md border-none  join-item' onClick={() => {

          let prevPage = page - 1;
          if (prevPage < 1) prevPage = pageCount;
          handlePageChange(prevPage)
        }}>

          prev
        </button>
        {renderPageButtons}
        <button className='capitalize btn btn-xs sm:btn-md join-item' onClick={() => {

          let nextPage = page + 1;
          if (nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage)
        }}>

          next
        </button>
      </div>
    </div>
  )
}

export default ComplexPaginationContainer