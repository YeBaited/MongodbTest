
function App() {

  return (
    <>
      <h1 className='text-2xl'>Baited's Private Posting Site</h1>

      <div className="justify-self-center w-1/4">
        <h1 className="text-center text-lg font-semibold font-mono">Create a post</h1>

        <div className="grid grid-cols-2 gap-1 border border-black p-1 justify-self-center">

          <h1 className="border-black border font-mono">Name:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Name" />

          <h1 className="border-black border font-mono">Title:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Title" />

          <h1 className="border-black border font-mono">Body:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Message" />

          <button className="border border-black">Post</button>
          <h1 className="font-mono">Waiting to be posted..</h1>
        </div>

      </div>

      <div className="flex p-5 justify-center">
          <div className="w-1/6 border border-black p-1 mx-2">
            <h1 className="text-center font-mono">TITLE</h1>
            <h1 className="text-center font-mono text-sm">By: AUTHOR</h1>

            <div className="w-full min-h-[5rem] border border-black">
              <h1 className="text-center font-mono">Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, </h1>
            </div>
          </div>

          <div className="w-1/6 border border-black p-1 mx-2">
            <h1 className="text-center font-mono">TITLE</h1>
            <h1 className="text-center font-mono text-sm">By: AUTHOR</h1>

            <div className="w-full min-h-[5rem] border border-black">
              <h1 className="text-center font-mono">Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, Text here, </h1>
            </div>
          </div>


      </div>
    </>
  )
}

export default App
