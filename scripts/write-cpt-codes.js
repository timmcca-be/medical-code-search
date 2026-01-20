import fs from 'fs';

const textFilePath = process.argv[2];
const allLines = fs
	.readFileSync(textFilePath, { encoding: 'utf-8' })
	.split('\n')
	.filter((line) => line !== '');

const headerLineIndex = allLines.findIndex((line) => line.includes('\t'));
const headers = allLines[headerLineIndex].split('\t');
const cptCodeIndex = headers.indexOf('CPT Code');
const descriptionIndex = headers.indexOf('Consumer');
const codes = allLines.slice(headerLineIndex + 1).map((line) => {
	const fields = line.split('\t');
	return {
		code: fields[cptCodeIndex],
		description: fields[descriptionIndex]
	};
});

fs.writeFileSync('./src/lib/codes.json', JSON.stringify(codes));
