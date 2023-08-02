import logo from "/logo.png"

const Header = () => {
  return (
    <header>
      <div className="site-title">
        <img src={logo} className="logo" alt="" />
        <h1 className="title">Meme Generator</h1>
      </div>
      <h2 className="project">React Course - Project 3</h2>
    </header>
  )
}

export default Header