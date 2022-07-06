export default function truncate(str, useWordBoundary, n = 40) {
    // Truncate function for grid view in search page
    if (str.length <= n) {
        return str;
    }
    let res = null;
    const subString = str.substr(0, n - 1); // truncate by letters

    if (useWordBoundary) {
        res = subString.substr(0, subString.lastIndexOf(" ")); // truncate by word
        res = res.replace(/,\s*$/, ""); // remove last commas if present
    } else {
        res = subString;
    }
    return res + "...";
}
