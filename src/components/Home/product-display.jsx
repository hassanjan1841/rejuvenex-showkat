import HeroImage from "@/assets/asset-1.webp";
export default function ProductDisplay({ imageWidth }) {
  return (
    <div className="relative w-full ">
      <div className=" flex justify-center items-center">
        <div className="flex ">
          <img
            src={HeroImage}
            alt={"hero-image"}
            className={imageWidth + " h-full object-cover rounded-lg"}
          />
        </div>
      </div>
    </div>
  );
}
