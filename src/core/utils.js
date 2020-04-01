export default function any(object) {
    for (const any in object) return true;
    return false;
}
