function GenerateHashCode() {
    const HashRandom = Math.random().toString(32).substring(2);
    return `${HashRandom}`;
}

export const Hashed = GenerateHashCode();


