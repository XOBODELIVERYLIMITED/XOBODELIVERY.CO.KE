import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-primary-600">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheckIcon className="mx-auto h-16 w-16 text-white" />
              <h1 className="mt-6 heading text-4xl sm:text-5xl text-white">
                Privacy Policy
              </h1>
              <p className="mt-4 text-xl text-primary-100">
                Last updated June 2nd, 2023
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mt-8 space-y-6">
                <p>
                  Here, you can find out what kind of information we use to provide you with our bundle of
                  transportation services, how we use your information to keep you safe,
                  and the choices and controls available to you. In this notice, it is
                  also stated that all the possible rights you have regarding to the
                  privacy of your data. The data protection rules are set up in order to
                  protect everyone who participates in the work. The term "us" or "we"
                  refers to <strong>XOBO</strong> company incorporated and registered under the laws of the
                  Kenyan government.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p>
                    In compliance with data protection regulations, we are licensed Data Controllers responsible for overseeing inquiries related to this privacy notice and ensuring the security of your personal data. For additional information about our licensed Data Controllers, please consult our{' '}
                    <a
                      href="/xdl-docs/XDL - DATA CONTROLLER DOC.pdf"
                      target="_blank"
                      download="XOBO DELIVERY LIMITED - DATA CONTROLLER CERTIFICATE.pdf"
                      className="text-primary-600 hover:text-primary-500"
                    >
                      Data Controller Document
                    </a>.
                  </p>
                </div>

                <p>
                  The term "you" or "your" refers to people who go to
                  our app service that is requesting, hiring, and/or receiving a
                  transportation service.
                </p>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    1. Personal data we process
                  </h2>
                  <p className="mb-6">
                    We only process the information that is necessary for your needs on our marketplace. This
                    ensures that we give you the best possible service for what you are
                    looking to achieve.
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <motion.li
                      className="flex items-start p-4 bg-white rounded-lg border border-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <DocumentTextIcon className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Contact Details</h3>
                        <p className="mt-1 text-gray-500">
                          We will ask for your personal details like name, phone number, and e-mail address so that we can best help you.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="flex items-start p-4 bg-white rounded-lg border border-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <DocumentTextIcon className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Profile Information</h3>
                        <p className="mt-1 text-gray-500">
                          We collect some data to help you build your profile, such as your saved addresses and language preferences.
                          Some of our services require some additional details like your driver's license number.
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="flex items-start p-4 bg-white rounded-lg border border-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <DocumentTextIcon className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                      <div>
                        <h3 className="font-medium text-gray-900">Geolocation</h3>
                        <p className="mt-1 text-gray-500">
                          By accessing your location we are able to offer a list of services on your location, such as local ride options.
                          It will tell you how long the journey would take, with different expenditure options. There are also hints about your destination.
                        </p>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Privacy;
