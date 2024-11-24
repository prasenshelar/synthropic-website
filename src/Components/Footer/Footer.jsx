const Footer = () => {
  return (
    <>
      <footer className="border-t relative-font-medium bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Synthropic. All rights reserved. |
            <a
              href="mailto:info@synthropic.com"
              className="hover:text-purple-600 font-medium ml-1"
            >
              info@synthropic.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
