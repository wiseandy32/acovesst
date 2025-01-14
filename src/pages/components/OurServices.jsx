import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Slide from "./Slide";
import chart from "@/assets/chart.png";
import { MdOutlineSupportAgent } from "react-icons/md";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { ChartNoAxesCombined } from "lucide-react";
import { ChartSpline } from "lucide-react";
import { IoIosPeople } from "react-icons/io";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";

function OurServices() {
  return (
    <section className="bg-[#0B1120] sm:mt-[5rem] sm:py-4">
      <div className="mx-auto pt-20 mt-[40px] sm:px-0 sm:pt-0 md:px-7 px-3">
        <Slide
          xAxis={100}
          className="grid grid-cols-[1fr,1fr,1fr] md:grid-cols-3 overflow-x-auto bg-slate-800 rounded-lg"
        >
          {[
            { icon: IoIosPeople, title: "2,589", subtext: "active investors" },
            {
              icon: RiLuggageDepositFill,
              title: "197,482,938",
              subtext: "total deposits",
            },
            {
              icon: BiMoneyWithdraw,
              title: "2,820,938,272",
              subtext: "withdrawals",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 justify-center items-center p-6 ${
                index < 2 ? "border-r border-slate-700" : ""
              }`}
            >
              <item.icon size={32} />
              <p className="font-bold text-4xl">{item.title}</p>
              <p className="uppercase text-xs">{item.subtext}</p>
            </div>
          ))}
        </Slide>
        <Slide
          xAxis={-90}
          className="px-5 sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] m-auto"
        >
          <p className="text-base mt-7 text-sky-500 font-bold">Why Acovesst</p>
          <h2 className="md:mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-left text-white py-1 md:max-w-[400px] mb-[32px]">
            {/* Our Services */}
            Everything you need for crypto trading is available.
          </h2>
        </Slide>
        <Slide
          xAxis={-90}
          className="px-5 flex justify-start flex-col md:flex-row gap-16 sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] m-auto"
        >
          <Tabs
            defaultValue="free"
            className="px-2 md:px-0 w-full md:w-auto md:max-w-[40%] text-white"
          >
            <TabsList className="text-white bg-slate-800 max-w-full w-full overflow-scroll md:overflow-hidden pl-[8rem] xxs:pl-[6rem] xs:pl-0 sm:pl-[10.5rem] lg:pl-0">
              <TabsTrigger value="free" className="capitalize">
                Free trial accounts
              </TabsTrigger>
              <TabsTrigger value="experts" className="capitalize">
                Guided by experts
              </TabsTrigger>
              <TabsTrigger value="plans" className="capitalize">
                Affordable plans
              </TabsTrigger>
            </TabsList>
            <div
            // style={{ border: "2px solid yellow" }}
            >
              <TabsContent
                value="free"
                className="w-full md:w-auto mt-9"
                // style={{ border: "2px solid red" }}
              >
                <div className="py-3">
                  <p className="mb-4">
                    A product or service that is offered to customers for free
                    for a short period of time so they can try using it easily.
                  </p>
                  <div className="skill-box">
                    <div className="skillbar clearfix" data-percent="95.7%">
                      <div className="skillbar-title">
                        <span>Trading</span>
                      </div>
                      <div
                        className="skillbar-bar fill-skillbar"
                        style={{ width: "95.7%" }}
                      ></div>
                      <div className="skill-bar-percent">95.7%</div>
                    </div>
                    <div className="skillbar clearfix " data-percent="92%">
                      <div className="skillbar-title">
                        <span>Investment</span>
                      </div>
                      <div
                        className="skillbar-bar fill-skillbar"
                        style={{ width: "92%" }}
                      ></div>
                      <div className="skill-bar-percent">92%</div>
                    </div>
                    <div className="skillbar clearfix" data-percent="95%">
                      <div className="skillbar-title">
                        <span>Security</span>
                      </div>
                      <div
                        className="skillbar-bar fill-skillbar"
                        style={{ width: "95%" }}
                      ></div>
                      <div className="skill-bar-percent">95%</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* <div>
                  <img src={chart} alt="" />
                </div> */}
            </div>
            <TabsContent className="w-full md:w-auto mt-9" value="experts">
              qfswrdledger SAS is a company founded by internationally
              recognized industrial & academic researchers.
            </TabsContent>
            <TabsContent className="w-full md:w-auto mt-9" value="plans">
              User have been seen in various occasion to have lost funds without
              anyway of getting it retrived the system was not designed to loss
              funds accross multi-chain ,so we dived deeper into the blockchain
              and we found way lost funds could be retrived my a short creation
              and roll-back functionality only accessiblefas with our client
              accross the globe.
            </TabsContent>
          </Tabs>
          <div className="w-full">
            <CryptoCurrencyMarket
              colorTheme="dark"
              width="100%"
            ></CryptoCurrencyMarket>
            {/* <img src={chart} alt="" /> */}
          </div>
        </Slide>
        <div
          className="px-3 flex flex-wrap flex-col justify-between sm:flex-row gap-5 mt-20 sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] m-auto"
          style={{ boxShadow: "20px 20px 20px #0B1120" }}
        >
          {[
            {
              title: "Investment Growth",
              subtext:
                "Our financial experts support or help you to find out which way you can raise your funds more.",
              icon: <ChartNoAxesCombined />,
            },
            {
              title: "Profitablity Factor",
              subtext:
                "We have carefuly compiled some digital assets that we now for sure will make our users much more profitable.",
              icon: <ChartSpline />,
            },
            {
              title: "24/7 Live Support",
              subtext:
                "When you need help, our team of experts will work with you via our 24/7 live chat to reach a quick and efficient.",
              icon: <MdOutlineSupportAgent />,
            },
          ].map((item, index) => (
            <Slide
              key={item.title}
              xAxis={100}
              delay={0.4 * (index + 1)}
              className={
                "bg-slate-800 highlight-white/5 rounded-lg p-6 text-white sm:w-[30%] hover:bg-[#0a1120] hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col"
              }
            >
              {/* <div
                key={item.title}
                className="bg-slate-800 highlight-white/5 rounded-lg p-6 text-white sm:w-[30%] hover:bg-[#0a1120] hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col"
                > */}
              <div className="">
                {item.icon}
                <h5 className="font-semibold text-base capitalize mt-2 text-white md:text-xl">
                  {item.title}
                </h5>
                <p className="mt-6 text-slate-300">{item.subtext}</p>
              </div>
              {/* <div className="p-[15px_13px_15px_17px] bg-[linear-gradient(60deg,#ceff0c_0%,#e1ff63_100%)] rounded-[50px] w-5 h-5"></div> */}
              {/* </div> */}
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
