import { resolve } from 'path';
import { lstatSync, readdirSync } from 'fs';

const isFile = (path) => {
	return lstatSync(path).isFile();
};

const deleteFileSuffix = (fileName) => {
	return fileName.slice(0, fileName.lastIndexOf('.'));
};

export const createSidebarByDir = (dirName) => {
	const path = resolve(__dirname, '../../' + dirName);
	const fileNames = readdirSync(path);
	return fileNames.map((item) => {
		if (isFile(path + '\\' + item)) {
			return { text: deleteFileSuffix(item), link: dirName + '/../' + deleteFileSuffix(item) };
		} else {
			// 1244
		}
	});
};
