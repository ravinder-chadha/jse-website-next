import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";

const WaysToDonate = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <HeadingTitle title="Ways to donate" subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque." className="mx-auto text-center" />
      <div className="flex md:items-center items-start md:justify-center  w-full overflow-x-auto justify-start md:gap-24 gap-12">
        <div className="flex flex-col h-full  items-center gap-12">
          <h3 className="md:text-2xl text-xl text-center flex items-center flex-col font-bold">Scan and Pay<span className='block w-32 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col items-center justify-center border h-full w-full border-jse-neutral-300  p-3 rounded-lg md:gap-8 gap-4">
            <Image src="/qr.png" className="md:w-[200px]  w-[200px] aspect-auto	  border-jse-neutral-300" width={1000} height={1000} alt="QR Code" />
            <Image src="/logosUPI.png" width={500} height={500} className="w-[500px] mt-2" alt="UPI" />
            <h2 className="font-bold text-xl mt-2">JollySE</h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-jse-neutral-400 text-lg font-medium">UPI ID</p>
              <p className="text-jse-neutral-400 text-lg font-light">Jollyse123@oksbi</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  gap-12">
          <h3 className="md:text-2xl text-xl  text-center flex items-center flex-col font-bold">Bank Transfer<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col bg-jse-primary-500 items-center justify-between h-full  border border-jse-neutral-300 p-6 rounded-lg md:gap-8 gap-4">
            <Image src="/bank.png" className="shadow-sm md:w-20  w-16 " width={100} height={100} alt="QR Code" />
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Account Holder name</h2>
              <p className="font-bold text-white">Person’s Name</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Bank branch</h2>
              <p className="font-bold text-white">Some chonk, Jalandhar 14403 </p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Account Number</h2>
              <p className="font-bold text-white">2000987177743323</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">IFSC code</h2>
              <p className="font-bold text-white">PUNB0717000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12">
          <h3 className="md:text-2xl text-xl  text-center flex items-center flex-col font-bold">Demand Draft<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col w-64 items-center justify-center border border-jse-neutral-300 p-6 rounded-lg gap-6">
            <Image src="/map.jpg" className="shadow-sm border border-jse-neutral-300 md:w-32 w-20 " width={150} height={150} alt="QR Code" />
            <div>
              <p className="text-jse-neutral-400 text-sm md:mb-4 mb-2 text-center font-light">Cheques and Demand Draftscan be withdrawn on the favour of </p>
              <p className="font-bold  text-base text-center">RAMAKRISHNA MISSION VIVEKANANDA EDUCATIONAL & RESEARCH INSTITUTE, Belur Math</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WaysToDonate;