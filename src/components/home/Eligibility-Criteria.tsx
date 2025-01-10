import React from 'react'

type Props = {}

const EligibilityCriteria = (props: Props) => {
  return (
    <div className="container mx-auto p-6">
    {/* Heading */}
    <div className="text-center my-6">
      <h1 className="text-3xl font-bold ">
        Eligibility Criteria For Credit Cards for Business Owners in the UAE
      </h1>
    </div>

    {/* Description */}
    <p className=" text-center mb-4">
      Just like regular credit cards, business credit cards also come with their own eligibility requirements. Tabled below are the standard conditions:
    </p>

    {/* Table */}
    <div className="overflow-x-auto flex justify-center items-center">
<table className="min-w-[100%] bg-white border border-gray-300 rounded-md shadow-md text-center">
  <thead>
    <tr className="bg-[#f2f7ff] text-[#052f5f]">
      <th className="py-2 px-4 text-center border-b border-gray-300 w-1/2">Eligibility Criteria</th>
      <th className="py-2 px-4 text-center border-b border-gray-300 w-1/2 relative">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
        Requirements
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-[#505f79]'>
      <td className="py-2 px-4 text-start border-b border-gray-300">Age</td>
      <td className="py-2 px-4 text-start border-b border-gray-300 relative">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
        You must be at least 21 years old
      </td>
    </tr>
    <tr className='text-[#505f79]'>
      <td className="py-2 px-4 text-start border-b border-gray-300">Nationality</td>
      <td className="py-2 px-4 text-start border-b border-gray-300 relative">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>
        You must be either a UAE national or an expat
      </td>
    </tr>
  </tbody>
</table>
    </div>

  </div>

  )
}

export default EligibilityCriteria