import aws from "../assets/partners/aws.svg";
import dell from "../assets/partners/dell.svg";
import google from "../assets/partners/google.svg";
import openai from "../assets/partners/openai.svg";
import microsoft from "../assets/partners/microsoft.svg";

export default function Partners() {
	return (
		<div className="max-ctn px-0 flex justify-between max-md:justify-start items-center flex-wrap gap-8 py-10">
			<img src={aws} alt="aws" className="h-14 max-md:h-9 w-auto" />
			<img src={dell} alt="dell" className="h-10 max-md:h-6 w-auto" />
			<img src={google} alt="google" className="h-12 max-md:h-8 w-auto" />
			<img src={openai} alt="openai" className="h-12 max-md:h-8 w-auto" />
			<img src={microsoft} alt="microsoft" className="h-12 max-md:h-7 w-auto" />
		</div>
	);
}
