// import { resolve } from 'path';
// import { lstatSync, readdirSync } from 'fs';
// import sidebarName from './sidebarName.json';
// const isFile = (path) => {
// 	return lstatSync(path).isFile();
// };

// const deleteFileSuffix = (fileName) => {
// 	const index = fileName.lastIndexOf('.');

// 	return index > 0 ? fileName.slice(0, index) : fileName;
// };

// export const createSidebarByDir = (dirName) => {
// 	const path = resolve(__dirname, '../../' + dirName);
// 	const fileNames = readdirSync(path);
// 	return fileNames.map((item) => {
// 		if (isFile(path + '\\' + item)) {
// 			console.log(dirName + '/../' + deleteFileSuffix(item));
// 			return { text: sidebarName[deleteFileSuffix(item)] ?? deleteFileSuffix(item), link: '/' + dirName + '/' + deleteFileSuffix(item) };
// 		} else {
// 			console.log(1);
// 			return { text: sidebarName[deleteFileSuffix(item)] ?? deleteFileSuffix(item), children: createSidebarByDir(dirName + '/' + item) };
// 		}
// 	});
// };
