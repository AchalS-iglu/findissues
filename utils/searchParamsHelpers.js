export const types = ["lang", "tags"];

export const getTagsfromTagList = (query) => {
  const tags = query.split(" ");
  return tags;
};

export const addRemoveTagsToQuery = (query, tags) => {
  if (query === "") {
    return tags;
  }
  const newQuery = query.split(" ");
  if (newQuery.includes(tags)) {
    newQuery.splice(newQuery.indexOf(tags), 1);
    return newQuery.join(" ");
  }
  return `${query} ${tags}`;
};
