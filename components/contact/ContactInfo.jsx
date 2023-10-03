import { IoIosCall } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

function ContactInfo() {
  return (
    <>
      <div>
        <div className="flex gap-2 items-center">
          <IoIosCall />
          <span className="text-sm">CALL US</span>
        </div>
        <div>
          <span className="text-sm">
            <a href="tel:123-456-7891"> 1(234)567-891</a>
          </span>
          <span className="text-sm">
            <a href="tel:123-498-7654"> 1 (234) 987-654</a>
          </span>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <MapPinIcon className="text-white h-5" />
          <span className="text-sm">LOCATION</span>
        </div>
        <span className="text-sm">121 Rock Street, New York, NY 10456</span>
      </div>
      <div>
        <div className="flex gap-2">
          <ClockIcon className="h-5" />
          <span className="text-sm">BUSINESS HOURS</span>
        </div>
        <span className="text-sm">
          Mon-Fri.... 10am-8pm, Sat, Sun ..... closed
        </span>
      </div>
    </>
  );
}

export default ContactInfo;
