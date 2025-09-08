export interface customButtonProps {
    title: string;
    containerStyles?; string;
    handleClick?;
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "buttom" | "submit";
}

export interface SearchManufacturerProps {
    anufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}