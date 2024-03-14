import React from "react";
import Nav from "../../components/nav/Nav";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { FaPlus } from "react-icons/fa6";
import EmptyLottie from "../../components/lottieComponents/Empty.lottie";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import AuthGuard from "../../components/guard/Auth.Guard";

const HomePage = () => {
  return (
    <AuthGuard>
      <Sheet>
        <div className="w-screen h-screen bg-[#FCFCFD]">
          <Nav />
          <div className="px-52 mx-auto">
            <div className="flex justify-end">
              <SheetTrigger>
                <Button className={"bg-blue-500 space-x-2 mt-5"}>
                  <FaPlus />
                  <p>Create Contact</p>
                </Button>
              </SheetTrigger>
            </div>

            <div className="border bg-white h-[600px] w-full mt-5 rounded flex flex-col justify-center item-center">
              <div className="mx-auto">
                <EmptyLottie />
              </div>
              <p className="text-center font-semibold text-lg text-gray-400">
                There is no list...
              </p>
            </div>
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Contact Information</SheetTitle>
            </SheetHeader>
            <div></div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
