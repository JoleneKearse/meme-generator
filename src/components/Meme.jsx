import meme from "/meme.png"

const Meme = () => {
  return (
    <form className="container form-ele">
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
        type="submit" className="flex-gap get-meme"
      >
        <p className="btn-text">Get a new meme image</p>
        <img src={meme} className="icon" alt="" />
      </button>
    </form>
  )
}

export default Meme