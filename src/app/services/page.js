import Info from "@/components/Services/Info";
import Exclusive from "@/components/Services/Exclusive";
import Reviews from "@/components/Services/Reviews";

export const metadata = {
  title: "Services | Below Zero: Shaved Ice",
  description: "Learn more about Below Zero's services.",
};

const ServicesPage = () => {
  return (
    <div className="pt-20 mb-20 space-y-20 sm:mb-28 sm:space-y-28">
      <Info />
      <Exclusive />
      <Reviews />
    </div>
  );
};

export default ServicesPage;
