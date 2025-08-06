import Link from "next/link";
import Image from "next/image";
import InactiveLogo from "@/public/logo_primary_100.svg";
import Logo from "@/public/logo_primary_500.svg";
import { ChevronRightIcon } from "./Icon";

interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-x-2 text-base font-semibold">
        <li>
          <Link href="/" className="group block">
            <Image
              src={InactiveLogo}
              alt="Home Logo"
              width={32}
              height={32}
              className="block group-hover:hidden transition-opacity"
            />
            <Image
              src={Logo}
              alt="Home Logo Active"
              width={32}
              height={32}
              className="hidden group-hover:block transition-opacity"
            />
          </Link>
        </li>

        {crumbs.map((crumb, index) => {
          const isLastItem = index === crumbs.length - 1;

          return (
            <li key={crumb.href} className="flex items-center gap-x-2">
              <ChevronRightIcon className="h-4 w-4 text-primary-100" />

              {isLastItem ? (
                <span className="text-primary-500" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-primary-100 transition-colors hover:text-primary-500"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
