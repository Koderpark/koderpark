import Link from "next/link";

import { List } from "../components/theme";
import Title from "../components/title";

import {
  FaXTwitter,
  FaDiscord,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";

function pillTwitter() {
  return (
    <a
      href="https://twitter.com/koderpark"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-gray-900 text-gray-100">
        <FaXTwitter />
        @koderpark
      </div>
    </a>
  );
}

function pillDiscord() {
  return (
    <a
      href="https://discord.gg/8P9VR33P8C"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-indigo-700 text-gray-100">
        <FaDiscord />
        디스코드 개인서버
      </div>
    </a>
  );
}

function pillKakao() {
  return (
    <a
      href="https://open.kakao.com/me/koderpark"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-amber-300 text-gray-900">
        <RiKakaoTalkFill />
        카카오톡 @koderpark
      </div>
    </a>
  );
}

function pillGithub() {
  return (
    <a
      href="https://github.com/Koderpark"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-purple-800 text-gray-100">
        <FaGithub />
        @koderpark
      </div>
    </a>
  );
}

function pillEmail() {
  return (
    <a
      href="mailto:koder0205@gmail.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-gray-900 text-gray-100">
        <MdOutlineMail />
        koder0205@gmail.com
      </div>
    </a>
  );
}

function pillBOJ() {
  return (
    <a
      href="https://solved.ac/profile/koder0205"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="contact pill pill-lg bg-green-400 text-gray-900">
        Solved.AC @koder0205
      </div>
    </a>
  );
}

function pillBlog() {
  return (
    <a href="https://blog.koder.page" target="_blank" rel="noreferrer noopener">
      <div className="contact pill pill-lg bg-gray-900 text-gray-100">
        <FaArrowUpRightFromSquare />
        개인 블로그
      </div>
    </a>
  );
}

export default async function Contact() {
  return (
    <List>
      <Title header="연락처" subheader="Contact" />
      <p className="text-xl">커피챗을 포함해 자유롭게 연락 주세요.</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {pillTwitter()}
        {pillEmail()}
        {pillDiscord()}
        {pillGithub()}
        {pillKakao()}
        {pillBOJ()}
        {pillBlog()}
      </div>
    </List>
  );
}
