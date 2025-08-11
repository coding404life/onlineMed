"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import CodeInput from "./CodeInput";
import Image from "next/image";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [debouncedEmail, setDebouncedEmail] = useState("");

  // Debounce email input
  useEffect(() => {
    const handler = setTimeout(() => {
      if (email && email.includes("@")) {
        setLoading(true);
        setDebouncedEmail(email);
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [email]);

  useEffect(() => {
    if (!debouncedEmail) return;

    setShowEmailVerification(true);
  }, [debouncedEmail]);

  const handleChangeEmail = () => {
    setLoading(false);
    setShowEmailVerification(false);
    setDebouncedEmail("");
    setEmail("");
  };

  return (
    <div>
      {!showEmailVerification && (
        <div className="relative mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-primary-blue transition text-secondary-black focus:shadow-focus"
            required
          />

          {loading && (
            <Image
              src="loading-spinner.svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin"
              width={20}
              height={20}
              alt="Loading"
            />
          )}
        </div>
      )}

      {showEmailVerification && (
        <motion.div
          className="rounded-2xs border border-secondary-gray mt-2 overflow-hidden"
          initial="initial"
          animate="animate"
          variants={{
            initial: { height: 150 },
            animate: { height: "auto" },
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Email Row */}
          <motion.div
            className="bg-background py-3 px-6 flex justify-between items-center"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div>
              <span className="leading-5 text-primary-blue mr-5">Email</span>
              <span className="font-bold text-primary-blue shine">
                {debouncedEmail}
              </span>
            </div>

            <a
              className="underline decoration-dotted font-medium underline-offset-5 text-md decoration-2"
              href="#"
              onClick={handleChangeEmail}
            >
              Change
            </a>
          </motion.div>

          {/* Verification Section */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900">
              Enter verification code
            </h3>
            <p className="text-secondary-black mt-1 leading-6 tracking-normal">
              Enter the code sent to{" "}
              <span className="font-medium">{debouncedEmail}</span> to use your
              saved information.
            </p>
            <div className="flex space-x-2 sm:space-x-3 mt-6">
              {[...Array(4)].map((_, i) => (
                <CodeInput key={i} />
              ))}
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-sm text-gray opacity-60 mt-6">
                Didn't receive a code?{" "}
              </p>
              <a
                href="#"
                className="text-sm font-bold text-primary-blue hover:underline"
              >
                Send again
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default EmailVerification;
