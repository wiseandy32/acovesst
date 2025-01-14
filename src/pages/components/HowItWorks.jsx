import Slide from "./Slide";

function HowItWorks() {
  return (
    <section className="h-[195dvh] bg-bottom bg-no-repeat bg-[#0B1120] bottom-10 inset-0 sm:h-[125dvh]">
      <div className="inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] ">
        <div className="relative max-w-5xl mx-auto pt-20 mt-[40px] px-3 sm:px-0 sm:pt-0">
          <Slide yAxis={90}>
            <h2 className="capitalize font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white py-10">
              How it works
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-slate-400">
              We all have to start somewhere. Let us help get you on the right
              track as you start your investing journey. With this innovative
              platform you'll be ready to start in no time.
            </p>
          </Slide>
          <div
            className="flex flex-wrap flex-col justify-between sm:flex-row gap-5 mt-20  sm:p-10 backdrop-blur-md"
            style={{ boxShadow: "20px 20px 20px #0B1120" }}
          >
            {[
              {
                heading: "Registeration",
                title: "Create an account",
                subtext:
                  "Getting started with us is really easy. Fill in the requested fields regarding your personal information and trading expertise to complete Client Area registration.",
              },
              {
                heading: "investment",
                title: "purchase a plan",
                subtext:
                  "You have an unlimited access to our wide range of profitable plans to subscribe to. Once your contract is started, your earnings will automatically be credited to you wallet.",
              },
              {
                heading: "withdrawal",
                title: "make withdrawal",
                subtext:
                  "Once earnings has been collected or claimed, you can confidently head straight for the withdrawal section to withdraw your funds. Funds are immediately sent to your wallet address.",
              },
            ].map((item, index) => (
              <Slide
                key={item.title}
                xAxis={100}
                delay={index === 0 ? 0.2 : 0.2 * index}
                className={
                  "bg-slate-800 highlight-white/5 rounded-lg p-6 text-white sm:w-[30%] hover:bg-[#0a1120] hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col"
                }
              >
                {/* <div
                  key={item.title}
                  className="bg-slate-800 highlight-white/5 rounded-lg p-6 text-white sm:w-[30%] hover:bg-[#0a1120] hover:shadow-[0_35px_60px_-15px_rgba(0,0,32,0.8)] flex flex-col"
                > */}
                <div className="">
                  <i className="lni lni-thunder"></i>
                  <div className="flex items-center gap-2 uppercase">
                    <div className="w-10 h-[4px] bg-[linear-gradient(to_right,_#5a49f8,_#7a64f2)]"></div>
                    <p>{item.heading}</p>
                  </div>
                  <h5 className="text-slate-300 font-semibold text-base capitalize relative">
                    <span className="text-8xl font-bold opacity-10">
                      0{index + 1}
                    </span>
                    <span className="absolute left-[0] top-[45%] text-2xl leading-8 text-white font-medium tracking-tighter">
                      {item.title}
                    </span>
                  </h5>
                  <p className="mt-6 text-slate-300">{item.subtext}</p>
                </div>
                {/* <div className="p-[15px_13px_15px_17px] bg-[linear-gradient(60deg,#ceff0c_0%,#e1ff63_100%)] rounded-[50px] w-5 h-5"></div> */}
                {/* </div> */}
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
