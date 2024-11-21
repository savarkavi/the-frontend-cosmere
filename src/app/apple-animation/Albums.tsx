"use client";

import AlbumRow from "./AlbumRow";

const Albums = () => {
  return (
    <div className="bg-zinc-950 flex flex-col gap-8 -mt-[calc((100vh-500px)/2)] py-8 overflow-x-hidden">
      <div className="flex gap-6 w-full">
        <AlbumRow />
        <AlbumRow />
      </div>
      <div className="flex gap-6 w-full">
        <AlbumRow rowTwo />
        <AlbumRow rowTwo />
      </div>
    </div>
  );
};

export default Albums;
