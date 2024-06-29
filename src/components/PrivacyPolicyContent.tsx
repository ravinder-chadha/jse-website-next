import React from "react";
import HeadingTitle from "./common/HeadingTitle";
import SubSectionHeader from "./common/SubSectionHeader";
import Link from "next/link";

const PrivacyPolicyContent = () => {
  return (
    <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
      <div>
      <HeadingTitle title="Privacy Policy" subtitle="Last updated: 2024-01-13" className="mx-auto text-center" />
      < SubSectionHeader title="Introduction:" className="text-black bg-white-15" />
      <p className="py-4">
        Jolly&apos;s Soothing Era does not sell or share email addresses and personal
        information of visitors to other companies or organizations.
      </p>
      <SubSectionHeader title="Privacy:" className="text-black bg-white-15" />
      <p className="py-4">
        Our Web host&apos;s server automatically recognizes only the domain name, but
        not the individual email address, of visitors to our website.
      </p>
      < SubSectionHeader title="Information Collection and Use:" className="text-black bg-white-15" />
      <p className="py-4">
        Jolly&apos;s Soothing Era collects from visitors to our website their domain
        name (but not the individual email address), aggregate information on the
        Web pages that they access or visit, and information volunteered by the
        visitor, such as survey responses and registrations. (The individual email
        addresses of those who send us emails are available to us, but these are
        used only for the purpose specified in the email communication.)
      </p>
      < SubSectionHeader title="Information Sharing and Disclosure:" className="text-black bg-white-15" />
      <p className="py-4">
        The information we collect is used for internal review to improve the
        content and layout of our website, to customize the content and/or layout
        of the website for individual visitors, and to notify visitors about
        updates to our website. This information is not shared with, or sold to,
        other organizations for commercial or other purposes.
      </p>
      < SubSectionHeader title="Cookies:" className="text-black bg-white-15" />
      <p className="py-4">
        We use cookies to store visitors&apos; preferences, to record activity at the
        website to provide better service when visitors return to our site, to
        ensure that visitors are not repeatedly sent the same ads, and to customize
        Web page content based on visitors&apos; browser type or other information that
        the visitor sends.
      </p>
      < SubSectionHeader title="Email:" className="text-black bg-white-15" />
      <p className="py-4">
        If you do not want to receive email from us, let us know by writing to us at
        the below email address. Please specify NO EMAIL in your email subject.
      </p>
      < SubSectionHeader title="Notification of Changes:" className="text-black bg-white-15" />
      <p className="py-4">
        On-line Communications: If you provide us with your postal address online,
        you will receive only the information that you specify. If you provide
        your telephone number online, you will receive telephone contact only
        regarding orders you have placed (or registrations) online.
      </p>
      < SubSectionHeader title="Access to Information:" className="text-black bg-white-15" />
      <p className="py-4">
        Jolly&apos;s Soothing Era reserves the right to change our policy regarding how
        visitor information is used. If our information usage policy changes, the
        changes will be posted here. We will use for the new purposes only data
        collected after the policy change. If you are concerned about how your
        information will be used, check this privacy policy for changes when you
        visit our website.
      </p>
      < SubSectionHeader title="Contacting the Website:" className="text-black bg-white-15" />
      <p className="py-4">
        Upon written request, we will provide you with the information (e.g., name,
        address, phone number) that we maintain about you. Consumers can request
        this information by writing to the email address or postal address provided
        above. Also can request to remove all their information from our database.
      </p>
      < SubSectionHeader title="Wavier:" className="text-black bg-white-15" />
      <p className="py-4">
        Jolly&apos;s Soothing Era is not responsible for the privacy practices or the
        content of websites to which we link.
      </p>
      < SubSectionHeader title="Liable:" className="text-black bg-white-15" />
      <p className="py-4">
        Jolly&apos;s Soothing Era is not liable for any damages, including incidental
        and consequential damages, which may arise from the use of information
        collected by us.
      </p>
      < SubSectionHeader title="Security:" className="text-black bg-white-15" />
      <p className="py-4">
      When we request certain types of sensitive information, such as health or financial information, they will be performed using a secure server. Other transactions regarding sensitive information will also be performed using a secure server. 
      </p>
      < SubSectionHeader title="Legal Disclaimer:" className="text-black bg-white-15" />
      <p className="py-4">
        We may disclose personal information when required by law or in the good
        faith belief that such action is necessary in order to conform to the
        edicts of the law or comply with a legal process served on our website.
      </p>
      < SubSectionHeader title="Links to Other Sites:" className="text-black bg-white-15" />
      <p className="py-4">
        Our website may contain links to other sites. Jolly&apos;s Soothing Era is not
        responsible for the privacy practices or the content of such websites.
      </p>
      < SubSectionHeader title="How to Contact Us:" className="text-black bg-white-15" />
      <p className="py-4">
        If you have any questions or concerns about this privacy policy, please
        contact us at:
      </p>
      <p>
        <strong>Name:</strong> Jolly&apos;s Soothing Era
      </p>
      <p>
        <strong>Address 1:</strong> 223, New Laxmipura, Div no. 3, Jalandhar,
        Punjab, India, 144004
      </p>
      <p>
        <strong>Address 2:</strong> 114 East Moti Bagh, Sarai Rohila
      </p>
      <p >
        <strong>Email:</strong>
        <Link href="mailto:jollysootingera.com">
          {"jollysootingera.com"}
        </Link>
      </p>
      <p>
        <strong>Telephone:</strong> +91 921 622 0510
      </p>

    </div>
    </div>
  );
};

export default PrivacyPolicyContent;