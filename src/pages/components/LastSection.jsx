import { Link } from "react-router-dom";
import Slide from "./Slide";
import handHoldingCreditCardMockup from "../../assets/hand-holding-credit-card.webp";
import basicPlanImage from "../../assets/basic-plan.svg";
import standardPlanImage from "../../assets/standard-plan.svg";
import proPlanImage from "../../assets/pro-plan.svg";

function LastSection() {
  return (
    <section className="pt-20 mb-20 sm:pt-32 sm:mb-32 md:pt-40 md:mb-40 sm:px-10">
      <div className="sm:mt-0 flex flex-col sm:flex-row justify-between gap-16 sm:gap-0">
        <div className="flex flex-col gap-y-4 sm:gap-y-10 sm:max-w-[45%] px-5">
          <Slide xAxis={-90}>
            <p className="text-xl mb-2 text-sky-500 capitalize">
              Available Plans
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-50 capitalize">
              Available Membership Plans for You
            </h2>
            <p className="mt-4 max-w-3xl space-y-6 ">
              Invest in your future with our tailored membership plans. Whether
              you're just starting out or looking to maximize your returns, we
              have a plan that fits your needs. Our secure and user-friendly
              platform ensures that your investments are managed efficiently,
              giving you peace of mind and the potential for significant growth.
              Join us today and take the first step towards financial freedom.
            </p>
          </Slide>
        </div>
        <Slide xAxis={90} delay={0.3} className="sm:w-[55%] px-4">
          <div
            className="flex flex-wrap flex-col justify-between sm:flex-row gap-5 backdrop-blur-md"
            style={{ boxShadow: "20px 20px 20px #0B1120" }}
          >
            {[
              {
                heading: "basic plan",
                title: "4% Daily for 2 Days",
                subtext:
                  "Getting started with us is really easy. Fill in the requested fields regarding your personal information and trading expertise to complete Client Area registration.",
                img: basicPlanImage,
                features: [
                  "$10 - $99",
                  "4% daily",
                  "10% Referral Bonus",
                  "24/7 Support",
                ],
              },
              {
                heading: "standard plan",
                title: "8% Daily for 5 Days",
                subtext:
                  "You have an unlimited access to our wide range of profitable plans to subscribe to. Once your contract is started, your earnings will automatically be credited to you wallet.",
                img: standardPlanImage,
                features: [
                  "$1,000 - $4,999",
                  "8% daily",
                  "10% Referral Bonus",
                  "24/7 Support",
                ],
              },
              {
                heading: "pro plan",
                title: "12% Daily for 10 Days",
                subtext:
                  "Once earnings has been collected or claimed, you can confidently head straight for the withdrawal section to withdraw your funds. Funds are immediately sent to your wallet address.",
                img: proPlanImage,
                features: [
                  "$5,000 - $10,000,000",
                  "12% daily",
                  "10% Referral Bonus",
                  "24/7 Support",
                ],
              },
            ].map((item, index) => (
              <Slide
                key={item.title}
                xAxis={100}
                delay={index === 0 ? 0.2 : 0.2 * index}
                className={
                  "bg-slate-800 highlight-white/5 rounded-lg py-3 px-4 text-white sm:w-[30%] hover:bg-[#0a1120] hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col"
                }
              >
                <div className="flex flex-col gap-2">
                  <p className="uppercase text-sm text-center">
                    {item.heading}
                  </p>
                  <h5 className="font-bold capitalize text-center text-2xl leading-8 text-white tracking-tighter">
                    {item.title}
                  </h5>
                  <div className="h-[125px] sm:mb-0 mb-10">
                    <img src={item.img} alt="" />
                  </div>
                  <ul className="mt-10 sm:mt-6 text-slate-300">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center bg-sky-500 highlight-white/20 hover:bg-sky-400 mt-4"
                    to="register"
                  >
                    Buy Plan
                  </Link>
                </div>
              </Slide>
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default LastSection;
