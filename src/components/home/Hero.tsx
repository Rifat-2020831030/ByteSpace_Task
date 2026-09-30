import { ASSETS } from "@/lib/assets";
import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-[#003be2] relative w-[1440px] max-w-[100vw] h-[1024px] overflow-hidden shrink-0">
      <div className="absolute h-[1024px] left-1/2 -translate-x-1/2 top-0 w-[1440px]">
        <div className="absolute inset-[-0.2%_-0.14%_0_0]">
          <Image alt="" className="block max-w-none size-full" src={ASSETS.hero.gridBg}  fill />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[1149px] top-[582px]">
        <Image
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={ASSETS.hero.ellipseBg}
         fill />
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-1/2 top-[169px] w-[1200px]">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center">
          <p className="font-['Poppins:SemiBold'] leading-[1.2] relative shrink-0 text-[72px] text-white tracking-[-0.72px] w-[935px]">
            Get Access to Hundreds Courses Available
          </p>
          <p className="font-['Satoshi:Regular'] leading-[1.6] relative shrink-0 text-[#e5e6e8] text-[18px] whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
          <div className="bg-white content-stretch flex gap-[8px] h-[52px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 w-[461px]">
            <div className="relative shrink-0 size-[24px]">
              <Image
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ASSETS.icons.search}
               fill />
            </div>
            <p className="[word-break:break-word] font-['Satoshi:Regular'] leading-[1.6] not-italic relative shrink-0 text-[#82868e] text-[18px] whitespace-nowrap">
              Course, topic, creator
            </p>
          </div>
          <div className="bg-[#d4fb20] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
            <p className="[word-break:break-word] font-['Satoshi:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#242528] text-[18px] whitespace-nowrap">{`Search `}</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[120px] left-0 overflow-clip top-0 w-[1440px]">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex gap-[24px] items-start left-[calc(50%-0.5px)] not-italic text-[#f5f5f6] text-[16px] top-1/2 whitespace-nowrap">
          <p className="font-['Satoshi:Medium'] leading-[1.2] relative shrink-0">
            Home
          </p>
          <p className="font-['Satoshi:Regular'] leading-[1.6] relative shrink-0">
            Courses
          </p>
          <p className="font-['Satoshi:Regular'] leading-[1.6] relative shrink-0">
            Creators
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-start justify-end right-[120px] top-[48px]">
          <p className="[word-break:break-word] font-['Satoshi:Regular'] leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap">
            Sign In
          </p>
          <p className="[word-break:break-word] font-['Satoshi:Regular'] leading-[24px] not-italic relative shrink-0 text-[#f5f5f6] text-[16px] whitespace-nowrap">
            Join Us
          </p>
          <div className="relative shrink-0 size-[24px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={ASSETS.icons.menu}
             fill />
          </div>
        </div>
        <div className="absolute contents left-[122px] top-[35px]">
          <div className="absolute h-[31.5px] left-[122px] top-[35px] w-[28.875px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={ASSETS.icons.logo}
             fill />
          </div>
          <p className="[word-break:break-word] absolute font-['Clash_Display:Bold'] leading-[normal] left-[159px] not-italic text-[#f5f5f6] text-[24px] top-[42px] whitespace-nowrap">
            ByteSpace
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[541px] left-1/2 shadow-[51.038px_72.912px_72px_0px_rgba(0,0,0,0.13),37.122px_53.032px_56px_0px_rgba(0,0,0,0.11),25.838px_36.912px_36px_0px_rgba(0,0,0,0.1),16.946px_24.209px_24px_0px_rgba(0,0,0,0.09),10.208px_14.582px_16.087px_0px_rgba(0,0,0,0.08),5.383px_7.69px_9.571px_0px_rgba(0,0,0,0.07),2.233px_3.19px_5.723px_0px_rgba(0,0,0,0.06),0.518px_0.741px_3.036px_0px_rgba(0,0,0,0.04)] top-[512px] w-[578px]">
        <Image
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={ASSETS.hero.mainPhoto}
         fill />
      </div>
      <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start left-[842px] p-[16px] rounded-[16px] top-[651px]">
        <div className="[word-break:break-word] flex flex-col font-['Satoshi:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[14px] whitespace-nowrap">
          <p className="leading-[1.2]">Learning Progress</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
          <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[48px] tracking-[-0.48px] whitespace-nowrap">
            <p className="leading-[1.2]">55%</p>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="bg-[#f6f6f6] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[200px]" />
          <div className="bg-[#d4fb20] col-1 h-[8px] ml-0 mt-0 relative rounded-[24px] row-1 w-[112px]" />
        </div>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-start justify-center left-[328px] p-[16px] rounded-[16px] top-[837px] w-[258px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="[word-break:break-word] flex flex-col font-['Satoshi:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#242528] text-[16px] w-[115px]">
            <p className="leading-[1.2]">Happy Students</p>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="[word-break:break-word] font-['Satoshi:Regular'] leading-[0] not-italic relative shrink-0 text-[#82868e] text-[0px] whitespace-nowrap">
              <span className="leading-[1.6] text-[#242528] text-[12px]">{`4.5 `}</span>
              <span className="leading-[1.6] text-[12px]">(240)</span>
            </p>
            <div className="relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.92%_8.87%_14.53%_8.87%]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src={ASSETS.icons.star}
                 fill />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0">
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar1}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar2}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar3}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar4}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar5}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar6}
              width="43"
             />
          </div>
          <div className="mr-[-16px] relative shrink-0 size-[43px]">
            <Image
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              height="43"
              src={ASSETS.avatars.avatar7}
              width="43"
             />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[43px]">
              <Image
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={ASSETS.avatars.badgeBg}
               fill />
            </div>
            <p className="[word-break:break-word] col-1 font-['Satoshi:Bold'] leading-[1.5] ml-[12px] mt-[13px] not-italic relative row-1 text-[#242528] text-[12px] whitespace-nowrap">
              2K+
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 contents left-[calc(50%+21.5px)] top-[21.58%]">
        <div className="-translate-x-1/2 absolute bottom-[2.15%] left-[calc(50%+572px)] top-[65.63%] w-[330px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ASSETS.shapes.shape1}
             fill />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
            <div
              className="-translate-x-1/2 absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-20px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1101.93px_0px] mask-size-[331.535px_331.535px] mix-blend-hard-light top-0 w-[2500px]"
              style={{ maskImage: `url("${ASSETS.masks.rect}")` }}
            />
          </div>

        </div>
        <div className="-translate-x-1/2 absolute bottom-[40.82%] left-[calc(50%-645.5px)] top-[21.58%] w-[385px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ASSETS.shapes.shape2}
             fill />
          </div>
          <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
            <div
              className="-translate-x-1/2 absolute bg-[#d4fb20] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1073.419px_0px] mask-size-[386.791px_386.791px] mix-blend-hard-light top-0 w-[2500px]"
              style={{ maskImage: `url("${ASSETS.masks.rect1}")` }}
            />
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute bottom-[36.33%] flex items-center justify-center left-[calc(50%-449.5px)] top-[46.58%] w-[175px]"
          style={{ containerType: "size" }}
        >
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full">
              <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
                <Image
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={ASSETS.shapes.shape2}
                 fill />
              </div>
              <div className="absolute contents inset-[0_0.47%_-0.47%_-0.93%]">
                <div
                  className="-translate-x-1/2 absolute bg-[#f5f5f6] bottom-[-0.47%] left-[calc(50%-19.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1143.814px_0px] mask-size-[175.814px_175.814px] mix-blend-hard-light top-0 w-[2500px]"
                  style={{ maskImage: `url("${ASSETS.masks.rect2}")` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%-531px)] top-[66.6%] w-[342px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ASSETS.shapes.cone1}
             fill />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="-translate-x-1/2 absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1095.533px_0px] mask-size-[343.684px_343.689px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
              style={{ maskImage: `url("${ASSETS.masks.rect15}")` }}
            />
          </div>

        </div>
        <div className="-translate-x-1/2 absolute bottom-[42.29%] left-[calc(50%+696px)] top-[21.58%] w-[370px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ASSETS.shapes.cone2}
             fill />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="-translate-x-1/2 absolute bg-[#d4fb20] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1081.239px_0px] mask-size-[371.822px_371.828px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
              style={{ maskImage: `url("${ASSETS.masks.rect16}")` }}
            />
          </div>

        </div>
        <div className="-translate-x-1/2 absolute bottom-[36.33%] left-[calc(50%+480px)] top-[45.31%] w-[188px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={ASSETS.shapes.cone3}
             fill />
          </div>
          <div className="absolute contents inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <div
              className="-translate-x-1/2 absolute bg-[#f5f5f6] bottom-[-0.28%] left-[calc(50%-20.12px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1174.15px_0px] mask-size-[188.926px_188.929px] mix-blend-hard-light top-[-0.22%] w-[2500px]"
              style={{ maskImage: `url("${ASSETS.masks.rect17}")` }}
            />
          </div>

        </div>
      </div>
      <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col items-start justify-center left-[404px] p-[16px] rounded-[16px] top-[639px]">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-nowrap">
          <div className="flex flex-col font-['Satoshi:Medium'] justify-center leading-[0] relative shrink-0 text-[#242528] text-[16px]">
            <p className="leading-[1.2]">UI/UX Design</p>
          </div>
          <div className="content-stretch flex font-['Satoshi:Regular'] gap-[8px] items-start relative shrink-0 text-[#82868e]">
            <p className="leading-[1.6] relative shrink-0 text-[12px]">
              200 Courses
            </p>
            <p className="leading-[1.5] relative shrink-0 text-[10px]">•</p>
            <p className="leading-[1.6] relative shrink-0 text-[12px]">
              1000+ Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
