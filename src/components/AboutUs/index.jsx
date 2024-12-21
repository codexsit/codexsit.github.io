import Marquee from 'react-fast-marquee'
import Card from '@/components/Card';

export default function AboutSection() {
  const images1 = [
    { src: '/placeholder.svg?height=250&width=250', id: 'image1-1' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image1-2' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image1-3' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image1-4' }
  ];

  const images2 = [
    { src: '/placeholder.svg?height=250&width=250', id: 'image2-1' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image2-2' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image2-3' },
    { src: '/placeholder.svg?height=250&width=250', id: 'image2-4' }
  ];

  return (
    <>
      <section className="relative min-h-fit bg-secondary-dark text-white py-12 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-4 -left-1 w-8 h-8 bg-white rounded-full opacity-100" />
      <div className="absolute -top-2 right-20 w-20 h-20 bg-primary-dark rounded-full opacity-100 z-10" />
      <div className="max-w-full mx-auto px-24 relative z-20">
        <h1 
          className="text-secondary-dark shadow-black font-poppins font-extrabold text-4xl md:text-6xl lg:text-8xl mb-12 relative z-20" 
          style={{
            WebkitTextStroke: '2px #737373'
          }}
        >
          ABOUT US
        </h1>
        
        <div className="mb-16 max-w-full relative">
          <p className="text-xl md:text-3xl font-poppins font-bold leading-relaxed">
            <span className="text-text-aboutuslight">Codex is the coding club at </span>
            <span className="text-text-aboutusorange">Symbiosis Institute of Technology</span>
            <span className="text-text-aboutuslight"> that brings together students passionate about technology and programming. Our club is committed to creating an engaging environment </span>
            <span className="text-text-aboutusdark">where members can learn, collaborate, and grow their coding expertise through a variety of activities and events.</span>
          </p>
          <button type="button" className="absolute -bottom-6 right-0 text-xl underline text-text-aboutuslight hover:text-text-light transition-colors">
            Know More
          </button>
        </div>
      </div>
    </section>
    <div className="space-y-8 w-full px-0">
      <div className="absolute bottom-0 -right-2 w-24 h-24 bg-white rounded-full opacity-100" />
          <Marquee
            gradient
            gradientColor={[28, 28, 28]}
            speed={40}
            className="overflow-hidden w-full"
          >
            {images1.map((image) => (
              <Card key={image.id} className="mx-4 overflow-hidden bg-zinc-800 border-zinc-700">
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </Marquee>

          <Marquee
            gradient
            gradientColor={[28, 28, 28]}
            speed={40}
            direction="right"
            className="overflow-hidden w-full"
          >
            {images2.map((image) => (
              <Card key={image.id} className="mx-4 overflow-hidden bg-zinc-800 border-zinc-700">
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </Marquee>
        </div>
    </>
  );
}