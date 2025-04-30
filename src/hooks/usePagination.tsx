interface usePaginationProps {
    totalElements: number
    elementsPerPag: number
    currentPage: number
}
export const usePagination = ({ totalElements, elementsPerPag, currentPage }: usePaginationProps) => {

    const totalPages = (totalElements % elementsPerPag === 0)
        ? totalElements / elementsPerPag
        : Math.floor(totalElements / elementsPerPag) + 1

    const initialIndex = (currentPage - 1) * elementsPerPag;
    const finalIndex = ((initialIndex + elementsPerPag) - 1) > totalElements - 1
        ? totalElements - 1
        : (initialIndex + elementsPerPag) - 1

    return { totalPages, initialIndex, finalIndex }
}