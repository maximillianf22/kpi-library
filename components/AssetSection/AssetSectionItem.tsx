interface AssetSectionItemProps {
    icon: string;
    name: string;
    description: string;
    date?: string;
    itemBackground?: boolean;
}

export default function AssetSectionItem({
    icon,
    name,
    description,
    date,
    itemBackground
}:AssetSectionItemProps) {
    return (
        <>
            <article className={`flex p-4 rounded-md ${itemBackground ? "bg-white border" : ""}`}>
                <div className="aspect-square shrink-0 justify-center items-center flex bg-slate-100 rounded-md">
                    <i>{icon}</i>
                </div>
                <div className="space-y-1 ml-4 my-auto">
                    <h3 className="font-medium text-sm">{name}</h3>
                    <p className="text-sm font-light">{description}</p>
                    <p className="text-xs text-slate-400">{date}</p>
                </div>
            </article>
        </>
    )
}
