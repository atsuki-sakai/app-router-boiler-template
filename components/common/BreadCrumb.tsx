import React from "react";
import Link from "next/link";

type Props = {
  links: { name: string; href: string }[];
};

const BreadCrumb = ({ links }: Props) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="bg-gray-50 w-fit rounded-md px-4 py-2 my-3"
    >
      <ol className="flex flex-wrap items-center gap-1 list-none text-xs tracking-wide">
        {links.map((link, index) => (
          <React.Fragment key={link.name + "-" + index}>
            <li
              className={
                index === links.length - 1 ? "text-gray-600" : "text-indigo-700"
              }
            >
              {index === links.length - 1 ? (
                <span>
                  {link.name.length > 18
                    ? link.name.slice(0, 18) + "..."
                    : link.name}
                </span>
              ) : (
                <Link href={link.href}>
                  {link.name.length > 18
                    ? link.name.slice(0, 18) + "..."
                    : link.name}
                </Link>
              )}
            </li>
            {index < links.length - 1 && (
              <li className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
