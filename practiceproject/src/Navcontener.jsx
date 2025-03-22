function Navcontener() {
    return (
      <nav className="bg-black text-white flex items-center justify-between  p-4">
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
        </div>
        <ul className="flex-1 flex justify-center items-center gap-10 text-xl font-bold">
          <li>    
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navcontener;