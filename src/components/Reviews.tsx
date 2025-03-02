import user1 from "../assets/Reviews/user-1.svg";
import user2 from "../assets/Reviews/user-2.svg";
import FiveStar from "../assets/icons/5-Star-Review.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Reviews() {
	const [slidesPerView, setSlidesPerView] = useState(1);
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: slidesPerView,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	};

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth >= 768) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(1);
			}
		};

		handleResize(); // Set initial value
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="relative overflow-hidden max-ctn py-20">
			<div className="max-ctn mb-16 text-center">
				<p className="text-brandPurple font-semibold text-sm">540+ Happy Students</p>
				<h2 className="text-3xl font-semibold text-darkBlue leading-snug mt-3">Don't Just Take Our Words</h2>
			</div>

			<Slider {...settings}>
				{reviews.map((item, i) => (
					<div className="w-full max-w-110 !flex max-sm:flex-col items-center gap-4" key={i}>
						<img className="h-30 w-30 rounded-lg object-cover" src={item.imgUrl} alt="User" />

						<div className="max-sm:text-center">
							<img className="max-sm:mx-auto" src={FiveStar} alt="5 star" />
							<p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.review}</p>

							<div className="w-fit mt-2 flex gap-5 max-sm:mx-auto">
								<p className="text-xs font-semibold text-gray-600">{item.name}</p>
								<p className="text-xs text-gray-400">{item.title}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

const reviews = [
	{
		name: "Jenny Wilson",
		title: "Frontend Dev",
		review:
			"Learning at Pearlcity Hub was a game-changer, equipping me with real-world skills and unforgettable mentorship.",
		imgUrl: user1,
	},
	{
		name: "Devon Lane",
		title: "Designer",
		review:
			"Pearlcity Hub transformed my career with hands-on training, expert guidance, and a supportive learning community.”",
		imgUrl: user2,
	},
	{
		name: "Jenny Wilson",
		title: "Frontend Dev",
		review:
			"Learning at Pearlcity Hub was a game-changer, equipping me with real-world skills and unforgettable mentorship.",
		imgUrl: user1,
	},
	{
		name: "Devon Lane",
		title: "Designer",
		review:
			"Pearlcity Hub transformed my career with hands-on training, expert guidance, and a supportive learning community.”",
		imgUrl: user2,
	},
];
