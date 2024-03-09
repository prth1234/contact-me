"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Github",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>prth1234</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "LinkedIn",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>parthsingh2002</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Instagram",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>pxrthye</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Mobile",
      value: "123",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>+91 920 576 7228</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Email",
      value: "12",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>dearparthsingh@gmail.com</p>
          <DummyContent3 />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="https://i.ibb.co/s29rWWS/Screenshot-2024-03-08-at-5-43-37-PM.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent1 = () => {
    return (
      <Image
        src="https://i.ibb.co/S0FGLGm/Screenshot-2024-03-08-at-7-26-55-PM.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const DummyContent2 = () => {
    return (
      <Image
        src="https://i.ibb.co/Cw6Lv0s/Screenshot-2024-03-08-at-7-29-35-PM.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  

  const DummyContent3 = () => {
    return (
      <Image
        src="https://i.ibb.co/s5FqN7h/Apple-Memoji.jpg"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };


  const DummyContent4 = () => {
    return (
      <Image
        src="https://i.ibb.co/h9Gy8Q9/Pinterest-3.jpg"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };



