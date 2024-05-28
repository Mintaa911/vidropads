import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-4">Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [company name]'s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
          <p className="mb-4">The term '[company name]' or 'us' or 'we' refers to the owner of the website whose registered office is [address]. Our company registration number is [registration number and place of registration]. The term 'you' refers to the user or viewer of our website.</p>
          <p className="mb-4">The use of this website is subject to the following terms of use:</p>
          <ul className="list-disc list-inside mb-4">
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
            {/* Add more list items as needed */}
          </ul>
          {/* Add more paragraphs as needed */}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
