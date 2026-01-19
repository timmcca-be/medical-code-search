import fs from 'fs';

const pattern = /^(?<code>\S+)\s+(?<description>.*)$/;

const textFilePath = process.argv[2];
const codes = fs
	.readFileSync(textFilePath, { encoding: 'utf-8' })
	.split('\n')
	.filter((line) => line !== '')
	.map((line) => {
		const result = pattern.exec(line.trim());
		if (result == null) {
			console.error('failed:', JSON.stringify(line));
			return null;
		}
		return result.groups;
	});

fs.writeFileSync('./src/lib/codes.json', JSON.stringify(codes));
