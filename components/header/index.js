"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header({ user }) {
    const MenuItems = [
        {
            label: "Home",
            show: true,
            path: "/"
        },
        {
            label: "Login",
            show: !user,
            path: "/sign-in"
        },
        {
            label: "Register",
            show: !user,
            path: "/sign-up"
        },
        {
            label: "Jobs",
            show: user,
            path: "/jobs"
        },
        {
            label: "Activity",
            show: user,
            path: "/activity"
        },
        {
            label: "Membership",
            show: user,
            path: "/membership"
        },
        {
            label: "Account",
            show: user,
            path: "/Account"
        }

    ];

    return (
        <div>
            <header className="flex h-16 w-full shrink-0 items-center">
                <Sheet>


                    <SheetTrigger asChild>
                        <Button className="lg:hidden">
                            <AlignJustify className="h-6 w-6" />
                            <span className="sr-only">Toggle Navigation Menu</span>
                        </Button>
                    </SheetTrigger>


                    <SheetContent side="left">
                        <Link className="mr-6 hidden lg:flex" href="#">
                            <h3>JOBSCO</h3>
                        </Link>
                        <div className="grid gap-2 py-6">
                            {MenuItems.map((item, index) =>
                                item.show ? (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className="flex w-full items-center py-2 text-lg font-semibold"
                                    >
                                        {item.label}
                                    </Link>
                                ) : null
                            )}
                            <UserButton afterSignOutUrl="/" />

                        </div>
                    </SheetContent>
                </Sheet>
                <Link className="hidden font-bold text-3xl lg:flex mr-6" href={"/"}>
                    <h3>JOBSCO</h3>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-6 items-center">
                    {MenuItems.map((menuItem) =>
                        menuItem.show ? (
                            <Link
                                href={menuItem.path}
                                onClick={() => sessionStorage.removeItem("filterParams")}
                                className="group inline-flex h-9 w-max items-center rounded-md  px-4 py-2 text-sm font-medium"
                            >
                                {menuItem.label}
                            </Link>
                        ) : null
                    )}
                    <UserButton afterSignOutUrl="/" />
                </nav>
            </header>
        </div>
    );
}

export default Header;
