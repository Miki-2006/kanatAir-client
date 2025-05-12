import styles from "./form.module.css";

const PassengerSelect = ({ passenger, setPassenger, open, setOpen }) => {
  const updateCount = (type, action) => {
    setPassenger((prev) => {
      const newCount =
        action === "increment" ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      return { ...prev, [type]: newCount };
    });
  };

  return (
    <div className={styles.setPassenger}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {`${passenger.adults} взрослых, ${passenger.children} детей, ${passenger.infants} младенцев`}
      </button>
      {open && (
        <div className={styles.passengerBlock}>
          {["adults", "children", "infants"].map((type, index) => (
            <div key={index} className={styles.block}>
              <span>
                {type === "adults"
                  ? "Взрослые"
                  : type === "children"
                  ? "Дети"
                  : "Младенцы"}
              </span>
              <button onClick={(e) => { e.preventDefault(); updateCount(type, "decrement"); }}>-</button>
              <span>{passenger[type]}</span>
              <button onClick={(e) => { e.preventDefault(); updateCount(type, "increment"); }}>+</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PassengerSelect;
