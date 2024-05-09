interface SocialLinksProps {
  text: string;
}

export function Social_links({ text }: SocialLinksProps) {
  return (
    <div className="flex my-1">
      <div className="font-bold py-1 my-1 pr-3">{text}</div>
      <img className="cursor-pointer p-1 m-1" alt="" src="/facebook.svg" />
      <img className="cursor-pointer p-1 m-1" alt="" src="/instagram.svg" />
      <img className="cursor-pointer p-1 m-1" alt="" src="/linkedin.svg" />
      <img className="cursor-pointer p-1 m-1" src="tiktok.svg" />
    </div>
  );
}
