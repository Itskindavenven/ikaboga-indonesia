"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Carousel from "@/components/carousel.client";
import Draggable from "react-draggable";

export default function Post({ posts }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="relative hero-section bg-cover bg-center py-16" style={{ backgroundImage: "url('/img/hero-bengle-padukuhan.png')" }}>
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
        <Carousel />
        <Container>
          <div className="relative text-center text-white">
            <h1 className="text-4xl font-extrabold mb-4">Welcome To Padukuhan Bengle Website</h1>
            <p className="text-lg font-medium text-gray-200 mt-2">
            Padukuhan Bengle, yang terletak di Kalurahan Pucung, Kecamatan Girisubo, Kabupaten Gunung Kidul, Provinsi Daerah Istimewa Yogyakarta, adalah sebuah dusun yang memikat dengan pesona keindahan alamnya yang menakjubkan serta kearifan lokal yang tetap terjaga dengan baik. Terletak di tengah-tengah perbukitan yang hijau dan subur, Bengle menawarkan pemandangan alam yang mempesona dan suasana yang damai, menciptakan tempat yang sempurna untuk menikmati keindahan alam sambil merasakan kehidupan desa yang autentik.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/about"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
              >
                <span>View all Posts</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Warta Bengle
        </h1>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
          Kumpulan berita terbaru dan terkini dari Bengle
        </p>
      </div>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
              <Link
                href="/blog"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
              >
                <span>View all Posts</span>
              </Link>
            </div>
        </Container>
      )}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Interactive Image
        </h2>
        <div className="inline-block overflow-hidden border rounded-lg p-4 max-w-full mx-auto" style={{ width: "70vw", height: "auto", margin: "0 auto" }}>
          <Draggable>
            <img
              src="/img/PETA BENGLE_page-0001.jpg"
              alt="Gambar Interaktif"
              className={`cursor-${isDragging ? 'grabbing' : 'grab'}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                width: "100%",
                height: "auto",
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center',
                transition: 'transform 0.2s',
                margin: "0 auto"
              }}
            />
          </Draggable>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleZoomIn}
          >
            Zoom In
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleZoomOut}
          >
            Zoom Out
          </button>
        </div>
      </div>
    </>
  );
}
