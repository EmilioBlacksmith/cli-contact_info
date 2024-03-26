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
	name: chalk.bold.blue(`${infoData.full_name}`),
	handle: chalk.white.dim(`@${infoData.handle}`),
	work: chalk.italic.blue(`${infoData.job_title}`),
	description: chalk.grey(`${infoData.description}`),
	github: chalk.blue(`${infoData.github_link}`),
	twitter: chalk.blue(`${infoData.twitter_link}`),
	instagram: chalk.blue(`${infoData.instagram_link}`),
	youtube: chalk.blue(`${infoData.youtube_link}`),
	website: chalk.blue(`${infoData.website_link}`),
	blog: chalk.blue(`${infoData.blog_link}`),
};

export default data;
