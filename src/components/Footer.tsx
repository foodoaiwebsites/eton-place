import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { ArrowRight, ChevronRight } from "lucide-react";

const Footer = ({}) => {
  return (
    <footer className="relative flex h-full w-full bg-[#131313] px-4 py-12 md:px-[50px] md:py-36 lg:px-[100px] 2xl:px-[160px]">
      <div className="absolute bottom-14 right-14 hidden md:block">
        <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
          © 2025 Eton Place
        </span>
      </div>
      <div className="absolute bottom-14 left-20 hidden md:block">
        <Link href={"https://foodo.ai/"} target="_blank">
          <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
            Powerd by fodo{" "}
          </span>
        </Link>
      </div>
      <div className="hidden flex-col gap-6 md:flex md:flex-row md:gap-20 2xl:gap-44">
        {/* first div */}
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="ml-2 md:ml-0">
            <h1 className="font-playfair text-3xl font-[400] italic text-[#FBEAD2] md:text-5xl">
              Subscribe to <br />
              our newsletter
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:gap-16">
            <div className="flex flex-col items-start justify-start gap-2">
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/menu">Menu</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/about-us">Our Story</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/table-booking">booking</Link>
              </Button>
              {/* <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="">Gift voucher</Link>
              </Button> */}
            </div>
            <div className="ml-4 flex flex-col gap-2 md:ml-0">
              <h6 className="font-manrope text-base font-[700] uppercase tracking-[1.62px] [color:var(--text-light,#FBEAD2)]">
                Contact
              </h6>
              <Link
                href="tel:+1517381368"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                1517381368
              </Link>
              <Link
                href="https://g.co/kgs/6Sbn2c6"
                target="_blank"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                258 Woolton Rd, Childwall, Liverpool <br /> L16 8NE, United
                Kingdom
              </Link>
              <Link
                href="mailto:info@etonplacerestaurant.com"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                info@etonplacerestaurant.com
              </Link>

              <div className="flex flex-row items-center gap-3 pt-8">
                <Link
                  href={"https://www.instagram.com/etonplacewoolton/?hl=en-gb"}
                  target="_blank"
                >
                  {" "}
                  <Icons.instagram className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/Etonplacewoolton/?locale=en_GB"
                  }
                  target="_blank"
                >
                  {" "}
                  <Icons.facebook className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link href={"https://g.co/kgs/6Sbn2c6"} target="_blank">
                  {" "}
                  <Icons.google className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="ml-4 flex flex-col gap-6 md:ml-0 md:gap-32">
          <div className="flex flex-col gap-4 md:gap-8">
            <p className="w-full max-w-[400px] font-manrope text-sm font-[300] tracking-[0.6px] [color:var(--text-light,#FBEAD2)] md:text-base">
              By subscribing to the newsletter, you will always be up to date.
              Find out about new products, events, and specials.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full border-0 border-b-[1px] border-[color:var(--text-light,#FBEAD2)] bg-transparent px-2 py-4 text-[color:var(--text-light,#FBEAD2)] placeholder-[#958B7D] focus:outline-none focus:ring-0 md:w-[250px]"
              />

              <div>
                <Button className="mt-2 rounded-none border-[color:var(--text-light,#FBEAD2)] bg-transparent py-6 ring-1 ring-[color:var(--text-light,#FBEAD2)]">
                  <span className="flex flex-row items-center justify-center text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] [color:var(--text-light,#FBEAD2)]">
                    Subscribe <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-manrope text-base font-[700] [color:var(--text-light,#FBEAD2)]">
                Opening hours
              </span>
              <span className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]">
                Mon - Sun : 12-10PM
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:hidden">
            <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
              © 2025 Eton Place
            </span>

            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
                Powerd by fodo{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:hidden md:flex-row md:gap-20 2xl:gap-44">
        {/* first div */}
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="ml-2 md:ml-0">
            <h1 className="font-playfair text-3xl font-[400] italic text-[#FBEAD2] md:text-5xl">
              Subscribe to <br />
              our newsletter
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-4 md:flex-row md:gap-16">
            <div className="flex flex-col items-start justify-start gap-2">
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/menu">Menu</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/about-us">Our Story</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="link"
                className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
                asChild
              >
                <Link href="/table-booking">booking</Link>
              </Button>
            </div>
            <div className="ml-4 mt-2 flex flex-col gap-2 md:ml-0">
              <h6 className="font-manrope text-base font-[700] uppercase tracking-[1.62px] [color:var(--text-light,#FBEAD2)]">
                Contact
              </h6>
              <Link
                href="tel:+1517381368"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                1517381368
              </Link>
              <Link
                href="https://g.co/kgs/6Sbn2c6"
                target="_blank"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                258 Woolton Rd, Childwall, Liverpool <br /> L16 8NE, United
                Kingdom
              </Link>
              <Link
                href="mailto:info@etonplacerestaurant.com"
                className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]"
              >
                info@etonplacerestaurant.com
              </Link>

              <div className="flex flex-row items-center gap-3 pt-8">
                <Link
                  href={"https://www.instagram.com/etonplacewoolton/?hl=en-gb"}
                  target="_blank"
                >
                  {" "}
                  <Icons.instagram className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/Etonplacewoolton/?locale=en_GB"
                  }
                  target="_blank"
                >
                  {" "}
                  <Icons.facebook className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
                <Link href={"https://g.co/kgs/6Sbn2c6"} target="_blank">
                  {" "}
                  <Icons.google className="[color:var(--text-light,#FBEAD2)]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="ml-4 flex flex-col gap-6 md:ml-0 md:gap-32">
          <div className="flex flex-col gap-2">
            <span className="font-manrope text-base font-[700] [color:var(--text-light,#FBEAD2)]">
              Opening hours
            </span>
            <span className="font-manrope text-sm font-[400] [color:var(--text-light,#FBEAD2)]">
              Mon - Sun : 12-10PM
            </span>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <p className="w-full max-w-[400px] font-manrope text-sm font-[300] tracking-[0.6px] [color:var(--text-light,#FBEAD2)] md:text-base">
              By subscribing to the newsletter, you will always be up to date.
              Find out about new products, events, and specials.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full border-0 border-b-[1px] border-[color:var(--text-light,#FBEAD2)] bg-transparent px-2 py-4 text-[color:var(--text-light,#FBEAD2)] placeholder-[#958B7D] focus:outline-none focus:ring-0 md:w-[250px]"
              />

              <div>
                <Button className="mt-2 rounded-none border-[color:var(--text-light,#FBEAD2)] bg-transparent py-6 ring-1 ring-[color:var(--text-light,#FBEAD2)]">
                  <span className="flex flex-row items-center justify-center text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] [color:var(--text-light,#FBEAD2)]">
                    Subscribe <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:hidden">
            <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
              © 2025 Eton Place
            </span>

            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="font-manrope text-sm font-[400] tracking-[0.96px] text-[#64615C]">
                Powerd by fodo{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
