import chalk from "chalk";
import data from "./data.js";
import open from "open";

const questions = [
	{
		type: "list",
		name: "action",
		message: "What would you like to do?\n",
		choices: [
			{
				name: `Check all of my Links.`,
				value: () => {
					open(data.links);
					console.log(`\n ${chalk.whiteBright.bold("See you soon!")} \n`);
				},
			},
			{
				name: `Check my Resume.`,
				value: () => {
					open(data.resume);
					console.log(`\n ${chalk.whiteBright.bold("Hope you like it!")} \n`);
				},
			},
			{
				name: `Send me an email.`,
				value: () => {
					open(`mailto:${data.email}`);
					console.log(
						`\n ${chalk.whiteBright.bold("See you at my inbox!")} \n`
					);
				},
			},
			{
				name: `Schedule a Meeting.`,
				value: () => {
					open(data.meeting);
					console.log(
						`\n ${chalk.whiteBright.bold("Hope meeting you soon!")} \n`
					);
				},
			},
			{
				name: `Check my YouTube Videos.`,
				value: () => {
					open(data.channel);
					console.log(
						`\n ${chalk.whiteBright.bold("Hope you like my videos!")} \n`
					);
				},
			},
		],
	},
];

export default questions;
