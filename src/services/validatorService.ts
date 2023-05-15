type ValidateObject = {
    fieldName: string,
    required: boolean,
    unique?: boolean
};

export async function validate(expectedData: ValidateObject[], data: any, prismaModel?: any) {
    let errors: string[] = [];

    for (const { fieldName, required, unique } of expectedData) {
        if (required == true && !data[fieldName]) {
            errors.push(`The field ${fieldName} is required.`);
        }

        if (unique) {
            const model = await prismaModel.findUnique({
               where: {
                   [fieldName]: data[fieldName]
               }
            });

            if (model) {
                errors.push(`${fieldName} ${data[fieldName]} is already in use!`);
            }
        }
    }

    return errors;
}
