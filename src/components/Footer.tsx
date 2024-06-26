import MaskImage from "./common/MaskImage";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div>
        <MaskImage source="/lib/images/Temple_above_footer.png" className="w-full" />
        <div id="footer" className="">
          {/* Signup For Newsletter Section Of Footer */}
          <div className="bg-jse-neutral-900 w-full flex flex-col md:flex-row">
            <div className="flex flex-col  basis-3/5  text-white gap-4 md:p-10 py-8 px-4">
              <div className="md:text-2xl text-xl  text-wrap">
                Sign Up for our newsletter
              </div>
              <div className="md:text-xl text-lg">
              Cheer up as we work regularly to make people believe again in the good of humanity. 
              </div>
            </div>
            <div className="flex basis-2/5 flex-row text-white md:p-10 px-8  pb-4  items-center justify-around">
              <input className="rounded-xl h-7/12 w-7/12 p-3 text-black" type="text" placeholder="Enter your email" />
              <button className="bg-jse-primary-500 md:p-4 p-3 h-7/12 w-4/12 rounded-xl">Notify Me</button>
            </div>
            
          </div>
          {/* Contact Us Section Of Footer */}
          <div className="bg-jse-neutral-900 flex md:flex-row flex-col">
            <div className="md:block hidden basis-1/2 p-8">
              <Image src="/lib/images/JSE_logo.png" className="w-1/3" alt="" width={1000} height={1000} />
            </div>
            <div className="basis-1/2 py-8 px-4">
              <div className="uppercase font-bold text-jse-neutral-400 pb-4 text-[13px]">Contact Us</div>
              <div className="flex flex-row md:gap-24 gap-8">
                <div>
                  <div className="font-bold text-white text-[16px]">Delhi</div>
                  <div className="text-jse-neutral-400 pt-4 pb-4 text-[16px]">114 East Moti Bagh, Sarai Rohila</div>
                  <div className="font-bold text-white text-[13px]">+91 0181 500 4127</div>
                </div>
                <div>
                  <div className="font-bold text-white text-[16px]">Jalandhar</div>
                  <div className="text-jse-neutral-400 pt-4 pb-4">223, New Laxmipura, Div no.3, Jalandhar, Punjab, India, 144004</div>
                  <div className="font-bold text-white text-[13px]">+91 921 622 0510</div>
                </div>
              </div>
            </div>
          </div>
          {/* Terms And Conditions Section Of Footer */}
          <div className="bg-jse-neutral-900 flex md:flex-row justify-between flex-col text-jse-neutral-400 p-4">
            <div className="flex flex-row items-stretch justify-between md:w-3/5 w-full">
            <div className="flex md:flex-row flex-col md:w-3/5 md:pl-4  w-full justify-between  text-[11px]">
              <Link href="/privacy-policy">
              <p>Privacy Policy</p>
              </Link>
              <Link href="/terms-conditions">
              <p>Terms and Conditions</p>
              </Link>
              <p>Tax Exemption</p>
              <p>Jobs</p>
            </div>
            <div className="flex md:flex-row flex-col md:w-1/5 w-full md:items-start items-end  justify-evenly px-2 gap-4 text-[20px]">
              <Link href="https://www.facebook.com/jollysoothingera/">
              <i className="fab fa-facebook text-[#3b5998]"></i> 
              </Link>
              <Link href="https://www.instagram.com/jollysoothingera/">
              <i className="fab fa-instagram text-[#e4405f]"></i>
              </Link>
              <Link href="https://youtube.com/@jollysoothingera?si=roDM9dIlD0a2lZzM">
              <i className="fab fa-youtube text-[#c4302b]"></i>
              </Link>
            </div>
            </div>
            <div className="flex flex-row md:w-2/5 w-full md:justify-end justify-center md:pr-8 pr-0 md:pt-0 pt-4 text-[13px]">
              <p>Copyright 2022-2023 - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
      {/* END Of Footer */}
    </>
  )
}
