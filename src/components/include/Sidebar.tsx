import TiltedCard from "../TiltedCard";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="perspective-[30rem]">
        <div className="rotate-y-[6deg]">
          <TiltedCard
            imageSrc="/assets/img/me2.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="780px"
            containerWidth="480px"
            imageHeight="680px"
            imageWidth="480px"
            rotateAmplitude={12}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
