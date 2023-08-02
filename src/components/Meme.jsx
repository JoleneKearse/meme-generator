import meme from "/meme.png"

const Meme = () => {
  return (
    <form className="container form-ele">
      <div className="input-box flex-between">
        <input type="text" name="" className="inputs" id="topTxt" />
        <input type="text" name="" className="inputs" id="btmTxt" />
      </div>
      <button type="submit" className="flex-vert-center get-meme">
        <p className="btn-text">Get a new meme image</p>
        <img src={meme} className="icon" alt="" />
      </button>
    </form>
  )
}

export default Meme