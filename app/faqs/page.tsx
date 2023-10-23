import React from "react";
import HomeNav from "../components/HomeNav";
import Footer from "../section/Footer/Footer";
import "./faqs.scss";

const FAQs = () => {
  return (
    <div
      className="FAQs bg-gray-900"
      // style={{ backgroundColor: '#f2f7f8', color: '#3d4f60' }}
    >
      <HomeNav />

      {/* <div className="">
        {' '}
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Anas Yakubu
        </h1>
      </div> */}

      <div className="text-center p-10">
        <div className="m-10 p-10 rounded-xl shadow-xl bg-gray-950">
          <div className="text-center">
            <h1
              className="flex text-xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
              style={{ color: "#122231" }}
            >
              focGPT <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            </h1>
          </div>

          <div className="mt-10">
            <div className="collapse mt-1 collapse-arrow bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-md font-medium text-white">
                What’s focGPT?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  focGPT is a new tool that you can use to explore creative
                  ideas & explain things simply. It’s a Google AI experiment
                  that can generate text, translate languages, write different
                  kinds of creative content & more.
                </p>
                <p className="text-gray-400 mt-5">
                  focGPT isn’t human It doesn’t have its own thoughts or
                  feelings, even though it might sound like a human. Remember:
                </p>
                <ul className="text-gray-400 mt-5">
                  <li>
                    focGPT can’t replace important people in your life, like
                    family, friends, teachers, or doctors
                  </li>
                  <li>focGPT can’t do your work for you</li>
                  <li>focGPT can’t make important life decisions for you</li>
                </ul>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                Why can focGPT get things wrong?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  Generative AI and all of its possibilities are exciting, but
                  it’s still new. focGPT is an experiment, and it will make
                  mistakes. Even though it’s getting better every day, focGPT
                  can provide inaccurate information, or it can even make
                  offensive statements.
                </p>

                <p className="text-gray-400 mt-5">
                  <span className="font-bold">
                    Double-check information you get from focGPT
                  </span>
                  focGPT has tools to help you identify potentially inaccurate
                  statements. One way to double-check focGPT’s responses is to
                  use the Google button. This uses Google Search to find content
                  that helps you assess and further research the information you
                  get from focGPT.
                </p>

                <p className="text-gray-400 mt-5">
                  <span className="font-bold">
                    Be mindful of how you use focGPT
                  </span>
                  You have an opportunity to shape focGPT for others. focGPT
                  will use the conversations you have to improve future
                  responses for everyone so don’t enter anything you wouldn’t
                  want a reviewer to see or Google to use.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                How and when does focGPT cite sources in its responses?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  How and when does focGPT cite sources in its responses?
                </p>
                <p className="text-gray-400 mt-5">
                  focGPT, like some other standalone LLM experiences, is
                  intended to generate original content and not replicate
                  existing content at length. We’ve designed our systems to
                  limit the chances of this occurring, and we will continue to
                  improve how these systems function. If focGPT does directly
                  quote at length from a webpage, it cites that page. For
                  answers with URLs or image thumbnails, focGPT enables users to
                  easily see and, in some cases, click to navigate directly to
                  the source for each. If focGPT generates a response using
                  content from an extension, like Google Workspace, it provides
                  a link to the sources (like your emails) that it used.
                </p>
                <p className="text-gray-400 mt-5">
                  Sometimes the same public content may be found on multiple
                  webpages and focGPT attempts to point to a popular source. In
                  the case of citations to code repositories, the citation may
                  also reference an applicable open source license.
                </p>
                <p className="text-gray-400 mt-5">
                  focGPT is an experiment, and we’ll continue to learn, iterate,
                  and improve the experience as we get feedback from a range of
                  stakeholders including people like you, publishers, creators,
                  and more.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                Who can use focGPT?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">Who can use focGPT?</p>
                <p className="text-gray-400 mt-5">
                  To use focGPT, you must be 18 or over. You also need a
                  personal Google Account that you manage on your own, or a
                  Google Workspace account for which your admin enabled access
                  to focGPT. If youre a Google Workspace admin, learn how to
                  enable accessOpens in a new window.
                </p>
                <p className="text-gray-400 mt-5">
                  You can’t access focGPT with a Google Account managed by
                  Family Link or with a Google Workspace for Education account
                  designated as under the age of 18.
                </p>
                <p className="text-gray-400 mt-5">
                  Right now, focGPT may not be available in your country, but we
                  will be rolling out to new languages and countries over time.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                How can I help make focGPT better?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  How can I help make focGPT better?
                </p>
                <p className="text-gray-400 mt-5">
                  To use focGPT, you must be 18 or over. You also need a
                  personal Google Account that you manage on your own, or a
                  Google Workspace account for which your admin enabled access
                  to focGPT. If youre a Google Workspace admin, learn how to
                  enable accessOpens in a new window.
                </p>
                <p className="text-gray-400 mt-5">
                  You can’t access focGPT with a Google Account managed by
                  Family Link or with a Google Workspace for Education account
                  designated as under the age of 18.
                </p>
                <p className="text-gray-400 mt-5">
                  Right now, focGPT may not be available in your country, but we
                  will be rolling out to new languages and countries over time.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                How many languages does focGPT support?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  How many languages does focGPT support?
                </p>
                <p className="text-gray-400 mt-5">
                  To use focGPT, you must be 18 or over. You also need a
                  personal Google Account that you manage on your own, or a
                  Google Workspace account for which your admin enabled access
                  to focGPT. If youre a Google Workspace admin, learn how to
                  enable accessOpens in a new window.
                </p>
                <p className="text-gray-400 mt-5">
                  You can’t access focGPT with a Google Account managed by
                  Family Link or with a Google Workspace for Education account
                  designated as under the age of 18.
                </p>
                <p className="text-gray-400 mt-5">
                  Right now, focGPT may not be available in your country, but we
                  will be rolling out to new languages and countries over time.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                What terms of service apply to my focGPT usage?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  What terms of service apply to my focGPT usage?
                </p>
                <p className="text-gray-400 mt-5">
                  To use focGPT, you must be 18 or over. You also need a
                  personal Google Account that you manage on your own, or a
                  Google Workspace account for which your admin enabled access
                  to focGPT. If youre a Google Workspace admin, learn how to
                  enable accessOpens in a new window.
                </p>
                <p className="text-gray-400 mt-5">
                  You can’t access focGPT with a Google Account managed by
                  Family Link or with a Google Workspace for Education account
                  designated as under the age of 18.
                </p>
                <p className="text-gray-400 mt-5">
                  Right now, focGPT may not be available in your country, but we
                  will be rolling out to new languages and countries over time.
                </p>
              </div>
            </div>

            <div className="collapse mt-1 collapse-arrow  bg-gray-900">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title  text-md font-medium text-white">
                Can focGPT connect with other Google apps & services?
              </div>
              <div className="collapse-content text-left">
                <p className="text-gray-400">
                  Can focGPT connect with other Google apps & services?
                </p>
                <p className="text-gray-400 mt-5">
                  To use focGPT, you must be 18 or over. You also need a
                  personal Google Account that you manage on your own, or a
                  Google Workspace account for which your admin enabled access
                  to focGPT. If youre a Google Workspace admin, learn how to
                  enable accessOpens in a new window.
                </p>
                <p className="text-gray-400 mt-5">
                  You can’t access focGPT with a Google Account managed by
                  Family Link or with a Google Workspace for Education account
                  designated as under the age of 18.
                </p>
                <p className="text-gray-400 mt-5">
                  Right now, focGPT may not be available in your country, but we
                  will be rolling out to new languages and countries over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
