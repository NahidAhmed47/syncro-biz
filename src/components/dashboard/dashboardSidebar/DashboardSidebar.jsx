import Image from "next/image";
import NavLink from "@/components/shared/Navbar/NavLink";
import logo from "@/assests/syncro-logo.png";
import Link from "next/link";
import relationalRoute from "@/routes-data/relationalRoute";
import dashboardRoute from "@/routes-data/dashboardRoute";

const DashboardSidebar = () => {
  return (
    <div className=" relative h-full">
      <div className="w-full flex justify-center gap-2 items-center pt-4 ">
        <Image src={logo} alt="logo" fill={false}></Image>
        <h1 className="text-2xl font-extrabold text-white">
          Syncro<span className="text-primary">Biz</span>
        </h1>
      </div>
      <div className="mt-8 flex flex-col gap-y-3 2xl:gap-y-4 w-full">
        {dashboardRoute.map((singleRoute) => (
          <NavLink
            key={singleRoute.id}
            exact={singleRoute.href === "/dashboard"}
            activeClassName="bg-gradient-to-r from-primary to-secondary duration-500 transition-all"
            href={singleRoute.href}
            className="px-3 py-1 mx-2 2xl:mx-4 rounded-lg ">
            <div className="flex items-center gap-2 w-full">
              {singleRoute.icon}
              <p className="text-[18px] text-white font-medium w-full">
                {singleRoute.routeName}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="absolute bottom-14 w-full">
        <hr className="my-4 mx-auto border border-white w-[90%] " />
        <div className="mt-4 ml-8">
          <ul className="list-disc list-white mt-2">
            {relationalRoute.map((singleRoute) => (
              <li key={singleRoute.id} className="mb-1 mx-6 text-white ">
                <Link href={singleRoute.href}>{singleRoute.routeName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center w-full pt-2 text-white text-base sm:text-lg inline-block absolute bottom-1 2xl:bottom-3">
        @SyncroBiz
      </p>
    </div>
  );
};

export default DashboardSidebar;
