import React from "react";
import Image from "next/image";
import { ShoppingBag, Shield, Truck } from "lucide-react";
import Container from "@/components/molecules/container";
import ButtonShopping from "./buttonShopping";
function HomeHeader() {
  return (
    <Container id="home-header" >
      <div className="grid lg:grid-cols-5   gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 lg:col-span-3 order-last lg:order-first">
          {/* Badge */}
          <div className="flex items-center space-x-2 text-sm lg:justify-start justify-center">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span className="text-gray-700">The Best Online Grocery Store</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 flex flex-col items-center  justify-center lg:items-start  lg:justify-start text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Your One-Stop Shop
              <br />
              for <span className="text-primary">Quality Products</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur. Tincidunt eu purus risus
              dolor pharetra tristique pulvinar. Purus id aliquet dolor odio
              venenatis imperdiet urna.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6">
            <ButtonShopping />
          </div>

          {/* Rating Section */}
          <div className="flex  lg:col-span-2 lg:flex-row flex-col justify-center lg:justify-start items-center space-x-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
            </div>
            <div className="lg:text-left text-center space-y-1">
              <div className="font-semibold text-gray-900 text-lg">
                4.9+ Rating
              </div>
              <div className="text-gray-600 text-sm">
                Trusted by 50K+ Customers
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative order-first lg:order-last">
          <div className="relative w-72 h-72 lg:w-84 lg:h-84 2xl:w-96 2xl:h-96 mx-auto">
            {/* Circular border decoration */}
            <div className="absolute inset-0 border-2 border-dashed border-primary rounded-full"></div>

            {/* Main circular image */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-white">
              <Image
                src="/header-illustration.jpg"
                alt="Happy woman with grocery bag"
                width={350}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feature badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border animate-showhide">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-gray-900">
                  Secure Payment
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border  animate-showhide">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeHeader;
