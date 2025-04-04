import { sizeIcon } from "@/components/layout/Sidebar";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/Select";
import { typeDocumentOptions } from "@/options/typeDocumentOptions";
import { Album } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-2 overflow-y-auto w-full h-screen">
            <div className="flex gap-2.5">
                <div className="flex flex-col gap-1.5 p-2 text-center">
                    <span>Defaults</span>
                    <div className="flex flex-col gap-4">
                        <Button className="flex items-center">
                            <Album size={sizeIcon} /> <span>default</span>
                        </Button>
                        <Button size="sm">
                            default - sm
                        </Button>
                        <Button size="lg">
                            default - lg
                        </Button>
                        <Button variant="success">
                            Success
                        </Button>
                        <Button variant="light">
                            light
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 p-2 text-center">
                    <span>Secondary</span>
                    <div className="flex flex-col gap-4">
                        <Button variant="secondary">
                            Secondary
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 p-2 text-center">
                    <span>Destructives</span>
                    <div className="flex flex-col gap-4">
                        <Button variant="destructive" size="md">
                            destructive
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 p-2 text-center">
                    <span>Outlines</span>
                    <div className="flex flex-col gap-4">
                        <Button variant="outline" size="md">
                            outline
                        </Button>
                        <Button variant="outline-destructive">
                            outline destructive
                        </Button>
                        <Button variant="outline-secondary">
                            outline secondary
                        </Button>
                        <Button variant="outline-light">
                            outline light
                        </Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-2">
                    <Input name="name" errors={{}} />
                    <Input name="password" type="password" placeholder="Enter your password" />
                    <div>
                        <Label>
                            Fecha de nacimiento
                        </Label>
                        <Input name="inputdate" errors={{}} type="date" />
                    </div>

                    {/* <Select name="typeDocument">
                        {typeDocumentOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                        ))}
                    </Select> */}
                </div>
            </div>

        </div>
    )
}
