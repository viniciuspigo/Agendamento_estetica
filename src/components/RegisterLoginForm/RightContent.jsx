import backgroundImage from "../../assets/background_opacity.svg";
import WomanImage from "../../assets/Woman.jpg";

function RightContent() {
  return (
    <div
      className="flex justify-center items-center bg-[--login-register-right-background] h-screen w-1/2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-[412px] h-[618px] rounded-[46px]"
        style={{
          backgroundImage: `url(${WomanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default RightContent
