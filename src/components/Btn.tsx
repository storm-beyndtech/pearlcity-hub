import { ArrowLeft, ArrowRight } from "lucide-react";

type dataProp = {
	type?: "primary" | "small" | "auth";
	label?: string;
	disabled?: boolean;
	btnAction?: "button" | "submit" | "reset" | undefined;
	direction?: "left" | "right";
	onClick?: () => void;
	enabled?: boolean;
};

export default function Btn({ type, direction, onClick, enabled }: dataProp) {
	switch (type) {
    

		case "small":
			return (
				<div
					onClick={enabled ? onClick : undefined}
					className={`w-12 h-12 grid place-content-center rounded-xl cursor-pointer 
              bg-brandBlue3/5 text-xl transition-colors duration-200
              ${
								enabled ? "text-brandPurple bg-brandPurple/5 hover:bg-brandPurple/10" : "text-darkBlue/20 cursor-not-allowed"
							}`}
				>
					{direction === "left" ? <ArrowLeft /> : <ArrowRight />}
				</div>
			);

		default:
			return;
	}
}
