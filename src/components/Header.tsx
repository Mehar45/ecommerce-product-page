const NAV_LINKS = [
  { text: "Collection", url: "#" },
  { text: "Men", url: "#" },
  { text: "Women", url: "#" },
  { text: "About", url: "#" },
  { text: "Contact", url: "#" },
]

export default function Header() {
  return (
    <header className="flex items-center border-b py-4">
      <div className="mr-8">
        <img src="assets/logo.svg" alt="Site logo" width={138} height={20} />
      </div>
      <nav className="mr-auto">
        <ul className="flex">
          {NAV_LINKS.map(link =>
            <li key={link.text}>
              <a href={link.url} className="group relative block py-4 px-2 mx-2">
                {link.text}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[hsl(26,100%,55%)] -translate-y-3 group-hover:translate-y-3 transition opacity-0 group-hover:opacity-100" />
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div className="flex items-center gap-6">
        <div>
          <img src="assets/icons/icon-cart.svg" alt="Cart icon" width={22} />
        </div>
        <div>
          <img src="assets/imgs/image-avatar.png" alt="Avatar" width={50} />
        </div>
      </div>
    </header>
  );
}