import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the Back-to-Top button when the user scrolls down 300px from the top
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    // Scroll to the top of the page when the Back-to-Top button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <img
          src="upload.png"
          alt="back_to_top"
          width={50}
          className="fixed right-0 bottom-2 p-3 cursor-pointer bg-black rounded-lg"
          onClick={handleBackToTop}
        ></img>
      )}
    </>
  );
};

export default BackToTop;
