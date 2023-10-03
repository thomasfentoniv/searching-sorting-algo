/**
 * Recursively splits a given text by a specified separator.
 * Similar to the .split() method but implemented recursively
 */
function split(text, separator) {
  const separatorIndex = text.indexOf(separator);

  if (separatorIndex === -1) {
    return [text];
  }

  const beforeSeparator = text.substring(0, separatorIndex);
  const afterSeparator = text.substring(separatorIndex + separator.length);
  return [beforeSeparator, ...split(afterSeparator, separator)];
}

const sampleText = "Hello,World,From,ChatGPT";
console.log(split(sampleText, ","));
