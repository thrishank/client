interface SocialLinksProps {
  text: string;
}

export function Social_links({ text }: SocialLinksProps) {
  return (
    <div className="flex my-1">
      <div className="font-bold py-1 my-1 pr-3">{text}</div>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="cursor-pointer p-1 m-1" alt="" src="/facebook.svg" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="cursor-pointer p-1 m-1" alt="" src="/instagram.svg" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="cursor-pointer p-1 m-1" alt="" src="/linkedin.svg" />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="cursor-pointer p-1 m-1" src="tiktok.svg" />
      </a>
    </div>
  );
}
