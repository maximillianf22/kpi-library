import AssetSectionItem from "./AssetSectionItem";

interface AssetSectionProps {
    title: string
    description: string
    itemBackground?: boolean
}

export default function AssetSection({
    title,
    description,
    itemBackground = true
}: AssetSectionProps) {
    return (
        <>
            <section>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-slate-400">{description}</p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <AssetSectionItem
                        icon="chart"
                        name="Item Name"
                        description="Short description of the item goaes nicely here."
                        date="10/10/2026"
                        itemBackground={itemBackground}
                    />
                    <AssetSectionItem
                        icon="chart"
                        name="Item Name"
                        description="Short description of the item goaes nicely here."
                        date="10/10/2026"
                        itemBackground={itemBackground}
                    />
                    <AssetSectionItem
                        icon="chart"
                        name="Item Name"
                        description="Short description of the item goaes nicely here."
                        date="10/10/2026"
                        itemBackground={itemBackground}
                    />
                    <AssetSectionItem
                        icon="chart"
                        name="Item Name"
                        description="Short description of the item goaes nicely here."
                        date="10/10/2026"
                        itemBackground={itemBackground}
                    />
                </div>
            </section>
        </>
    )
}
