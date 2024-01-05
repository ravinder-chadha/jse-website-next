import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";

const WaysToDonate = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">

      <HeadingTitle title="Ways to donate" subtitle="We accept donations via UPI, Bank transfer, DD, and Cheque." className="mx-auto text-center" />

      <div className="flex md:flex-row flex-col place-content-center md:gap-16 gap-12 w-full ">

        <div className="flex flex-col place-items-center gap-12">
          <h3 className="md:text-2xl text-xl text-center flex items-center flex-col font-bold">Scan and Pay<span className='block w-32 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col items-center justify-center border  border-jse-neutral-300  p-3 rounded-lg">
            <Image src="/lib/donate/qrcode.png" className="w-64 h-64 border-jse-neutral-300" width={1000} height={1000} alt="QR Code" />
            <Image src="/upi.png" width={1000} height={1000} className=" h-6 w-56 mt-2" alt="UPI" />
            <h2 className="font-bold text-xl my-4">Jollys Soothing Era</h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-jse-neutral-400 text-lg font-medium">UPI ID</p>
              <p className="text-jse-neutral-400 text-lg font-light">@jollyssoothingera@kotak</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-6 place-items-center gap-12">
          <h3 className="md:text-2xl text-xl  text-center flex items-center flex-col font-bold">Bank Transfer<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col bg-[#E71B24] items-center justify-between h-full  border border-jse-neutral-300 p-6 rounded-lg md:gap-6 gap-4">
            <Image src="/lib/donate/banklogo.png" className="w-40 " width={800} height={800} alt="QR Code" />
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Account Holder name</h2>
              <p className="font-bold text-xl text-white">Jollys soothing era</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Bank Name</h2>
              <p className="font-bold text-xl text-white">Kotak mahindra bank</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">Account Number</h2>
              <p className="font-bold text-xl text-white">4513142721</p>
            </div>
            <div className="flex flex-col items-start w-full">
              <h2 className="md:font-bold font-semibold md:text-base text-sm text-jse-neutral-200">IFSC code</h2>
              <p className="font-bold text-xl text-white">KKBK0000256</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-6  place-items-center gap-12">
          <h3 className="md:text-2xl text-xl  text-center flex items-center flex-col font-bold">Demand Draft<span className='block w-24 mt-1 rounded-full h-0.5 bg-jse-primary-200' />
          </h3>
          <div className="flex flex-col w-64 items-center justify-center border border-jse-neutral-300 p-6 rounded-lg gap-6">
            <div>
              <p className="text-jse-neutral-400 mb-2 text-center">Cheques and Demand Draftscan be withdrawn on the favour of </p>
              <p className="font-bold text-center">Jollys Soothing Era <br />N.B 223, New Laxmipura, Jalandhar, 144004</p>
            </div>
            <Image src="/lib/donate/map.jpg" className="shadow-sm border border-jse-neutral-300 w-56 rounded-md " width={150} height={150} alt="QR Code" />
          </div>
        </div>
      </div>


    </div>
  )
}
export default WaysToDonate;