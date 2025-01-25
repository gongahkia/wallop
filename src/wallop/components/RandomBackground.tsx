"use client"

import { useState, useEffect } from "react"

const gifs = [
    "https://media4.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif?cid=6c09b952qh85h8c6a09kybi252h65tegp8nr9eav3th2to5y&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://i.gifer.com/1acc.gif",
    "https://i.pinimg.com/originals/ae/58/60/ae5860d2a834c1a68ec4d393303f3672.gif",
    "https://i.gifer.com/DRn.gif",
    "https://giffiles.alphacoders.com/115/115730.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5fpUTKwtDx_ECO938gO1JhMfCVijcWs3rw&s",
    "https://64.media.tumblr.com/1e187b6c839a15708e9a3561744d27eb/68543aa6f415f4b1-15/s640x960/fab3126d025aacc3b0bd6a766806f995f469b08e.gifv",
    "https://media3.giphy.com/media/arbHBoiUWUgmc/giphy.gif?cid=6c09b952ctdun8hb8f10n8kgu5g8qzvple8o98yb6lxn8q8s&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=6c09b95245t4p2rejc9knmkjw0geft3ib0sklvrm3q53tfxl&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://64.media.tumblr.com/bfc3f180716e14d507aa27d6a388a0d1/c5c4077451e25fcc-26/s540x810/fa65f8f5df3aa793b7ad48c8ad509c563743db58.gif",
    "https://i.pinimg.com/originals/1f/96/54/1f96544001ed6c41894a617db4b347df.gif",
    "https://i.pinimg.com/originals/17/d1/5d/17d15dbf4384e77a719dc7357af27105.gif",
    "https://i.pinimg.com/originals/25/26/ef/2526efff64206fbf674f07a4c6c51f38.gif",
    "https://media.tenor.com/EdV_frZ4e_QAAAAM/anime-naruto.gif",
    "https://i.pinimg.com/originals/a0/f4/cd/a0f4cd2a0e2d9c6a00ee4064c773e9da.gif",
    "https://media.tenor.com/ucmhE4FHoFcAAAAM/fight-smash.gif",
    "https://media.tenor.com/Y_4_saaGYwUAAAAM/jujutsu-kaisen-mahito.gif",
    "https://gifdb.com/images/high/sword-fight-gangsta-funimation-ktv9uqgd1l9ottrh.gif",
    "https://i.pinimg.com/originals/5d/63/5f/5d635fde79b165dc1cd2059968ec0538.gif",
    "https://media.giphy.com/media/gFYt7JTzRp22k/giphy.gif",
    "https://64.media.tumblr.com/1712a2e70d64eb9afea76b64449456b3/2bffe34aa76e57cc-cb/s540x810/cf2863e4f903718026f1da5d08d897742a51371b.gifv",
    "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAvS8JDXVKqk9Bz44FVoqz7c",
    "https://64.media.tumblr.com/d4ed8a7dfc4721f7ea22295cc090d686/9cbbd22f6d3a2adf-73/s500x750/1d0d83db45b98e1560e33ee7dca4ea3c655a6acb.gifv",
    "https://gifsec.com/wp-content/uploads/2022/09/demon-slayer-gif-1.gif",
    "https://gifsec.com/wp-content/uploads/2022/11/smooth-anime-gif-1.gif",
    "https://media.tenor.com/YfTGxykrl30AAAAM/cowboy-bebop-anime.gif",
    "https://www.kakuchopurei.com/wp-content/uploads/2020/02/niFWQVW.gif",
    "https://gifsec.com/wp-content/uploads/2022/11/smooth-anime-gif-20.gif",
    "https://giffiles.alphacoders.com/102/102616.gif",
    "https://i.pinimg.com/originals/df/17/94/df1794cb9e8a276a832556f5c2fb64b3.gif"
]

export function RandomBackground({ children }: { children: React.ReactNode }) {
  const [backgroundGif, setBackgroundGif] = useState("")

  useEffect(() => {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)]
    setBackgroundGif(randomGif)
  }, [])

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col">{children}</div>
    </div>
  )
}