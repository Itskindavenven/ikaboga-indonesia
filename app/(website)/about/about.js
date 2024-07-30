import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Padukuhan Bengle, Kalurahan Pucung.l</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
      <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      <h1 className="text-4xl font-bold">Tentang Desa Bengle</h1>
      <p>
        Desa Bengle berada di Kalurahan Pucung Kapanewon Girisubo Kabupaten Gunung Kidul Provinsi Daerah Istimewa Yogyakarta. Desa ini dipimpin oleh Wagiya.
      </p>
      <p>
        Website ini dibuat oleh Bonaventura Octavito Cahyawan sebagai program kerja kuliah kerja nyata Universitas Atma Jaya Yogyakarta periode 85.
      </p>
      <h2 className="text-3xl font-bold mt-8">Keindahan Alam Desa Bengle</h2>
      <p>
        Desa Bengle dikenal dengan keindahan alamnya yang memukau. Terletak di antara perbukitan yang hijau dan subur, desa ini menawarkan pemandangan alam yang spektakuler. Hutan-hutan yang rimbun, sungai-sungai yang jernih, dan sawah-sawah yang terhampar luas menciptakan suasana yang damai dan menenangkan.
      </p>
      <p>
        Berjalan-jalan di sekitar desa, Anda akan menemukan banyak spot foto yang instagrammable. Selain itu, keindahan alam Desa Bengle juga dapat dinikmati melalui berbagai kegiatan outdoor seperti hiking, camping, dan bird watching. Setiap sudut desa ini menyimpan pesona alam yang siap memanjakan mata dan menyegarkan pikiran.
      </p>
      <h2 className="text-3xl font-bold mt-8">Kearifan Lokal dan Budaya</h2>
      <p>
        Selain keindahan alam, Desa Bengle juga kaya akan kearifan lokal dan budaya. Masyarakat Desa Bengle sangat menjaga tradisi dan adat istiadat yang telah diwariskan dari generasi ke generasi. Upacara adat, kesenian tradisional, dan kuliner khas desa adalah sebagian dari warisan budaya yang masih dilestarikan hingga saat ini.
      </p>
      <p>
        Setiap tahunnya, Desa Bengle mengadakan berbagai festival dan acara budaya yang menarik minat banyak wisatawan. Acara-acara ini tidak hanya menjadi sarana hiburan, tetapi juga menjadi momen penting untuk mempererat hubungan antarwarga dan memperkenalkan budaya desa kepada dunia luar.
      </p>
      <h2 className="text-3xl font-bold mt-8">Potensi Ekonomi dan Pertanian</h2>
      <p>
        Desa Bengle memiliki potensi ekonomi yang cukup besar, terutama di bidang pertanian dan peternakan. Sebagian besar masyarakat desa menggantungkan hidupnya dari hasil pertanian seperti jagung, singkong, dan kacang tanah. Selain itu, peternakan sapi dan kambing juga menjadi sumber pendapatan utama bagi banyak keluarga di desa ini.
      </p>
      <p>
        Produk-produk pertanian dan peternakan dari Desa Bengle dikenal berkualitas tinggi. Hal ini tidak lepas dari dedikasi para petani dan peternak yang selalu menjaga kualitas dan keaslian produk mereka. Dengan adanya website ini, kami berharap dapat membantu memasarkan produk-produk tersebut ke pasar yang lebih luas.
      </p>
      <h2 className="text-3xl font-bold mt-8">Komitmen untuk Masa Depan</h2>
      <p>
        Kami di Desa Bengle berkomitmen untuk terus melestarikan keindahan alam dan kearifan lokal yang ada. Kami juga berusaha untuk meningkatkan kesejahteraan masyarakat desa melalui berbagai program pembangunan dan pemberdayaan. Salah satu upaya kami adalah dengan memanfaatkan teknologi untuk mempromosikan desa dan potensinya.
      </p>
      <p>
        Melalui website ini, kami ingin menyebarkan informasi dan berita terbaru tentang Desa Bengle. Kami juga berharap dapat membangun jaringan dengan komunitas lokal, pemerintah, dan pihak-pihak lain yang memiliki kepedulian terhadap pembangunan desa. Kami percaya bahwa dengan kerjasama dan dukungan dari berbagai pihak, Desa Bengle dapat berkembang menjadi desa yang lebih maju dan sejahtera.
      </p>
      <p>
        Terima kasih telah mengunjungi website kami. Kami berharap Anda dapat merasakan keindahan dan keunikan Desa Bengle melalui setiap halaman yang ada di situs ini. Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut tentang desa kami, jangan ragu untuk <Link href="/contact">menghubungi kami</Link>. Kami siap menyambut Anda dengan tangan terbuka.
      </p>
      </div>
    </Container>
  );
}
