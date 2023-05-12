export function handleError(error: any) {
    if (typeof error === "string") {
        return new Error(error);
    } else if (error instanceof Error) {
        return new Error(error.message);
    }

    return new Error('Type of the error not identified.');
}
