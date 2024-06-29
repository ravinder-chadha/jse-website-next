import React from "react";
import HeadingTitle from "./common/HeadingTitle";
import SubSectionHeader from "./common/SubSectionHeader";
import Link from "next/link";

const TermsConditionsContent = () => {
  return (
    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
      <div>
        <HeadingTitle title="Terms and Conditions" subtitle="Last updated: 2024-01-13" className="mx-auto text-center" />
        <SubSectionHeader title="Refuse of Sacred Walk:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>Refund is only available on request and the request must be submitted at least one month before the start of the sacred walk.</li>
          <li>Amount spent on visa, service charges, etc. will be deducted from the total amount before refund.</li>
        </ul>
        <SubSectionHeader title="Refund policy for Online Donations:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>Donations and Subscriptions made online will not be refunded under any circumstances whatsoever.</li>
        </ul>
        <SubSectionHeader title="Refund policy for Offline Donations:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>Donations and Subscriptions made offline will not be refunded under any circumstances whatsoever.</li>
        </ul>

        <SubSectionHeader title="Additional Terms and Conditions:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>Sacred Walk reserves the right to cancel or postpone any sacred walk due to unforeseen circumstances.</li>
          <li>Sacred Walk is not responsible for any expenses incurred by participants due to cancellation or postponement of a sacred walk.</li>
          <li>Participants are responsible for their own health and safety during the sacred walk.</li>
          <li>Sacred Walk reserves the right to refuse participation to anyone who is deemed to be a risk to themselves or others.</li>
          <li>By participating in a sacred walk, participants agree to abide by all rules and regulations set forth by Sacred Walk.</li>
        </ul>
        <SubSectionHeader title="Code of Conduct:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>Participants are expected to conduct themselves in a respectful and responsible manner at all times.</li>
          <li>Participants must refrain from using offensive language, engaging in physical or verbal abuse, or engaging in any other behavior that may cause harm to others.</li>
          <li>Participants must respect the privacy of others and refrain from taking photographs or videos of others without their consent.</li>
          <li>Participants must follow all instructions given by Jollysoothingera staff and volunteers.</li>
        </ul>
        <SubSectionHeader title="Risk and Liability:" className="text-black bg-white-15" />
        <ul className="list-disc ml-8 py-4">
          <li>By participating in a sacred walk, participants agree to assume all risks associated with the walk.</li>
          <li>Jollysoothingera is not liable for any injuries, illnesses, or other damages that may occur during the walk.</li>
        </ul>
        <SubSectionHeader title="Governing Law:" className="text-black bg-white-15" />
        <p className="py-4">
          These terms and conditions shall be governed by and construed in accordance with the laws of India.
        </p>
        <SubSectionHeader title="Severability:" className="text-black bg-white-15" />
        <p className="py-4">
          If any provision of these terms and conditions is held to be invalid or unenforceable, such provision shall be struck from these terms and conditions and the remaining provisions shall remain in full force and effect.
        </p>
        <SubSectionHeader title="Entire Agreement:" className="text-black bg-white-15" />
        <p className="py-4">
          These terms and conditions constitute the entire agreement between Jollysoothingera and the participants and supersede all prior agreements, representations, and understandings between the parties.
        </p>
        <SubSectionHeader title="Waiver:" className="text-black bg-white-15" />
        <p className="py-4">
          No waiver of any provision of these terms and conditions shall be effective unless in writing and signed by both Jollysoothingera and the participant.
        </p>
        <SubSectionHeader title="Notices:" className="text-black bg-white-15" />
        <p className="py-4">
          All notices and other communications hereunder shall be in writing and shall be deemed to have been duly given when delivered in person, upon the second business day following deposit in the United States mail, postage prepaid, certified or registered, return receipt requested, addressed as follows:
        </p>
        <p className="py-4">
          If to Jollysoothingera:
        </p>
        <p className="py-4">
          223, New Laxmipura, Div no. 3, Jalandhar, Punjab, India, 144004
        </p>
        <p className="py-4">
          Either party may change its address for purposes of this Section by giving the other party written notice of such change.
        </p>
      </div>
    </div>
  );
};

export default TermsConditionsContent;