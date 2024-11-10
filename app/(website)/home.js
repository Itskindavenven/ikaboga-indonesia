"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Carousel from "@/components/carousel.client";
import Draggable from "react-draggable";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

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
      <Head>
        <title>IKABOGA INDONESIA - IKATAN AHLI BOGA INDONESIA </title>
        <meta name="description" content="Situs resmi IKABOGA INDONESIA (Ikatan Ahli Boga Indonesia)." />
        <meta name="keywords" content="IKABOGA, Ikatan Ahli Boga, Ikatan Ahli Boga Indonesia, Tata Boga, Indonesia" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative hero-section bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-pink-500 opacity-90"></div>
        <Carousel />
        <Container>
          <div className="relative text-center text-white">
            <h1 className="text-4xl font-extrabold mb-4 animate-fade-in mt-10">Selamat Datang di Website IKABOGA INDONESIA</h1>
            <p className="text-lg font-medium text-gray-200 mt-2 animate-fade-in">
              Ikatan Ahli Boga Indonesia (IKABOGA INDONENESIA) berdiri pada tanggal 3 Desember 1987 yang merupakan wadah tunggal Ahli Boga Indonesia. Pendirian ini merupakan realisasi dari gagasan Subkonsorsium Memasak dan Jasa Boga pada Direktorat Pendidikan Masyarakat Ditjen Diklusepora Departemen Pendidikan Nasional yang pada waktu itu dijabat oleh Bapak Prof. Dr. W.P. Napitupulu.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/about"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
              >
                <span>Learn More About</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-pink-400 tracking-tight animate-fade-in">
          WARTA IKABOGA INDONESIA
        </h1>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-2 animate-fade-in">
          Kumpulan berita terbaru dan terkini dari IKABOGA Indonesia
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
                className="animate-slide-up"
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" className="animate-slide-up" />
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

      <div className="py-16 bg-pink-500">
        <Container>
          <h2 className="text-3xl font-bold text-white text-center mb-8">PENGURUS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/senam.jpg" alt="Gallery Image 1" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Senam Pagi</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/jamu.jpg" alt="Gallery Image 2" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Pembuatan Jamu Tradisional</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/kegiatan balai desa.jpg" alt="Gallery Image 3" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan di Balai Desa</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/paud.jpg" alt="Gallery Image 4" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan PAUD</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/senam.jpg" alt="Gallery Image 1" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Senam Pagi</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/jamu.jpg" alt="Gallery Image 2" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Pembuatan Jamu Tradisional</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/kegiatan balai desa.jpg" alt="Gallery Image 3" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan di Balai Desa</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/paud.jpg" alt="Gallery Image 4" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan PAUD</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/senam.jpg" alt="Gallery Image 1" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Senam Pagi</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/jamu.jpg" alt="Gallery Image 2" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Pembuatan Jamu Tradisional</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/kegiatan balai desa.jpg" alt="Gallery Image 3" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan di Balai Desa</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/paud.jpg" alt="Gallery Image 4" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan PAUD</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/senam.jpg" alt="Gallery Image 1" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Senam Pagi</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/jamu.jpg" alt="Gallery Image 2" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Pembuatan Jamu Tradisional</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/kegiatan balai desa.jpg" alt="Gallery Image 3" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan di Balai Desa</p>
              </div>
            </div>

            <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <Image src="/img/paud.jpg" alt="Gallery Image 4" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
                <p>Kegiatan PAUD</p>
              </div>
            </div>
            
          </div>
        </Container>
      </div>

      
      {/* <div className="bg-gray-100 py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sumber Daya Bengle</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Peternakan Sapi dan Kambing</h3>
              <p className="text-gray-600">Desa Bengle memiliki peternakan sapi dan kambing yang menjadi salah satu sumber daya penting bagi masyarakat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Jagung</h3>
              <p className="text-gray-600">Jagung menjadi salah satu komoditas pertanian utama di Bengle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Singkong</h3>
              <p className="text-gray-600">Singkong juga merupakan tanaman penting yang dibudidayakan di desa Bengle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Kacang Tanah</h3>
              <p className="text-gray-600">Kacang tanah menjadi salah satu produk pertanian andalan yang diproduksi di Bengle.</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">What's their thought?</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-600">"Bengle adalah permata tersembunyi! Keindahan alam dan penduduk yang ramah membuat kunjungan kami tak terlupakan." - Jane Doe</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-600">"Kami menikmati pengalaman fantastis menjelajahi budaya dan alam Bengle. Sangat direkomendasikan!" - John Smith</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-10 text-center bg-gray-100 py-16">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Peta Administrasi Padukuhan Bengle
        </h2>
        <div className="inline-block overflow-hidden border rounded-lg p-4 max-w-full mx-auto relative" style={{ width: "50vw", height: "auto", margin: "0 auto" }}>
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
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={handleZoomIn}
              title="Zoom In"
            >
              <FaSearchPlus size={20} />
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={handleZoomOut}
              title="Zoom Out"
            >
              <FaSearchMinus size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-4">
          Kunjungi Kami di Google Maps
        </h2>
        <div className="relative w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.410591839587!2d110.7881752!3d-8.1674598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc741ad3a395f%3A0x9e6f94268dea20e1!2sBalai%20Padukuhan%20Bengle!5e0!3m2!1sen!2sid!4v1696430455925!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="shadow-lg rounded-lg"
          ></iframe>
        </div>
      </div>
    </> */}</>)}
    
