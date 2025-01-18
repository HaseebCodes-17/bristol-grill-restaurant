import React, { useState, useEffect } from "react";
import { Loader } from "../Index";

const AddressMap = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <h3 className="text-2xl text-center mb-8 flex flex-wrap justify-center gap-6 max-[768px]:gap-2">
        Location:
        <address className="tracking-widest">
          Bristol Road, Selly Oak, Birmingham, West Midlands, B29 6BE
        </address>
      </h3>

      {isLoading ? (
        <div className="h-[400px] bg-zinc-50 grid place-items-center">
          <div>
            <Loader />
            <p className="text-2xl text-center mt-4">
              Loading Location Address
            </p>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-[450px] max-[768px]:h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.7287788925787!2d-1.927737024236573!3d52.447827741571544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc34f70faf1d%3A0xb7c915dd102d6e7d!2sBristol%20Rd%2C%20Birmingham%2C%20UK!5e0!3m2!1sen!2s!4v1728123332104!5m2!1sen!2s"
          loading="lazy"
          title="Bristol Grill Location"
        ></iframe>
      )}
    </section>
  );
};

export default AddressMap;
