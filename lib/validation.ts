/**
 * Validates and trims a small text input, ensuring it's a string and under 256 characters.
 * @param {FormDataEntryValue | null} text - The input text to validate.
 * @returns {string} The trimmed and validated text.
 * @throws {Error} If the input is not a string or exceeds 255 characters.
 */
export function validateSmallText(text: FormDataEntryValue | null): string {
  if (typeof text !== "string") {
    throw new Error("Invalid title: expected string");
  }
  const validatedText = text.trim();
  if (validatedText.length > 255) {
    throw new Error("Title should have less than 256 characters");
  }
  return validatedText;
}
