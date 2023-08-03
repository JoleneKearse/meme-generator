import { useState } from "react"
import meme from "/meme.png"
import memesData from "../memesData.js"

const Meme = () => {
  const [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage(e) {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeObj(prevMeme => ({
      ...prevMeme,
      randomImage: memesArray[randomNumber].url
    }))
  }

  return (
    <>
      <form className="form-ele">
        <div className="input-box flex-gap">
          <input
            type="text"
            name=""
            placeholder="Top text"
            className="inputs"
            id="topTxt"
          />
          <input
            type="text"
            placeholder="Bottom text"
            name=""
            className="inputs"
            id="btmTxt"
          />
        </div>
        <button
          type="submit" className="flex-gap get-meme" onClick={getMemeImage}
        >
          <p className="btn-text">Get a new meme image</p>
          <img src={meme} className="icon" alt="" />
        </button>
      </form>
      <div className="meme-output">
        {memeObj.randomImage && <img src={memeObj.randomImage} className="meme" alt="" />}
      </div>
    </>
  )
}

export default Meme