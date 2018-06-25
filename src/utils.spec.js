const levels = 5;

const levelsToEdges = (levels) => levels * 2 - 1;

function getStart(p) {
    if (p.first) {
        return 1;
    }
}

function getEnd(p) {
    if (p.last) {
        return 1;
    }
}

function position(p) {
    return [getStart(p), getEnd(p)];
}

test("base", () => {
    const first = true;
    const last = true;

    // level 1
    expect(position({ level: 1, index: 1, first, last })).toBe([1, 9]);

    // level 2
    expect(position({ level: 2, index: 1, first })).toBe([1, 5]);
    expect(position({ level: 2, index: 2, last })).toBe([5, 9]);

    // level 3
    expect(position({ level: 3, index: 1, first })).toBe([1, 4]);
    expect(position({ level: 3, index: 2 })).toBe([4, 6]);
    expect(position({ level: 3, index: 3, last })).toBe([6, 9]);
});
