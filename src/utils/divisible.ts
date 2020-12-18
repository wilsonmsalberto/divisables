type DivisibleType = {
    divisible: number;
    end: number;
    start: number;
}

const isValidRange = (start, end) => start < end;

// Forces iteration in every step of the range
export const simpleLoopCount = ({
    divisible,
    end,
    start,
}: DivisibleType): number => {
    let counter = 0;

    if (!isValidRange(start, end)) {
        return counter;
    }

    for (let i = start; i <= end; i++) {
        if (i % divisible === 0) {
            counter++;
        }
    }

    return counter;
};

// Avoids iterating every step of the range by using the divider as our increment
export const smartLoopCount = ({
    divisible,
    end,
    start,
}: DivisibleType): number => {
    let counter = 0;

    if (!isValidRange(start, end)) {
        return counter;
    }

    const betterCounter = start < divisible ? divisible : start;

    for (let i = betterCounter; i <= end; i += divisible) {
        counter++;
    }

    // Should account for the start being 0
    if (start === 0) {
        return counter + 1;
    }

    return counter;
};

// Avoids iterating completely (math formula)
export const optimalCount = ({
    divisible,
    end,
    start,
}: DivisibleType): number => {
    if (!isValidRange(start, end)) {
        return 0;
    }

    const count = Math.ceil((end / divisible) - (start / divisible));

    // Should account for the first value as well
    if (start % divisible === 0) {
        return count + 1;
    }

    return count;
};