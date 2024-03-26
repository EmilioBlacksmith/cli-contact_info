import boxen from "boxen";
import data from "./data.js";
import chalk from "chalk";

const businessCard = boxen(
	[
		chalk.whiteBright(`Howdy!!`),
		`${data.name}`,
		`${data.handle}\n`,
		`I'm a ${data.work}\n`,
		chalk.whiteBright(`\nMy Links.`),
		`My YouTube Channel => ${data.youtube}`,
		`My Website => ${data.website}`,
		`My Personal Blog => ${data.blog}`,
		`My Github => ${data.github}\n`,
		chalk.whiteBright(`\nMy Socials.`),
		`Twitter => ${data.twitter}`,
		`IG => ${data.instagram}\n\n`,
		`${data.description}`,
	].join("\n"),
	{
		height: 26,
		width: 100,
		borderStyle: "round",
		textAlignment: "center",
		float: "left",
		dimBorder: true,
		margin: 1,
		padding: 1,
	}
);

export default businessCard;
