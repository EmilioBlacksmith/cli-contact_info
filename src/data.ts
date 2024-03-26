import fs from "fs";
import path from "path";
import chalk from "chalk";

const personalInfoFilePath = "config/personal-info.json";
const currentFilePath = new URL(import.meta.url).pathname;
const currentDirectory = path.dirname(currentFilePath);
const dataCatch = fs.readFileSync(
	path.resolve(currentDirectory.substring(1), personalInfoFilePath),
	"utf-8"
);

const infoData = JSON.parse(dataCatch);

//Processed data
const data = {
	name: chalk.bold.blueBright(`${infoData.full_name}`),
	handle: chalk.gray.dim(`@${infoData.handle}`),
	work: chalk.italic.blue(`${infoData.job_title}`),
	description: chalk.whiteBright(`${infoData.description}`),
	github: chalk.blueBright(`${infoData.github_link}`),
	twitter: chalk.blueBright(`${infoData.twitter_link}`),
	instagram: chalk.blueBright(`${infoData.instagram_link}`),
	youtube: chalk.blueBright(`${infoData.youtube_link}`),
	website: chalk.blueBright(`${infoData.website_link}`),
	blog: chalk.blue(`${infoData.blog_link}`),
	email: `${infoData.email}`,
	links: `${infoData.links}`,
	resume: `${infoData.resume}`,
	meeting: `${infoData.meeting}`,
	channel: `${infoData.youtube_link}`,
};

export default data;
