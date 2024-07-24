import { browser } from '$app/environment';
import { page } from '$app/stores';
import { quadInOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { get, writable } from 'svelte/store';

export const currentImgIndices = writable<number[]>([]);

export const selectImg = (id: number) => {
	currentImgIndices.update((currentImgIndices) => {
		currentImgIndices.push(id);
		return currentImgIndices;
	});
};

export const deselectImg = (id: number) => {
	currentImgIndices.update((currentImgIndices) => {
		const idx = currentImgIndices.indexOf(id);

		if (idx >= 0) {
			currentImgIndices.splice(idx, 1);
		}
		return currentImgIndices;
	});
};

export enum Languages {
	ENG = "english",
	KOR = "korean"
}
export const language = writable<Languages>(Languages.ENG);

export const switchLanguage = (lang: Languages) => {
	currentImgIndices.set([]);
	language.set(lang);
}