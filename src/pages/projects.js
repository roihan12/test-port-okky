import AnimatedText from "@/components/AnimatedText";
import { LinkedInIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectFeature1 from "../../public/images/projects/test-case-bhinneka.jpg";
import ProjectFeature2 from "../../public/images/projects/cypress.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, linkedin }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={linkedin} target="_blank" className="w-10">
            <LinkedInIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, linkedin }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={linkedin} target="_blank" className="w-8 md:w-6">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Muhammad Okky Irawan | Project Page </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text=" Portofolio"
            classname="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 2xl:mx-16 md:mx-0">
            <div className="col-span-12">
              <FeaturedProject
                title=" Test Case & Issue Website E-Commerce Bhinneka"
                summary="The following is a test case and issue 
                from the results of manual testing on the Bhinneka 
                e-commerce website which consists of 9 features."
                img={ProjectFeature1}
                link="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv7dpzVfSwv1EEEGCd4QUAEgOqUDnNxG3uLgGnes-hvQaDsoZdEJVy3Lzz1nN0taNbeA0zFcl5CIom/pubhtml"
                type="Website Testing"
                linkedin="https://www.linkedin.com/in/muhammad-okky-irawan/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title=" All Project Automation Testing Website With Cypress"
                summary="The following is a project that contains test 
                code on several websites that were tested using the end-to-end 
                automation testing method using Cypress."
                img={ProjectFeature2}
                link="https://github.com/okky2112/cypress"
                type="Website Testing"
                linkedin="https://www.linkedin.com/in/muhammad-okky-irawan/"
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title=" Crypto Screener Application"
                img={ProjectFeature1}
                link="/"
                type="Feature Project"
                linkedin="/"
              />
            </div> */}

            {/* <div className="col-span-12">
              <FeaturedProject
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App
                using React, Tailwind CSS, Context API, React Router and Recharts.
                It shows detail regarding almost all the cryptocurrency. You can
                easily convert the price in your local currency."
                img={ProjectFeature1}
                link="/"
                type="Feature Project"
                linkedin="/"
              />
            </div> */}

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title=" Crypto Screener Application"
                img={ProjectFeature1}
                link="/"
                type="Feature Project"
                linkedin="/"
              />
            </div> */}

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title=" Crypto Screener Application"
                img={ProjectFeature1}
                link="/"
                type="Feature Project"
                linkedin="/"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
