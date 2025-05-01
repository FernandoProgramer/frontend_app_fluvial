
interface userSearchProps {
    fields: Record<string, string>[]
    searchTerm: string
}
export default function useSearch({
    fields,
    searchTerm,
}: userSearchProps) {

    const filteredElements = fields.filter(field => {
        return Object.keys(field).some(key => {
            const value = field[key];
            return value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        })
    });

    return filteredElements;

}