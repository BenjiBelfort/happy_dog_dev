import Image from 'next/image';

export default function Guirlande() {
  return (
    <div className='flex justify-center'>
      <Image
        src="/pattern/guirlande.png"
        alt="Guirlande décorative"
        width={500}
        height={500}
        className="drop-shadow-lg/30"
      />
    </div>
)}
