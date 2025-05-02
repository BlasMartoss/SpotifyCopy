import React from "react";

function Artist({ artist, songImage, songTitle }) {
  const truncateDescription = (description) => {
    if (description.length > 100) {
      return description.slice(0, 150) + "...";
    }
    return description;
  };

  return (
    <div className="pt-[50px] flex justify-center flex-col items-center text-start gap-4">
      <div className="mb-5">
        <img
          src={songImage}
          alt="Imagen Canción"
          className="h-[300px] rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-2">{songTitle}</h2>
        <p className="text-[#b3b3b3]">{artist.name}</p>
      </div>

      <div className="flex flex-col items-center w-[300px] rounded-[5px] bg-[#121212] overflow-hidden">
        <div className="relative">
          <p className="absolute top-2 left-4 text-white font-bold text-[16px]">
            Acerca del artista
          </p>
          <img
            src={artist.image}
            alt="Imagen Canción"
            className="h-[150px] w-[300px] object-cover"
          />
        </div>
        <div className="py-2 bg-[#282828] px-4">
          <h2 className="text-[20px] font-bold mb-4">{artist.name}</h2>
          <p className="text-[15px] font-semibold text-[#b3b3b3]">
            {artist.monthlyListeners} oyentes mensuales
          </p>
          <p className="text-[13px] font-semibold text-[#b3b3b3] mt-2">
            {truncateDescription(artist.description)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Artist;
