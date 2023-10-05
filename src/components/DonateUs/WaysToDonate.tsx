import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";

const WaysToDonate = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <HeadingTitle title="Ways to donate" subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque." className="mx-auto text-center" />
      <div className="flex items-center justify-center gap-24">

        <div className="flex flex-col items-center gap-12">
          <h3 className="text-2xl text-center flex items-center flex-col font-bold">Scan and Pay<span className='block w-32 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col items-center justify-center border border-jse-neutral-300 p-6 rounded-lg gap-8">
            <Image src="/qr.png" className="shadow-sm border border-jse-neutral-300" width={200} height={200} alt="QR Code" />
            <Image src="/logosUPI.png" width={200} height={200} alt="UPI" />
            <h2 className="font-bold text-xl">JollySE</h2>
            <p className="text-jse-neutral-400 text-lg font-light">@UPI_ID_HERE</p>
          </div>
        </div>



        <div className="flex flex-col items-center  gap-12">
          <h3 className="text-2xl text-center flex items-center flex-col font-bold">Bank Transfer<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col bg-jse-primary-500 items-center justify-between h-full  border border-jse-neutral-300 p-6 rounded-lg gap-8">
            <Image src="/bank.png" className="shadow-sm " width={100} height={100} alt="QR Code" />
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-base text-jse-neutral-200">Account Holder name</h2>
              <p className="font-bold text-white">Person’s Name</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-base text-jse-neutral-200">Bank branch</h2>
              <p className="font-bold text-white">Some chonk, Jalandhar 14403 </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-base text-jse-neutral-200">Account Number</h2>
              <p className="font-bold text-white">2000987177743323</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="font-bold text-base text-jse-neutral-200">IFSC code</h2>
              <p className="font-bold text-white">PUNB0717000</p>
            </div>
          </div>
        </div>




        <div className="flex flex-col items-center gap-12">
          <h3 className="text-2xl text-center flex items-center flex-col font-bold">Demand Draft<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col w-64 items-center justify-center border border-jse-neutral-300 p-6 rounded-lg gap-6">
            <Image src="/map.jpg" className="shadow-sm border border-jse-neutral-300" width={150} height={150} alt="QR Code" />
            <div>
            <p className="text-jse-neutral-400 text-sm mb-4 text-center font-light">Cheques and Demand Draftscan be withdrawn on the favour of </p>
            <p className="font-bold  text-base text-center">RAMAKRISHNA MISSION VIVEKANANDA EDUCATIONAL & RESEARCH INSTITUTE, Belur Math</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default WaysToDonate;