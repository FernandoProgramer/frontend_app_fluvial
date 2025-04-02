import React, { ElementType, ReactNode } from "react";

export default function validateChildren(
    children: ReactNode,
    allowedTypes: ElementType | ElementType[]
) {
    if (!children) return;

    const allowedTypesArray = Array.isArray(allowedTypes)
        ? allowedTypes
        : [allowedTypes];

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const childType = child.type as ElementType;
        const isAllowed = allowedTypesArray.some(
            allowedType => allowedType === childType
        );

        if (!isAllowed) {
            const allowedNames = allowedTypesArray.map(getDisplayName).join('", "');
            const actualName = getDisplayName(childType);
            throw new Error(
                `[validateChildren] Componente <${actualName}> no es válido. ` +
                `Solo se permiten: "${allowedNames}".`
            );
        }
    });
}

function getDisplayName(type: ElementType): string {
    return (
        (type as any).displayName ||
        (type as any).name ||
        (typeof type === 'string' ? type : 'Unknown')
    );
}