// import dependencies
import boxen from "boxen";
import data from "./data.js";

console.clear();

const card = boxen(
	[
		`Howdy 🤠`,
		`${data.name}`,
		`${data.handle}\n`,
		`I'm a ${data.work}\n`,
		`\nMy Main Links. ⚙️`,
		`My YouTube Channel => ${data.youtube}`,
		`My Website => ${data.website}`,
		`My Personal Blog => ${data.blog}`,
		`My Github => ${data.github}\n`,
		`\nMy Socials. 👀`,
		`Twitter => ${data.twitter}`,
		`IG => ${data.instagram}\n\n`,
		`${data.description}`,
	].join("\n"),
	{
		height: 27,
		width: 100,
		borderStyle: "round",
		textAlignment: "center",
		float: "center",
		dimBorder: true,
		margin: 1,
		padding: 1,
	}
);

console.log(card);

/*
console.log(
	boxen("Emilio Blacskmith\n test \ntest 2", {
		height: 15,
		width: 100,
		borderStyle: "round",
		textAlignment: "center",
		float: "center",
		dimBorder: true,
		margin: 1,
		padding: 1,
	})
);
*/
