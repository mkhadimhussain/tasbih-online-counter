import Image from "next/image";

// Array with the paths to 99 images
const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
    "/images/27.jpg",
    "/images/28.jpg",
    "/images/29.jpg",
    "/images/30.jpg",
    "/images/31.jpg",
    "/images/32.jpg",
    "/images/33.jpg",
    "/images/34.jpg",
    "/images/35.jpg",
    "/images/36.jpg",
    "/images/37.jpg",
    "/images/38.jpg",
    "/images/39.jpg",
    "/images/40.jpg",
    "/images/41.jpg",
    "/images/42.jpg",
    "/images/43.jpg",
    "/images/44.jpg",
    "/images/45.jpg",
    "/images/46.jpg",
    "/images/47.jpg",
    "/images/48.jpg",
    "/images/49.jpg",
    "/images/50.jpg",
    "/images/51.jpg",
    "/images/52.jpg",
    "/images/53.jpg",
    "/images/54.jpg",
    "/images/55.jpg",
    "/images/56.jpg",
    "/images/57.jpg",
    "/images/58.jpg",
    "/images/59.jpg",
    "/images/60.jpg",
    "/images/61.jpg",
    "/images/62.jpg",
    "/images/63.jpg",
    "/images/64.jpg",
    "/images/65.jpg",
    "/images/66.jpg",
    "/images/67.jpg",
    "/images/68.jpg",
    "/images/69.jpg",
    "/images/70.jpg",
    "/images/71.jpg",
    "/images/72.jpg",
    "/images/73.jpg",
    "/images/74.jpg",
    "/images/75.jpg",
    "/images/76.jpg",
    "/images/77.jpg",
    "/images/78.jpg",
    "/images/79.jpg",
    "/images/80.jpg",
    "/images/81.jpg",
    "/images/82.jpg",
    "/images/83.jpg",
    "/images/84.jpg",
    "/images/85.jpg",
    "/images/86.jpg",
    "/images/87.jpg",
    "/images/88.jpg",
    "/images/89.jpg",
    "/images/90.jpg",
    "/images/91.jpg",
    "/images/92.jpg",
    "/images/93.jpg",
    "/images/94.jpg",
    "/images/95.jpg",
    "/images/96.jpg",
    "/images/97.jpg",
    "/images/98.jpg",
    "/images/99.jpg",
    "/images/100.jpg",
];

export default function Names99() {
    return (
        <main className="bg-gradient-to-r from-blue-200 to-cyan-200 min-h-screen pt-24 p-4">
            <div className="max-w-6xl mx-auto">
                {/* First image row */}
                <div className="mb-4 flex justify-center">
                    <Image
                        src={images[0]}
                        alt="Featured Name"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                    />
                </div>
                {/* Grid for remaining images */}
                <div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2"
                    style={{ direction: "rtl" }}
                >
                    {images.slice(1).map((src, index) => (
                        <div key={index + 1} className="p-1">
                            <Image
                                src={src}
                                alt={`Name ${index + 2}`}
                                width={200}
                                height={200}
                                className="rounded-md shadow-md hover:shadow-lg transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
