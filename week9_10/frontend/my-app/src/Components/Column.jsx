export default function Column({ children, temp, icon }) {
    return (
        <div className="col-sm">
            <img src={"https://" + icon} alt={icon}></img>
            {temp} °C
        </div>
    );
} 