import MaskImage from "./common/MaskImage";

export default function Footer() {
  return (
    <>
      {/* Footer */}
    <div>
    <MaskImage source="/lib/images/Temple_above_footer.png" className="w-full" height="400px" />
    <div id="footer" className="">
      {/* Signup For Newsletter Section Of Footer */}
    <div className="bg-jse-neutral-900 w-full flex flex-row">
      <div className="flex basis-3/5 flex-col text-white p-10">
        <div className="text-2xl text-wrap">
          Sign Up for our newsletter
        </div>
        <div>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </div>
      </div>
      <div className="flex basis-2/5 flex-row text-white p-10 items-center justify-around">
        <input className="rounded-xl h-3/5 w-7/12 p-3 text-black" type="text" placeholder="Enter your email" />
        <button className="bg-jse-primary-500 p-3 w-4/12 rounded-xl">Notify Me</button>
      </div>
      <div></div>
    </div>
      {/* Contact Us Section Of Footer */}
    <div className="bg-jse-neutral-900 flex flex-row">
      <div className="basis-1/2 p-8">
      <img src="/lib/images/JSE_logo.png" className="w-1/3" alt="" />
      </div>
      <div className="basis-1/2 p-8">
      <div className="uppercase font-bold text-jse-neutral-400 pb-4 text-[13px]">Contact Us</div>
      <div className="flex flex-row gap-24">
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
    <div className="bg-jse-neutral-900 flex flex-row text-jse-neutral-400 p-4">
      <div className="flex flex-row w-2/5 justify-around text-[11px]">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Tax Exemption</p>
        <p>Jobs</p>
      </div>
      <div className="flex flex-row w-1/5 justify-end px-2 gap-4 text-[20px]">
      <i className="fab fa-facebook text-[#3b5998]"></i>
      <i className="fab fa-instagram text-[#e4405f]"></i>
      <i className="fab fa-twitter text-[#1da1f2]"></i>
      </div>
      <div className="flex flex-row w-2/5 justify-end pr-8 text-[13px]">
        <p>Copyright 2022-2023 - All Rights Reserved</p>
      </div>
    </div>
    </div>
    </div>
      {/* END Of Footer */}
    </>
  )
}