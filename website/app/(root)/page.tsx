import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-90px)] relative w-full">
        <div className="absolute top-[-90px] h-[100vh] -z-10 bg-black/100 flex justify-center items-center w-full]">
          <img
            src={"/images/background.webp"}
            alt={""}
            className="object-center object-cover overflow-clip w-[calc(100vw + 3000px)]"
          />
        </div>
        <div className="absolute top-[calc(50%-90px)] left-[50%] z-10 w-min h-[800px] -translate-x-[50%] -translate-y-[50%] pb-[30px] flex items-center justify-end flex-col gap-[280px]">
          <div className="flex items-center justify-start flex-col">
            <div className="flex items-center">
              <span className="text-[72px] font-extrabold text-white leading-[1.2em]">
                KSDC
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[32px] font-normal text-white leading-[1.2em]">
                Korea Student Developer Club
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[28px] justify-center">
            <div className="flex justify-start flex-col">
              <span className="text-[20px] leading-[27px] text-white font-normal">
                <Link
                  className="underline"
                  href={"https://festa.io/hosts/2003"}
                >
                  FESTA
                </Link>
              </span>
            </div>
            <div className="flex justify-start flex-col">
              <span className="text-[20px] leading-[27px] text-white font-normal">
                <Link
                  className="underline"
                  href={"https://github.com/Korea-Student-Developer-Club"}
                >
                  GITHUB
                </Link>
              </span>
            </div>
            <div className="flex justify-start flex-col">
              <span className="text-[20px] leading-[27px] text-white font-normal">
                <Link
                  className="underline"
                  href={"https://www.instagram.com/ksdc.io/"}
                >
                  INSTAGRAM
                </Link>
              </span>
            </div>
            <div className="flex justify-start flex-col">
              <span className="text-[20px] leading-[27px] text-white font-normal">
                <Link
                  className="underline"
                  href={"https://open.kakao.com/o/gGAJxvvf"}
                >
                  KAKAOTALK
                </Link>
              </span>
            </div>
            <div className="flex justify-start flex-col">
              <span className="text-[20px] leading-[27px] text-white font-normal">
                <Link
                  className="underline"
                  href={"https://discord.com/invite/5j3STkjprb"}
                >
                  DISCORD
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-[142px] py-[36px] bg-[#3c3c3c]">
        <div className="flex justify-center flex-col">
          <p className="text-[24px] text-white font-normal text-center">
            배움을 지향하시는 모든 분들이 정보를 교류하고,
          </p>
          <p className="text-[24px] text-white font-normal text-center">
            커뮤니케이션할 수 있는 커뮤니티를 만들어가고 있습니다!
          </p>
        </div>
      </div>
      <div className="py-[120px] flex justify-start items-center flex-col gap-[56px]">
        <div className="flex flex-col gap-[8px] justify-start">
          <div className="flex justify-center flex-col">
            <span className="text-[36px] font-extrabold text-center">
              VISION
            </span>
          </div>
          <div className="flex justify-center flex-col">
            <span className="text-[18px] font-light text-center text-black">
              KSDC가 여러분과 함께 이루어나갈 목표입니다.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-start gap-[20px] flex-col">
          <div className="w-[180px] h-[180px]">
            <img src="/images/logo.webp" alt="logo" />
          </div>
          <div className="flex justify-center flex-col leading-[1.2em]">
            <span className="text-[40px] font-bold">“함께하는 성장”</span>
          </div>
          <div className="">
            <span className="text-[20px] font-normal text-center">
              성장을 위한 사람들의 커뮤니티가 되도록 언제나 노력할 것입니다!
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col py-[120px] gap-[56px]">
        <div className="flex items-center justify-start flex-col gap-[8px]">
          <span className="text-[36px] font-extrabold leading-[1.2em]">
            ORGANIZER
          </span>
          <span className="text-[18px] font-light leading-[1.2em]">
            언제나 함께 해주시는 고마운 분들입니다.
          </span>
        </div>
        <div className="flex justify-start items-center gap-[24px] flex-col">
          <div className="flex items-center justify-center gap-[48px]">
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              정현서
            </span>
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              강모민
            </span>
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              김마유
            </span>
          </div>
          <div className="flex items-center justify-center gap-[48px]">
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              김민재
            </span>
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              국재윤
            </span>
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              이예흔
            </span>
            <span className="text-[32px] font-extrabold leading-[1.2em]">
              이정현
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-[20px] font-normal leading-[1.2em]">
            현재 일곱 분의 오거나이저 분들로 이루어져 있습니다.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col py-[120px] gap-[56px]">
        <div className="flex items-center justify-start flex-col gap-[8px]">
          <span className="text-[36px] font-extrabold leading-[1.2em]">
            HISTORY
          </span>
          <span className="text-[18px] font-light leading-[1.2em]">
            KSDC가 여러분과 함께한 나날들입니다.
          </span>
        </div>
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="flex justify-start">
            <span className="text-[32px] font-extrabold tracking-[0.05em]">
              2023년
            </span>
          </div>
          <div className="flex justify-start flex-col">
            <span className="text-[24px] tracking-[0.05em] leading-[44px] text-center font-normal">
              07.17 - SHDG 출범
            </span>
            <span className="text-[24px] tracking-[0.05em] leading-[44px] text-center font-normal">
              08.11 - KSDC 개명
            </span>
            <span className="text-[24px] tracking-[0.05em] leading-[44px] text-center font-normal">
              11.25 - HYPER-Web 개최
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col py-[120px] gap-[56px] overflow-x-hidden">
        <div className="flex items-center justify-start flex-col gap-[8px]">
          <span className="text-[36px] font-extrabold leading-[1.2em]">
            EVENTS
          </span>
          <span className="text-[18px] font-light leading-[1.2em]">
            KSDC와 여러분들이 함께 만들어 갑니다
          </span>
        </div>
        <div className="flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="text-[28px] font-extrabold tracking-[0.05em] leading-[1.2em]">
              HYPER
            </div>
            <div className="text-[20px] font-normal tracking-[0.05em] leading-[1.2em]">
              KSDC에서 진행하는 전반적 기술분야에 관한 컨퍼런스입니다.
            </div>
            <div className="h-[449px] w-full">
              <section className="flex justify-center items-center relative">
                <div className="gap-[10px] w-[calc(601px+601px+601px+20px)] flex items-center justify-center absolute top-2 place-items-center ">
                  <div className="">
                    <img
                      src="/images/left.webp"
                      alt=""
                      className="h-[400px] w-[601px] object-cover"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/center.webp"
                      alt=""
                      className="h-[400px] w-[601px] object-cover"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/right.webp"
                      alt=""
                      className="h-[400px] w-[601px] object-cover"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="gap-[24px] flex flex-col justify-start items-center">
            <div className="text-[28px] font-extrabold tracking-[0.05em]">
              케이크처럼 먹는 00
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-[20px] text-center font-normal tracking-[0.05em]">
                기술에 대한 입문자들을 대상으로 하여
              </p>
              <p className="text-[20px] text-center font-normal tracking-[0.05em]">
                새로운 기술을 케이크 먹듯이 쉽게 배울 수 있는 스터디 밋업입니다.
              </p>
              <p className="text-[20px] text-center font-normal tracking-[0.05em]">
                현재 많은 분야의 발표자분들을 모집중입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[28px] font-bold tracking-[0.05em] underline text-[#0099ff]">
          <Link href={"https://forms.gle/AkZQRRMBbRMzo9zXA"}>
            발표자 신청하러 가기
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col py-[120px] px-[300px] gap-[56px]">
        <div className="flex items-center justify-start gap-[8px] flex-col">
          <div className="font-extrabold tracking-[0.05em] leading-[1.2em] text-[36px]">
            C. O. C
          </div>
          <div className="text-[18px] font-light tracking-[0.05em] leading-[1.2em]">
            KSDC 행동강령입니다!
          </div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <p className="text-[26px] font-bold leading-[54px]">
            1. 질문과 도전을 두려워하지 마세요!
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            모든 분들은 처음부터 모든 것을 알지는 않습니다.
            <br />
            개발, 디자인, 기획, 사업, KSDC 등 여러 주제에 대한 질문을 주저하지
            말고 해주세요.
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            질문을 받으면 최선을 다해 답변해주시는 성투의 마음가짐을 가져주세요.
            <br />
            상호 간의 도움은 언제나 보답받는 법이니까요!
          </p>
          <p className="text-[32px] font-normal leading-[42px]">
            <br />
          </p>
          <p className="text-[26px] font-bold leading-[54px]">
            2. 모든 분들을 환영하는 마음가짐을 가져주세요!
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            아는 분들과만 소통하는 것보다, 누구에게든 다정하게 대화를
            걸어주세요!
            <br />
            처음 만나는 분께는 "OO님"과 같은 존칭을 사용해주시길 부탁드려요.
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            친한 지인이라도 상대방이 불쾌할 수 있는 언어나 내용을 피해주세요.
          </p>
          <p className="text-[32px] font-normal leading-[42px]">
            <br />
          </p>
          <p className="text-[26px] font-bold leading-[54px]">
            3. 여러분은 모두 KSDC 소속입니다!
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            여러분은 모두 KSDC의 소속입니다. 자부심을 가져주세요!
          </p>
          <p className="text-[32px] font-normal leading-[42px]">
            <br />
          </p>
          <p className="text-[26px] font-bold leading-[54px]">
            4. 기타 법적으로 문제되거나 다른 분들이 불편할 수 있는 행동은
            자제해주세요!
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            상호 존중과 원활한 활동을 위해 법적인 문제를 일으키거나 다른
            분들에게 불편을 줄 수 있는 행동은 삼가해주세요.
          </p>
          <p className="text-[22px] font-normal leading-[42px]">
            종교, 정치적 발언이나 언급은 최대한 자제해주시고 개인의 가치관을
            존중해주세요.
          </p>
          <p className="text-[32px] font-normal leading-[42px]">
            <br />
          </p>
        </div>
      </div>
      <footer className="flex items-center justify-center gap-[24px] flex-col bg-[#3c3c3c] pt-[24px] pb-[50px]">
        <div className="text-[18px] leading-[27px] text-[#b8b8b8]">
          Copyright © 2024 KDSC - All Rights Reserved
        </div>
        <div className="flex items-center justify-center gap-[28px]">
          <div className="flex justify-start flex-col">
            <span className="text-[20px] leading-[27px] text-white font-normal">
              <Link className="underline" href={"https://festa.io/hosts/2003"}>
                FESTA
              </Link>
            </span>
          </div>
          <div className="flex justify-start flex-col">
            <span className="text-[20px] leading-[27px] text-white font-normal">
              <Link
                className="underline"
                href={"https://github.com/Korea-Student-Developer-Club"}
              >
                GITHUB
              </Link>
            </span>
          </div>
          <div className="flex justify-start flex-col">
            <span className="text-[20px] leading-[27px] text-white font-normal">
              <Link
                className="underline"
                href={"https://www.instagram.com/ksdc.io/"}
              >
                INSTAGRAM
              </Link>
            </span>
          </div>
          <div className="flex justify-start flex-col">
            <span className="text-[20px] leading-[27px] text-white font-normal">
              <Link
                className="underline"
                href={"https://open.kakao.com/o/gGAJxvvf"}
              >
                KAKAOTALK
              </Link>
            </span>
          </div>
          <div className="flex justify-start flex-col">
            <span className="text-[20px] leading-[27px] text-white font-normal">
              <Link
                className="underline"
                href={"https://discord.com/invite/5j3STkjprb"}
              >
                DISCORD
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
