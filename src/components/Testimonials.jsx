import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full md:mt-0 mt-16">
      <p className={`${styles.paragraph} text-center pb-10`}>
        Unlock creativity with FlashFeed.AI . Try it today!
      </p>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="text-3xl text-center text-white font-bold ">
        Text
        <br className="sm:block py-2  hidden" />
        Craft content with
        <br className="sm:block hidden" />
        simple text prompts.
      </h2>
      <h2 className="text-3xl text-center text-white font-bold ">
        Audio
        <br className="sm:block  py-2 hidden" />
        Speak your ideas for
        <br className="sm:block hidden" />
        seamless conversion to text.
      </h2>
      <h2 className="text-3xl text-center text-white font-bold ">
        Image
        <br className="sm:block  py-2 hidden" />
        Describe or input images
        <br className="sm:block hidden" />
        for unique written content.
      </h2>
    </div>
    <div className="w-full md:mt-0 pt-44">
      <p className={`${styles.paragraph} text-center pb-10`}>
        Bot Trio: Unleashing the Power of Information, Insight, and
        Summarization
      </p>
    </div>
    <div className="flex">
      <div className="text-white w-3/4 text-xl font-bold p-3">
        The first bot is your information powerhouse. Simply provide a prompt,
        and this bot will scour the internet's top websites, extracting valuable
        information to give you the most up-to-date and relevant content.
        <br></br> <br></br> Next up is our insight searcher, the second bot.
        Dive deeper into your topic of interest as it unravels the next key
        terms, offering a more nuanced understanding and broadening your
        perspective.<br></br> <br></br> But that's not all our third bot takes
        the extracted information and crafts a concise and engaging summary. Say
        goodbye to information overload and hello to distilled knowledge at its
        best.
      </div>
      <div>
        <img
          className=" rounded-2xl shadow-2xl mx-3"
          src="https://8f430952.rocketcdn.me/wp-content/uploads/2023/01/ai-powered-search-engine-1300x731.jpg"
          alt="phone"
        />
      </div>
    </div>
    <div className="w-full md:mt-0 pt-32">
      <p className={`${styles.paragraph} text-center  py-10 pt-20`}>
        What our users are saying about FlashFeed.AI!
      </p>
    </div>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
