import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper parentBorder="border-t border-purple-500/10" showPlusIcons={false}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <footer className="w-full text-center text-sm p-5 space-y-1">
        <span className="font-display gradient-text font-semibold">Shoaib Riaz</span>
        <p className="text-muted-foreground/40">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
