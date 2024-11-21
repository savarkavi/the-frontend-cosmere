import Image from "next/image";

const headerLinks = [
  { id: 1, name: "Store" },
  { id: 2, name: "Watch" },
  { id: 3, name: "Music" },
  { id: 4, name: "TV" },
  { id: 5, name: "Albums" },
  { id: 6, name: "Artists" },
  { id: 7, name: "Charts" },
  { id: 8, name: "Songs" },
  { id: 9, name: "Trending" },
  { id: 10, name: "Support" },
];

const Header = () => {
  return (
    <>
      <div className="bg-stone-900 w-full h-12 flex justify-center items-center z-[999]">
        <div className="flex items-center justify-between gap-10 w-full max-w-[1000px] mx-auto">
          <div className="relative w-6 h-6">
            <Image src="/avocado.png" alt="avocado" fill />
          </div>
          <div className="text-gray-300 flex gap-12 text-sm">
            {headerLinks.map((link) => (
              <span key={link.id}>{link.name}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-stone-900 w-full p-2 sticky top-0 h-12 flex justify-center items-center z-[99]">
        <div className="flex justify-between items-center w-full max-w-[1000px] mx-auto">
          <h2 className="text-white text-2xl font-semibold">AvocadoMusic</h2>
          <button className="bg-white px-2 py-1 rounded-2xl text-sm">
            Listen now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
