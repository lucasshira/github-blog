import { useNavigate } from "react-router-dom";
import { LogoContainer } from "./styles";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate("/")}>
      <svg
        width="46"
        height="40"
        viewBox="0 0 46 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_406_120)">
          <path
            d="M19.2352 18.7646L19.2353 18.7647C19.919 19.4483 19.919 20.5516 19.2353 21.2353L19.2353 21.2353L4.23764 36.2353C3.55396 36.9189 2.44609 36.9189 1.7626 36.2353C1.07913 35.5517 1.07913 34.4483 1.7626 33.7646L1.76263 33.7646L14.9914 20.5302L15.5214 19.9999L14.9913 19.4697L1.7626 6.23771C1.7626 6.2377 1.76259 6.23769 1.76258 6.23769C1.07922 5.55408 1.07914 4.44622 1.76235 3.76252C1.76238 3.76249 1.76241 3.76245 1.76244 3.76242C1.7625 3.76237 1.76255 3.76232 1.7626 3.76226C2.44613 3.07945 3.55411 3.07945 4.23777 3.76248C4.2378 3.76251 4.23782 3.76253 4.23785 3.76256L19.2352 18.7646ZM43 33.25C43.9686 33.25 44.75 34.0314 44.75 35C44.75 35.9686 43.9686 36.75 43 36.75H20.5C19.5314 36.75 18.75 35.9686 18.75 35C18.75 34.0314 19.5314 33.25 20.5 33.25H43Z"
            stroke="#3294F8"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_406_120">
            <rect
              width="45"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>

      <span>Github Blog</span>
    </LogoContainer>
  );
};

export default Logo;
