import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";

export default function NavMenuMobile() {
  return (
    <div className="absolute top-full left-0 right-0 bg-black xl:hidden px-5">
      <Accordion type="single" collapsible className=" uppercase">
        <AccordionItem value="shipping">
          <AccordionTrigger>Oferta</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>grafik</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>cennik</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                {" "}
                <Link href="/docs">Koszalin</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Polanów</Link>
              </li>
              <li>
                {" "}
                <Link href="/docs">Biały Bór</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="kadra">
          <AccordionTrigger hideChevron={true}>
            <Link href="/docs">kadra</Link>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="kolonie">
          <AccordionTrigger hideChevron={true}>kolonie</AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="kolonie">
          <AccordionTrigger hideChevron={true}>Aktualności</AccordionTrigger>
        </AccordionItem>
      </Accordion>
      <div className="bg-blue-500 flex justify-end gap-2">
        <ButtonSecondary />
        <ButtonPrimary />
      </div>
    </div>
  );
}
