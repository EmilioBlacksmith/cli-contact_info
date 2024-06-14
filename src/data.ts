import fs from "fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const personalInfoFilePath = path.resolve(
	__dirname,
	"config/personal-info.json"
);

let dataCatch;
try {
	dataCatch = fs.readFileSync(personalInfoFilePath, "utf-8");
} catch (error) {
	console.error(
		chalk.red(`Error reading file at ${personalInfoFilePath}: ${error.message}`)
	);
	process.exit(1);
}

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
