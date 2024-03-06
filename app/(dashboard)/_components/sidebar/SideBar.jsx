"use client";

import {
  FiArchive,
  FiClock,
  FiEdit2,
  FiFile,
  FiFolder,
  FiFolderPlus,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LinkWithIcon, LinkWithIconWrapper } from "../link/Links";

const SideBar = () => {
  return (
    <>
      <div className="w-full bg-[--primary-bg]   text-[rgba(255,255,255,0.8)] top-[135px] overflow-hidden  h-full">
        <div className="flex flex-col p-2 hover:overflow-y-scroll h-full">
          <Accordion
            type="multiple"
            collapsible="true"
            defaultValue={["favorites"]}
          >
            <AccordionItem value="favorites">
              <AccordionTrigger>Favorites</AccordionTrigger>
              <AccordionContent>
                <LinkWithIconWrapper>
                  <Link
                    href="/mail"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<TbMail className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Inbox"
                    />
                    <span className="text-[--text-blue] font-[600]">1000</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/mail/drafts"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiEdit2 className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Drafts"
                    />
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<TbMail className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Deleted items"
                    />
                    <span className="text-[--text-blue] font-[600]">23</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      label="Add Favorite"
                      className="text-[--text-blue] flex items-center gap-2"
                    />
                  </Link>
                </LinkWithIconWrapper>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="multiple"
            collapsible="true"
            defaultValue={["folders"]}
          >
            <AccordionItem value="folders">
              <AccordionTrigger>Folders</AccordionTrigger>
              <AccordionContent>
                <LinkWithIconWrapper>
                  <Link
                    href="/mail"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<TbMail className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Inbox"
                    />
                    <span className="text-[--text-blue] font-[600]">1000</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/mail/drafts"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiEdit2 className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Drafts"
                    />
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiSend className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Sent Items"
                    />
                    <span className="text-[--text-blue] font-[600]">5</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiClock className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Snoozed"
                    />
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiTrash2 className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Deleted Items"
                    />
                    <span className="text-[--text-blue] font-[600]">23</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={
                        <FiFolderPlus className="h-[18px] w-[18px] mt-[2px]" />
                      }
                      label="Junk Email"
                    />
                    <span className="text-[--text-blue] font-[600]">78</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={
                        <FiArchive className="h-[18px] w-[18px] mt-[2px]" />
                      }
                      label="Archive"
                    />
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiFile className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Notes"
                    />
                    <span className="text-[--text-blue] font-[600]">5</span>
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      icon={<FiFolder className="h-[18px] w-[18px] mt-[2px]" />}
                      label="Conversation History"
                    />
                  </Link>
                </LinkWithIconWrapper>
                <LinkWithIconWrapper>
                  <Link
                    href="/"
                    className="flex items-center justify-between w-full"
                  >
                    <LinkWithIcon
                      label="Create new folder"
                      className="text-[--text-blue] flex items-center gap-2"
                    />
                  </Link>
                </LinkWithIconWrapper>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SideBar;
