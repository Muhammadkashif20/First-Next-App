import React from 'react'

const Settings = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-4'>Settings</h1>
      <div className='gap-20 mt-10'>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Extensions</button>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Keyboard ShortCuts</button>
      </div>
    </div>
  ) 
}

export default Settings
