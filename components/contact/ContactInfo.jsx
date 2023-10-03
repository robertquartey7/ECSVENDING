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
            <a href="tel:347-638-5747"> 1 347-638-5747</a>
          </span>
          <span className="text-sm">
            <a href="tel:347-638-5747"> 1 347-638-5747</a>
          </span>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <MapPinIcon className="text-white h-5" />
          <span className="text-sm">LOCATION</span>
        </div>
        <span className="text-sm">New York, NY</span>
      </div>
      <div>
        <div className="flex gap-2">
          <ClockIcon className="h-5" />
          <span className="text-sm">BUSINESS HOURS</span>
        </div>
        <span className="text-sm">Mon-Sat.... 9am-6pm, Sun ..... closed</span>
      </div>
    </>
  );
}

export default ContactInfo;
