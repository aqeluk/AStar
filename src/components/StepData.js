import { MdOutlineContactPhone } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { RiFundsLine } from "react-icons/ri";
import { FcStart } from "react-icons/fc";

export const StepData = [
    {
      title: "Enquire",
      description:
        "Our experienced childminders provide a safe, nurturing, and educational environment for your children. We prioritize each child's unique needs, ensuring they feel comfortable and secure while in our care. Contact us to learn more about our comprehensive childminding services and how we can support your family.",
      icon: <MdOutlineContactPhone className="w-5 h-5 mr-3" />,
    },
    {
      title: "Book a Meeting",
      description:
        "Schedule a meeting with our team to discuss your childminding needs and preferences. We will work with you to find the best match for your family and ensure a smooth transition for your child.",
      icon: <GiTeamIdea className="w-5 h-5 mr-3" />,
    },
    {
      title: "Taster & Assessment",
      description:
        "Bring your child in for a taster session and assessment. Our team will evaluate your child's needs and make any necessary adjustments to ensure their experience with our childminders is a positive one.",
      icon: <RiFundsLine className="w-5 h-5 mr-3" />,
    },
    {
      title: "Confirm & Start",
      description:
        "Once you have completed the previous steps and are satisfied with our services, confirm your booking and start enjoying our professional childminding services.",
      icon: <FcStart className="w-5 h-5 mr-3" />,
    },
  ];