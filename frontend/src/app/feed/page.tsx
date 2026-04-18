"use client";

import { PostCard } from "@/components/feed/PostCard";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from '@/frontend/public/icons/close.svg';
import LikeIcon from '@/frontend/public/icons/like.svg';
import CommentIcon from '@/frontend/public/icons/comment.svg';
import ShareIcon from '@/frontend/public/icons/share.svg';
import SaveIcon from '@/frontend/public/icons/bookmark.svg';
import ImageIcon from '@/frontend/public/icons/add-image.svg';
import SendIcon from '@/frontend/public/icons/send.svg';

export default function CreatePost({ profile_image }) {
  const [text, setText] = useState("");
  return (
    <section className="bg-[#1a1a1a] rounded-2xl border border-slate-800 shadow-lg p-4 flex flex-col gap-4">
      <div className="flex gap-4">
      <div className="size-10 rounded-full bg-cover bg-center">
        <Image
          src={profile_image}
          alt="Your profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <textarea
          className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder-slate-500 resize-none py-2 text-sm outline-none"
          placeholder="What's on your mind?"
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between border-t border-slate-800 pt-3">
        <button className="flex items-center gap-2 text-slate-400 hover:text-[#895af6] transition-colors text-sm font-medium">
          <ImageIcon />
          <span> Add Image</span>
        </button>
        <button className="bg-[#895af6] text-white px-6 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">Post</button>
      </div>
    </section>
  );
}

/*88888888888888888888888888888888888888888888888888888888*/
/*88888888888888888888888888888888888888888888888888888888*/
/*88888888888888888888888888888888888888888888888888888888*/


export default function PostCard({ username, image_profile, time, location, content, image, likes, comments, shares, priority = false }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const comments_data = [
    { id: 1, name: "Elena Rodriguez", text: "The texture here is incredible!", time: "15m", avatar: null },
    { id: 2, name: "Marcus Stone", text: "Are these available as prints?", time: "32m", avatar: null },
    { id: 3, name: "Sophia Lane", text: "The violet palette is everything 💜", time: "1h", avatar: null },
  
    { id: 4, name: "Liam Carter", text: "This is pure art 🔥", time: "2h", avatar: null },
    { id: 5, name: "Ava Bennett", text: "I love the colors here!", time: "3h", avatar: null }
  ];

  return (
    <article className="bg-[#1a1a1a] rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-cover bg-center">
            <Image
              src={image_profile}
              alt={`${username}'s profile picture`}
              width={40}
              height={40}
              className="rounded-full"
              priority={priority}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white">{username}</span>
            <span className="text-xs text-slate-500">{time} · {location}</span>
          </div>
        </div>
        <button className="text-slate-500 hover:text-slate-300">
          <CloseIcon />
          </button>
      </div>

      {/* Text Content */}
      {content && (<div className="px-4 pb-3">
        <p className="text-sm leading-relaxed text-slate-300">{content}</p>
      </div>)
      }

      {/* Image Content */}
      {image && (
        <div className="w-full overflow-hidden">
          <Image
            src={image}
            alt="Post image"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority={priority}
          />
        </div>
      )
      }

      {/* Action Bar */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            className={`flex items-center gap-2 text-slate-400 transition-colors cursor-pointer ${liked ? "text-[#895af6]" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            <span className="text-white text-[#895af6]"><LikeIcon /></span>
            <span className="text-xs font-bold">{likes}</span>
          </button>
          <button className={`flex items-center gap-2 text-slate-400 transition-colors cursor-pointer ${showComments ? "text-[#895af6]" : ""}`}
            onClick={() => setShowComments(!showComments)}
          >
            <span className="text-white text-[#895af6]"><CommentIcon /></span>
            <span className="text-xs font-bold">{comments}</span>
          </button>
          <button className="flex items-center gap-2 text-slate-400 transition-colors cursor-pointer">
            <span className="text-xs font-bold"><ShareIcon /></span>
            <span className="text-xs font-bold">{shares}</span>
          </button>
        </div>
        <button
          className={` text-slate-400 transition-colors cursor-pointer ${saved ? "text-[#895af6]" : ""}`}
          onClick={() => setSaved(!saved)}
        >
          <SaveIcon />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && 
        <div className="border-t border-slate-800 flex flex-col gap-4 p-4 bg-[#0f0f0f]">
          
          {/* Comment list */}
          <div className="flex flex-col gap-4">
            {comments_data.map((c) => (
              <div key={c.id} className="flex gap-3">
                <div className=" w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white shrink-0">{c.name[0]}</div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="px-3 py-2 rounded-2xl rounded-tl-none bg-[#242424]">
                    <span className="font-bold text-xs text-white block mb-0.5">{c.name}</span>
                    <p className="text-sm text-slate-400">{c.text}</p>
                  </div>
                  <div className="flex gap-4 text-[10px] font-bold text-slate-500 px-1">
                    <button className="uppercase tracking-wider transition-colors bg-[#64748b]">REPLY</button>
                    <span>{c.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comment input */}
            <div className="flex gap-3 items-center border-t border-slate-800 pt-4">
              <div className="w-9 h-9 rounded-full bg-slate-700 shrink-0">
              </div>
              <div className="flex-1 relative">
                <textarea
                  className="w-full border-none rounded-xl text-sm px-3 py-3 pr-12 resize-none placeholder-slate-500 text-slate-100 outline-none bg-[#242424] min-h-[44px] leading-[1.5]"
                  placeholder="Add a comment..."
                  rows={1}
                />
                <div className="absolute right-3 flex items-center gap-1 top-[45%] -translate-y-1/2">
                  <button className="text-[#895af6]"><SendIcon /></button>
                </div>
              </div>
            </div>
        </div>
      }

    </article>
  );
}



/*88888888888888888888888888888888888888888888888888888888*/
/*88888888888888888888888888888888888888888888888888888888*/
/*88888888888888888888888888888888888888888888888888888888*/



export default function FeedPage() {
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0f0f0f]">
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400/20 scrollbar-track-transparent">
                <div className="max-w-2xl mx-auto py-8 px-4 flex flex-col gap-8">
                    <CreatePost
                        profile_image="/images/2.jpeg"
                    />
                    <PostCard
                      username="@m.e.d_a.m.i.n.e"
                      image_profile="/images/2.jpeg"
                      time="2 hours ago"
                      location="Vancouver, BC"
                      content="Just finished this summer cardigan! Used a lightweight cotton blend from the local market. Perfect for breezy evenings. #knitting #handmade #summerstyle"
                      image="/images/tabi3a.jpeg"
                      likes="1,240"
                      comments="84"
                      shares="12"
                      priority={true}
                    />
                    <PostCard
                      username="@re.m.a"
                      time="5 hours ago"
                      image_profile="/images/2.jpeg"
                      location="Montreal, QC"
                      content="Had an amazing day exploring the city! Found some hidden gems and delicious food spots. #cityadventures #foodie"
                      image="/images/2.jpeg"
                      likes="980"
                      comments="50000000"
                      shares="8"
                    />
                    <PostCard
                      username="@s.a.m.i"
                      image_profile="/images/2.jpeg"
                      time="1 day ago"
                      location="Toronto, ON"
                      content=""
                      image=""
                      likes="1,500"
                      comments="120"
                      shares="20"
                    />
                </div>
            </div>
        </div>
    );
}
