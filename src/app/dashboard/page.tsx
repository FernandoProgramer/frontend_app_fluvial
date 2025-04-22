import Button from "@/components/ui/Button";

export default function page() {
    return (
        <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">success</Button>
            <Button variant="outline">outline</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
            <Button variant="disabled">disabled</Button>
        </div>
    )
}
