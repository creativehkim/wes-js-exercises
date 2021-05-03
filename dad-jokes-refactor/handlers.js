import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButton } from './elements.js';
import { randomItemFromArray } from './utils.js';
import buttonText from './buttonText.js'

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText, 
    jokeButton.textContent
  );
}