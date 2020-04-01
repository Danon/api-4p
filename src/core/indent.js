export default function (string, indents) {
    return string.split("\n").map(string => " ".repeat(indents) + string).join("\n").substr(indents);
}