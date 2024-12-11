import { useEffect, useState } from "react"

var listOfpost = [] as Array<any>
var debounce = false

var PostingCooldown = false

function tryAjax(_callfunct : Function){
  const a = new XMLHttpRequest()

  a.onreadystatechange = function(){
    if (!this.response) return
    if (this.status !== 200) return
    
    listOfpost = JSON.parse(this.response)
    _callfunct()
  }

  a.open("GET", "http://localhost:82/php/retrievePost.php")
  a.send();
};

function tryToPost(){
  if (PostingCooldown == true) return
  PostingCooldown = true

  const postButton = document.querySelector("#jPostButton") as HTMLButtonElement

  postButton.classList.add("bg-red-500")

  const name = document.querySelector("#jName") as HTMLInputElement
  const title = document.querySelector("#jTitle") as HTMLInputElement
  const body = document.querySelector("#jBody") as HTMLInputElement


  const a = new XMLHttpRequest()

  a.onreadystatechange = function(){
    if (this.status !== 200) return

  }

  const pass = {
    name : name.value,
    title : title.value,
    body : body.value
  } 

  console.log(pass)

  a.open("POST", "http://localhost:82/php/createPost.php")
  a.send(JSON.stringify(pass))

  setTimeout(function(){
    PostingCooldown = false
    postButton.classList.remove("bg-red-500")
  }, 5000)
}

function App() {
  const [currentPost, SetPost] = useState(Array)

  function loop() {
    let now = Date.now()
    debounce = true

    tryAjax(function(){
      if (!listOfpost){
        debounce = false
        return
      }

      for (let i = 0; i < listOfpost.length; i++){
        if (listOfpost[i]["title"] == ""){
          listOfpost[i]["title"] = "(No Title)"
        }
        if (listOfpost[i]["name"] == ""){
          listOfpost[i]["name"] = "(No name)"
        }
        if (listOfpost[i]["body"] == ""){
          listOfpost[i]["body"] = "(No body)"
        }

        listOfpost[i]["epochDate"] = Number(now.toString().slice(0, -3)) - listOfpost[i]["epochDate"] + "s"
      }
      
      SetPost(listOfpost)
    })

    setTimeout(() => {
      debounce = false
    }, 1000);
 }

 useEffect(() => {
    setInterval(loop, 3000);
  }, [])

  return (
    <>
      <h1 className='text-2xl'>Baited's Private Posting Site</h1>

      <div className="justify-self-center sm:w-1/4">
        <h1 className="text-center text-lg font-semibold font-mono">Create a post</h1>

        <div className="grid grid-cols-2 gap-1 border border-black p-1 justify-self-center">

          <h1 className="border-black border font-mono">Name:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Name" id="jName" />

          <h1 className="border-black border font-mono">Title:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Title" id="jTitle" />

          <h1 className="border-black border font-mono">Body:</h1>
          <input type="text" className="font-mono border border-black" placeholder="Enter your Message" id="jBody" />

          <button className="border border-black" id="jPostButton" onClick={tryToPost}>Post</button>
          <h1 className="font-mono">UwU - Baited</h1>
        </div>

      </div>

      <div className="flex flex-wrap-reverse flex-row-reverse justify-center">
        
        {currentPost.map((children : any) =>
          <div className="w-3/6 sm:w-1/6 border border-black p-1 sm:mx-2 mt-2" key={children["epochDate"].toString()}>
            <h1 className="text-center font-mono text-sm sm:text-xl">{children["title"]}</h1>
            <div className="grid grid-cols-2">

              <h1 className="text-center font-mono text-sm">By: {children["name"]}</h1>
              <h1 className="text-center font-mono text-sm">{children["date"]}</h1>
            </div>
              <h1 className="text-center font-mono text-sm">{children["epochDate"]}</h1>

            <div className="w-full min-h-[5rem] border border-black">
              <h1 className="text-center font-mono">{children["body"]}</h1>
            </div>
          </div>
        )}
      

      </div>
      
    </>
  )
}

export default App
